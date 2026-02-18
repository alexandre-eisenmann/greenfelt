"""Agent-driven simulation and board search for the graph game.

This module adds:
1) LLM-style stochastic play (local, no API required).
2) Same-seed variance experiment (same board seed + same game seed).
3) Human-friendly board search for node counts in the 10-20 range.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from functools import lru_cache
import json
import math
import os
import random
from statistics import mean, pstdev
import sys
from typing import Callable, Iterable, Mapping, Protocol, Sequence, TextIO

if __package__ in (None, ""):
    import os

    sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from research.game_backend import GraphBoard, GraphGame, NodeId, PlacementOutcome
from research.simulation_helper import generate_random_board, load_board_from_json, render_graph_state


@dataclass(frozen=True)
class AgentTurnLog:
    turn: int
    legal_moves_before: int
    rolls: tuple[tuple[int, int, int, int, int], ...]
    freeze_sets: tuple[tuple[int, ...], ...]
    locked_value: int
    chosen_node: NodeId
    outcome: PlacementOutcome
    score_after_turn: int


@dataclass(frozen=True)
class AgentGameLog:
    board_seed: int | None
    game_seed: int | None
    agent_name: str
    turns: tuple[AgentTurnLog, ...]
    final_score: int
    node_count: int

    @property
    def forced_zero_rate(self) -> float:
        if not self.turns:
            return 0.0
        forced = sum(1 for turn in self.turns if turn.outcome.forced_zero)
        return forced / len(self.turns)

    @property
    def avg_legal_moves_before(self) -> float:
        if not self.turns:
            return 0.0
        return mean(turn.legal_moves_before for turn in self.turns)


@dataclass(frozen=True)
class BoardEvaluation:
    node_count: int
    edge_probability: float
    board_seed: int
    runs: int
    edge_count: int
    edge_density: float
    sparsity_score: float
    average_score: float
    std_score: float
    average_forced_zero_rate: float
    std_forced_zero_rate: float
    average_legal_moves: float
    variability_index: float
    is_planar: bool | None
    board: GraphBoard

    @property
    def playability_index(self) -> float:
        """Backward-compatible alias."""
        return self.variability_index


class GameAgent(Protocol):
    name: str

    def choose_freeze(
        self,
        *,
        game: GraphGame,
        dice: tuple[int, int, int, int, int],
        rolls_used: int,
        max_rolls: int,
    ) -> tuple[int, ...] | None:
        """Return freeze indices for next roll, or None to lock now."""

    def choose_node(self, *, game: GraphGame, value: int) -> NodeId:
        """Pick one legal node for placement."""


class HeuristicAgent:
    name = "heuristic"

    def __init__(self, freeze_threshold: int = 5, hold_at_total: int = 22) -> None:
        self.freeze_threshold = freeze_threshold
        self.hold_at_total = hold_at_total

    def choose_freeze(
        self,
        *,
        game: GraphGame,
        dice: tuple[int, int, int, int, int],
        rolls_used: int,
        max_rolls: int,
    ) -> tuple[int, ...] | None:
        if rolls_used >= max_rolls:
            return None
        if sum(dice) >= self.hold_at_total:
            return None
        freeze = tuple(idx for idx, face in enumerate(dice) if face >= self.freeze_threshold)
        if len(freeze) == 5:
            return None
        return freeze

    def choose_node(self, *, game: GraphGame, value: int) -> NodeId:
        legal = list(game.legal_moves())
        if not legal:
            raise RuntimeError("No legal moves available.")

        order = {node: idx for idx, node in enumerate(game.board.nodes)}
        best = legal[0]
        best_rank = _node_rank(game=game, node=best, value=value, order=order)
        for node in legal[1:]:
            rank = _node_rank(game=game, node=node, value=value, order=order)
            if rank > best_rank:
                best = node
                best_rank = rank
        return best


class RandomAgent:
    name = "random"

    def __init__(self, decision_seed: int | None = None) -> None:
        self._rng = random.Random(decision_seed)

    def choose_freeze(
        self,
        *,
        game: GraphGame,
        dice: tuple[int, int, int, int, int],
        rolls_used: int,
        max_rolls: int,
    ) -> tuple[int, ...] | None:
        if rolls_used >= max_rolls:
            return None
        if self._rng.random() < 0.45:
            return None

        freeze = [
            idx
            for idx, face in enumerate(dice)
            if (face >= 4 and self._rng.random() < 0.8) or self._rng.random() < 0.15
        ]
        freeze_unique = tuple(sorted(set(freeze)))
        if len(freeze_unique) == 5:
            return None
        return freeze_unique

    def choose_node(self, *, game: GraphGame, value: int) -> NodeId:
        legal = list(game.legal_moves())
        if not legal:
            raise RuntimeError("No legal moves available.")
        return self._rng.choice(legal)


class LLMStyleAgent:
    """Local stochastic policy that mimics non-deterministic LLM behavior."""

    name = "llm-style"

    def __init__(self, temperature: float = 1.0, decision_seed: int | None = None) -> None:
        if temperature <= 0:
            raise ValueError("temperature must be > 0.")
        self.temperature = temperature
        self._rng = random.Random(decision_seed)

    def choose_freeze(
        self,
        *,
        game: GraphGame,
        dice: tuple[int, int, int, int, int],
        rolls_used: int,
        max_rolls: int,
    ) -> tuple[int, ...] | None:
        if rolls_used >= max_rolls:
            return None

        total = sum(dice)
        high = tuple(idx for idx, face in enumerate(dice) if face >= 5)
        mid = tuple(idx for idx, face in enumerate(dice) if face >= 4)
        top_two = tuple(sorted(range(5), key=lambda idx: dice[idx], reverse=True)[:2])
        candidates: list[tuple[int, ...] | None] = [None, high, mid, top_two, ()]

        scores: list[float] = []
        for candidate in candidates:
            if candidate is None:
                scores.append(total - 0.35 * rolls_used)
                continue
            unique = tuple(sorted(set(candidate)))
            if len(unique) == 5:
                scores.append(-1000.0)
                continue
            kept = sum(dice[idx] for idx in unique)
            reroll = 5 - len(unique)
            expected = kept + reroll * 3.5
            future_option_bonus = 0.1 * (max_rolls - rolls_used)
            scores.append(expected + future_option_bonus)

        pick = _sample_with_temperature(
            rng=self._rng,
            items=candidates,
            scores=scores,
            temperature=self.temperature,
        )
        if pick is not None and len(pick) == 5:
            return None
        return tuple(sorted(set(pick or ())))

    def choose_node(self, *, game: GraphGame, value: int) -> NodeId:
        legal = list(game.legal_moves())
        if not legal:
            raise RuntimeError("No legal moves available.")

        order = {node: idx for idx, node in enumerate(game.board.nodes)}
        scores: list[float] = []
        for node in legal:
            forced_zero = _would_force_zero(game=game, node=node, value=value)
            closed_neighbors = sum(
                1 for neighbor in game.board.neighbors(node) if not game.node(neighbor).is_open
            )
            safe_bonus = 5.0 if not forced_zero else -4.0
            expansion_bonus = 1.3 * closed_neighbors
            center_bonus = -0.02 * order[node]
            scores.append(safe_bonus + expansion_bonus + center_bonus)

        return _sample_with_temperature(
            rng=self._rng,
            items=legal,
            scores=scores,
            temperature=self.temperature,
        )


class OpenAILLMAgent:
    """Optional real LLM policy via OpenAI API.

    If API call fails or returns invalid output, this agent falls back to HeuristicAgent.
    """

    name = "llm-openai"

    def __init__(
        self,
        model: str = "gpt-5-mini",
        temperature: float = 1.0,
        api_key: str | None = None,
    ) -> None:
        self.model = model
        self.temperature = temperature
        self._api_key = api_key or os.getenv("OPENAI_API_KEY")
        self._fallback = HeuristicAgent()

    def choose_freeze(
        self,
        *,
        game: GraphGame,
        dice: tuple[int, int, int, int, int],
        rolls_used: int,
        max_rolls: int,
    ) -> tuple[int, ...] | None:
        if rolls_used >= max_rolls:
            return None

        prompt = _freeze_prompt(game=game, dice=dice, rolls_used=rolls_used, max_rolls=max_rolls)
        text = self._complete(prompt)
        parsed = _parse_json_object(text)
        if parsed is None:
            return self._fallback.choose_freeze(
                game=game, dice=dice, rolls_used=rolls_used, max_rolls=max_rolls
            )

        action = str(parsed.get("action", "lock")).strip().lower()
        if action == "lock":
            return None
        if action != "reroll":
            return self._fallback.choose_freeze(
                game=game, dice=dice, rolls_used=rolls_used, max_rolls=max_rolls
            )

        freeze_raw = parsed.get("freeze", [])
        if not isinstance(freeze_raw, list):
            return self._fallback.choose_freeze(
                game=game, dice=dice, rolls_used=rolls_used, max_rolls=max_rolls
            )
        freeze = []
        for value in freeze_raw:
            if isinstance(value, int) and 0 <= value <= 4:
                freeze.append(value)
        freeze_unique = tuple(sorted(set(freeze)))
        if len(freeze_unique) == 5:
            return None
        return freeze_unique

    def choose_node(self, *, game: GraphGame, value: int) -> NodeId:
        legal = list(game.legal_moves())
        if not legal:
            raise RuntimeError("No legal moves available.")

        prompt = _node_prompt(game=game, value=value, legal=legal)
        text = self._complete(prompt)
        parsed = _parse_json_object(text)
        if parsed is None:
            return self._fallback.choose_node(game=game, value=value)

        chosen = parsed.get("node")
        if chosen in legal:
            return chosen

        chosen_text = str(chosen)
        for node in legal:
            if str(node) == chosen_text:
                return node
        return self._fallback.choose_node(game=game, value=value)

    def _complete(self, prompt: str) -> str:
        if not self._api_key:
            return ""
        try:
            from openai import OpenAI  # type: ignore
        except Exception:
            return ""

        try:
            client = OpenAI(api_key=self._api_key)
            response = client.responses.create(
                model=self.model,
                input=prompt,
                temperature=self.temperature,
            )
            text = getattr(response, "output_text", "")
            return text if isinstance(text, str) else ""
        except Exception:
            return ""


def play_game_with_agent_trace(
    *,
    board: GraphBoard | Mapping[NodeId, Iterable[NodeId]],
    agent: GameAgent,
    game_seed: int | None,
    board_seed: int | None = None,
    max_rolls: int = 3,
    stream: TextIO | None = None,
) -> AgentGameLog:
    if max_rolls < 1 or max_rolls > 3:
        raise ValueError("max_rolls must be in [1, 3].")

    resolved_board = board if isinstance(board, GraphBoard) else GraphBoard(board)
    game = GraphGame(resolved_board, seed=game_seed)
    turns: list[AgentTurnLog] = []

    writer = stream
    if writer is not None:
        writer.write("=== GAME START ===\n")
        writer.write(
            f"agent={agent.name} board_seed={board_seed} game_seed={game_seed} "
            f"nodes={game.board.node_count} components={len(game.board.connected_components())}\n"
        )
        writer.write(render_graph_state(game))
        writer.write("\n")

    turn_idx = 1
    while not game.is_finished:
        rolls: list[tuple[int, int, int, int, int]] = []
        freeze_sets: list[tuple[int, ...]] = []
        legal_before = len(game.legal_moves())

        dice = game.roll_dice()
        rolls.append(dice)

        while game.rolls_used < max_rolls:
            freeze = agent.choose_freeze(
                game=game,
                dice=rolls[-1],
                rolls_used=game.rolls_used,
                max_rolls=max_rolls,
            )
            if freeze is None:
                break
            freeze_valid = tuple(sorted(set(idx for idx in freeze if 0 <= idx <= 4)))
            if len(freeze_valid) == 5:
                break
            freeze_sets.append(freeze_valid)
            dice = game.roll_dice(freeze_valid)
            rolls.append(dice)

        locked = game.lock_roll_value()
        node = agent.choose_node(game=game, value=locked)
        outcome = game.place_value(node)

        turn_log = AgentTurnLog(
            turn=turn_idx,
            legal_moves_before=legal_before,
            rolls=tuple(rolls),
            freeze_sets=tuple(freeze_sets),
            locked_value=locked,
            chosen_node=node,
            outcome=outcome,
            score_after_turn=game.score,
        )
        turns.append(turn_log)

        if writer is not None:
            _write_agent_turn(writer, turn_log, game)
            writer.write(render_graph_state(game, highlight_node=node))
            writer.write("\n")

        turn_idx += 1

    final_score = game.final_score
    if writer is not None:
        writer.write(f"=== GAME END === final_score={final_score}\n")

    return AgentGameLog(
        board_seed=board_seed,
        game_seed=game_seed,
        agent_name=agent.name,
        turns=tuple(turns),
        final_score=final_score,
        node_count=game.board.node_count,
    )


def run_same_seed_variance_experiment(
    *,
    board: GraphBoard,
    board_seed: int | None,
    game_seed: int | None,
    repeats: int,
    agent_factory: Callable[[], GameAgent],
    max_rolls: int = 3,
    trace: bool = False,
    stream: TextIO | None = sys.stdout,
) -> tuple[AgentGameLog, ...]:
    if repeats <= 0:
        raise ValueError("repeats must be >= 1.")

    logs: list[AgentGameLog] = []
    for idx in range(repeats):
        log = play_game_with_agent_trace(
            board=board,
            board_seed=board_seed,
            game_seed=game_seed,
            agent=agent_factory(),
            max_rolls=max_rolls,
            stream=sys.stdout if trace else None,
        )
        logs.append(log)
        if stream is not None:
            if trace:
                stream.write("\n")
            else:
                stream.write(f"run={idx + 1} score={log.final_score} turns={len(log.turns)}\n")

    return tuple(logs)


def evaluate_board_for_humans(
    *,
    board: GraphBoard,
    node_count: int,
    edge_probability: float,
    board_seed: int,
    runs: int,
    base_game_seed: int | None,
    agent_factory: Callable[[], GameAgent],
    max_rolls: int = 3,
    planarity: str = "off",
) -> BoardEvaluation:
    _validate_planarity_mode(planarity)
    if runs <= 0:
        raise ValueError("runs must be >= 1.")

    scores: list[int] = []
    forced_zero_rates: list[float] = []
    legal_moves: list[float] = []
    for run_idx in range(runs):
        game_seed = None if base_game_seed is None else base_game_seed + run_idx
        log = play_game_with_agent_trace(
            board=board,
            board_seed=board_seed,
            game_seed=game_seed,
            agent=agent_factory(),
            max_rolls=max_rolls,
            stream=None,
        )
        scores.append(log.final_score)
        forced_zero_rates.append(log.forced_zero_rate)
        legal_moves.append(log.avg_legal_moves_before)

    avg_score = mean(scores)
    std_score = pstdev(scores) if len(scores) > 1 else 0.0
    avg_forced = mean(forced_zero_rates)
    std_forced = pstdev(forced_zero_rates) if len(forced_zero_rates) > 1 else 0.0
    avg_legal = mean(legal_moves)
    is_planar = _check_planarity(board)
    edge_count = _edge_count(board)
    edge_density = _edge_density(node_count=node_count, edge_count=edge_count)
    sparsity_score = 1.0 - edge_density
    variability = _variability_index(
        std_score=std_score,
        std_forced_zero=std_forced,
        edge_density=edge_density,
        is_planar=is_planar,
        planarity_mode=planarity,
    )

    return BoardEvaluation(
        node_count=node_count,
        edge_probability=edge_probability,
        board_seed=board_seed,
        runs=runs,
        edge_count=edge_count,
        edge_density=edge_density,
        sparsity_score=sparsity_score,
        average_score=avg_score,
        std_score=std_score,
        average_forced_zero_rate=avg_forced,
        std_forced_zero_rate=std_forced,
        average_legal_moves=avg_legal,
        variability_index=variability,
        is_planar=is_planar,
        board=board,
    )


def search_human_friendly_boards(
    *,
    min_nodes: int = 10,
    max_nodes: int = 20,
    edge_probabilities: Sequence[float] = (0.18, 0.25, 0.35),
    candidates_per_combo: int = 5,
    runs_per_board: int = 30,
    board_seed_start: int = 1000,
    base_game_seed: int = 5000,
    agent_factory: Callable[[], GameAgent] = HeuristicAgent,
    max_rolls: int = 3,
    top_k: int = 10,
    planarity: str = "off",
) -> tuple[BoardEvaluation, ...]:
    _validate_planarity_mode(planarity)
    if min_nodes <= 0 or max_nodes < min_nodes:
        raise ValueError("Invalid node range.")
    if candidates_per_combo <= 0:
        raise ValueError("candidates_per_combo must be >= 1.")
    if runs_per_board <= 0:
        raise ValueError("runs_per_board must be >= 1.")
    if top_k <= 0:
        raise ValueError("top_k must be >= 1.")

    evaluations: list[BoardEvaluation] = []
    seed_counter = board_seed_start
    for node_count in range(min_nodes, max_nodes + 1):
        for edge_prob in edge_probabilities:
            for _ in range(candidates_per_combo):
                board = _generate_connected_board(
                    node_count=node_count,
                    edge_probability=edge_prob,
                    seed=seed_counter,
                    require_planar=(planarity == "strict"),
                )
                evaluation = evaluate_board_for_humans(
                    board=board,
                    node_count=node_count,
                    edge_probability=edge_prob,
                    board_seed=seed_counter,
                    runs=runs_per_board,
                    base_game_seed=base_game_seed,
                    agent_factory=agent_factory,
                    max_rolls=max_rolls,
                    planarity=planarity,
                )
                evaluations.append(evaluation)
                seed_counter += 1

    evaluations.sort(key=lambda item: item.variability_index, reverse=True)
    return tuple(evaluations[:top_k])


def _node_rank(
    *,
    game: GraphGame,
    node: NodeId,
    value: int,
    order: Mapping[NodeId, int],
) -> tuple[int, int, int]:
    forced = _would_force_zero(game=game, node=node, value=value)
    closed_neighbors = sum(
        1 for neighbor in game.board.neighbors(node) if not game.node(neighbor).is_open
    )
    return (0 if forced else 1, closed_neighbors, -order[node])


def _would_force_zero(*, game: GraphGame, node: NodeId, value: int) -> bool:
    for neighbor in game.board.neighbors(node):
        neighbor_value = game.node(neighbor).value
        if neighbor_value is not None and neighbor_value >= value:
            return True
    return False


def _sample_with_temperature(
    *,
    rng: random.Random,
    items: Sequence,
    scores: Sequence[float],
    temperature: float,
):
    if len(items) != len(scores):
        raise ValueError("items and scores must have same length.")
    if not items:
        raise ValueError("items must not be empty.")

    max_score = max(scores)
    exp_values = [math.exp((score - max_score) / temperature) for score in scores]
    total = sum(exp_values)
    if total <= 0:
        return items[0]
    pick = rng.random() * total
    cumulative = 0.0
    for item, value in zip(items, exp_values):
        cumulative += value
        if pick <= cumulative:
            return item
    return items[-1]


def _variability_index(
    *,
    std_score: float,
    std_forced_zero: float,
    edge_density: float,
    is_planar: bool | None,
    planarity_mode: str,
) -> float:
    # Score variability can be large; cap for stable scale.
    score_component = max(0.0, min(1.0, std_score / 30.0))
    # Forced-zero rate is in [0, 1]; std is at most 0.5.
    forced_component = max(0.0, min(1.0, std_forced_zero / 0.25))
    # Prefer sparse graphs for tension.
    sparsity_component = max(0.0, min(1.0, 1.0 - edge_density))
    base = 0.4 * score_component + 0.4 * forced_component + 0.2 * sparsity_component
    if planarity_mode != "prefer":
        return base

    planarity_component = 0.5 if is_planar is None else (1.0 if is_planar else 0.0)
    return 0.9 * base + 0.1 * planarity_component


def _edge_count(board: GraphBoard) -> int:
    count = 0
    for node in board.nodes:
        count += len(board.neighbors(node))
    return count // 2


def _edge_density(*, node_count: int, edge_count: int) -> float:
    if node_count <= 1:
        return 0.0
    max_edges = node_count * (node_count - 1) / 2.0
    return max(0.0, min(1.0, edge_count / max_edges))


def _write_agent_turn(writer: TextIO, turn: AgentTurnLog, game: GraphGame) -> None:
    writer.write(f"\nTurn {turn.turn}\n")
    writer.write(f"  legal_moves_before={turn.legal_moves_before}\n")
    for idx, roll in enumerate(turn.rolls, start=1):
        frozen_text = ""
        if idx > 1:
            frozen_text = f" frozen={list(turn.freeze_sets[idx - 2])}"
        writer.write(f"  roll {idx}: {list(roll)} total={sum(roll)}{frozen_text}\n")
    writer.write(f"  locked V={turn.locked_value}\n")
    writer.write(
        f"  placed node={turn.chosen_node} value={turn.outcome.placed_value} "
        f"forced_zero={turn.outcome.forced_zero}\n"
    )
    writer.write(f"  newly_opened={list(turn.outcome.newly_opened)}\n")
    writer.write(f"  score_after_turn={turn.score_after_turn}\n")
    writer.write(f"  legal_moves_next={list(game.legal_moves())}\n")


def _freeze_prompt(
    *,
    game: GraphGame,
    dice: tuple[int, int, int, int, int],
    rolls_used: int,
    max_rolls: int,
) -> str:
    return (
        "You are choosing dice freeze action for a graph game turn.\n"
        f"rolls_used={rolls_used} max_rolls={max_rolls}\n"
        f"dice={list(dice)} total={sum(dice)}\n"
        f"legal_moves={list(game.legal_moves())}\n"
        "Return JSON only: {'action':'lock'} OR {'action':'reroll','freeze':[indices]} "
        "where indices are integers 0..4."
    )


def _node_prompt(*, game: GraphGame, value: int, legal: Sequence[NodeId]) -> str:
    node_lines = []
    for node in legal:
        neighbors = list(game.board.neighbors(node))
        filled = {
            str(neighbor): game.node(neighbor).value
            for neighbor in neighbors
            if game.node(neighbor).value is not None
        }
        node_lines.append(
            f"node={node} neighbors={neighbors} filled_neighbor_values={filled}"
        )
    return (
        "Choose one legal node for placement.\n"
        f"V={value}\n"
        f"legal={list(legal)}\n"
        + "\n".join(node_lines)
        + "\nReturn JSON only: {'node':'<id>'}."
    )


def _parse_json_object(text: str) -> dict | None:
    text = text.strip()
    if not text:
        return None
    try:
        parsed = json.loads(text)
        if isinstance(parsed, dict):
            return parsed
    except Exception:
        pass

    # Fallback: try to parse from first {...} span.
    start = text.find("{")
    end = text.rfind("}")
    if start == -1 or end == -1 or end <= start:
        return None
    chunk = text[start : end + 1]
    try:
        parsed = json.loads(chunk)
        return parsed if isinstance(parsed, dict) else None
    except Exception:
        return None


def _make_agent(
    *,
    agent_name: str,
    temperature: float,
    decision_seed: int | None,
    llm_model: str,
) -> GameAgent:
    if agent_name == "heuristic":
        return HeuristicAgent()
    if agent_name == "random":
        return RandomAgent(decision_seed=decision_seed)
    if agent_name == "llm-style":
        return LLMStyleAgent(temperature=temperature, decision_seed=decision_seed)
    if agent_name == "llm-openai":
        return OpenAILLMAgent(model=llm_model, temperature=temperature)
    raise ValueError(f"Unknown agent: {agent_name}")


def _resolve_board(args: argparse.Namespace) -> GraphBoard:
    planarity = getattr(args, "planarity", "off")
    _validate_planarity_mode(planarity)
    if args.board_json:
        board = load_board_from_json(args.board_json)
        _require_connected(board)
        if planarity == "strict":
            _require_planar(board)
        return board
    return _generate_connected_board(
        node_count=args.nodes,
        edge_probability=args.edge_prob,
        seed=args.board_seed,
        require_planar=(planarity == "strict"),
    )


def _generate_connected_board(
    *,
    node_count: int,
    edge_probability: float,
    seed: int | None,
    max_attempts: int = 5000,
    require_planar: bool = False,
) -> GraphBoard:
    if max_attempts <= 0:
        raise ValueError("max_attempts must be >= 1.")
    if require_planar and _networkx_module() is None:
        raise RuntimeError("Planarity checks require networkx. Install networkx or use --planarity off.")

    if seed is None:
        for _ in range(max_attempts):
            board = generate_random_board(
                node_count=node_count,
                edge_probability=edge_probability,
                seed=None,
            )
            if len(board.connected_components()) == 1 and (
                not require_planar or _check_planarity(board)
            ):
                return board
    else:
        chooser = random.Random(seed)
        for _ in range(max_attempts):
            candidate_seed = chooser.randint(0, 2**31 - 1)
            board = generate_random_board(
                node_count=node_count,
                edge_probability=edge_probability,
                seed=candidate_seed,
            )
            if len(board.connected_components()) == 1 and (
                not require_planar or _check_planarity(board)
            ):
                return board

    raise ValueError(
        "Could not generate a connected board. Increase edge probability or change seed."
    )


def _require_connected(board: GraphBoard) -> None:
    components = board.connected_components()
    if len(components) != 1:
        raise ValueError(
            f"Board must be connected (1 component), got {len(components)} components."
        )


def _require_planar(board: GraphBoard) -> None:
    planar = _check_planarity(board)
    if planar is None:
        raise RuntimeError("Planarity checks require networkx. Install networkx or use --planarity off.")
    if not planar:
        raise ValueError("Board must be planar for --planarity strict.")


def _validate_planarity_mode(planarity: str) -> None:
    if planarity not in {"off", "prefer", "strict"}:
        raise ValueError("planarity must be one of: off, prefer, strict.")


@lru_cache(maxsize=1)
def _networkx_module():
    try:
        import networkx as nx  # type: ignore

        return nx
    except Exception:
        return None


def _check_planarity(board: GraphBoard) -> bool | None:
    nx = _networkx_module()
    if nx is None:
        return None

    graph = nx.Graph()
    for node in board.nodes:
        for neighbor in board.neighbors(node):
            graph.add_edge(node, neighbor)

    planar, _ = nx.check_planarity(graph)
    return bool(planar)


def _parse_edge_probs(raw: str) -> tuple[float, ...]:
    values = []
    for piece in raw.split(","):
        piece = piece.strip()
        if not piece:
            continue
        value = float(piece)
        if value < 0 or value > 1:
            raise ValueError(f"Invalid edge probability: {value}")
        values.append(value)
    if not values:
        raise ValueError("At least one edge probability is required.")
    return tuple(values)


def _board_to_adjacency_json(board: GraphBoard) -> str:
    adjacency = {str(node): [str(n) for n in board.neighbors(node)] for node in board.nodes}
    return json.dumps(adjacency, separators=(",", ":"), sort_keys=True)


def _cmd_play(args: argparse.Namespace) -> None:
    board = _resolve_board(args)
    agent = _make_agent(
        agent_name=args.agent,
        temperature=args.temperature,
        decision_seed=args.decision_seed,
        llm_model=args.llm_model,
    )
    log = play_game_with_agent_trace(
        board=board,
        board_seed=args.board_seed,
        game_seed=args.game_seed,
        agent=agent,
        max_rolls=args.max_rolls,
        stream=sys.stdout,
    )
    print(f"turns={len(log.turns)} final_score={log.final_score}")


def _cmd_same_seed_variance(args: argparse.Namespace) -> None:
    board = _resolve_board(args)

    def agent_factory() -> GameAgent:
        return _make_agent(
            agent_name=args.agent,
            temperature=args.temperature,
            decision_seed=args.decision_seed,
            llm_model=args.llm_model,
        )

    logs = run_same_seed_variance_experiment(
        board=board,
        board_seed=args.board_seed,
        game_seed=args.game_seed,
        repeats=args.repeats,
        agent_factory=agent_factory,
        max_rolls=args.max_rolls,
        trace=args.trace,
    )

    scores = [log.final_score for log in logs]
    unique = len(set(scores))
    print("\n=== SAME-SEED VARIANCE SUMMARY ===")
    print(f"agent={args.agent} repeats={args.repeats}")
    print(f"board_seed={args.board_seed} game_seed={args.game_seed}")
    print(f"scores={scores}")
    print(f"unique_scores={unique}")
    if unique > 1:
        print("result=non_deterministic_runs_confirmed")
    else:
        print("result=same_score_this_time_try_higher_temperature_or_more_repeats")


def _cmd_search(args: argparse.Namespace) -> None:
    edge_probs = _parse_edge_probs(args.edge_probs)
    min_nodes = args.min_nodes
    max_nodes = args.max_nodes
    if args.fixed_nodes is not None:
        min_nodes = args.fixed_nodes
        max_nodes = args.fixed_nodes

    def agent_factory() -> GameAgent:
        return _make_agent(
            agent_name=args.agent,
            temperature=args.temperature,
            decision_seed=args.decision_seed,
            llm_model=args.llm_model,
        )

    results = search_human_friendly_boards(
        min_nodes=min_nodes,
        max_nodes=max_nodes,
        edge_probabilities=edge_probs,
        candidates_per_combo=args.candidates_per_combo,
        runs_per_board=args.runs_per_board,
        board_seed_start=args.board_seed_start,
        base_game_seed=args.base_game_seed,
        agent_factory=agent_factory,
        max_rolls=args.max_rolls,
        top_k=args.top_k,
        planarity=args.planarity,
    )

    print(f"=== BOARD SEARCH RESULTS (VARIABILITY-FIRST, planarity={args.planarity}) ===")
    for idx, result in enumerate(results, start=1):
        planar_label = (
            "unknown" if result.is_planar is None else ("yes" if result.is_planar else "no")
        )
        print(
            f"{idx}. variability={result.variability_index:.4f} nodes={result.node_count} "
            f"p={result.edge_probability:.2f} board_seed={result.board_seed} "
            f"planar={planar_label} "
            f"edges={result.edge_count} density={result.edge_density:.3f} "
            f"sparsity={result.sparsity_score:.3f} "
            f"avg_score={result.average_score:.2f} std={result.std_score:.2f} "
            f"forced_zero_avg={result.average_forced_zero_rate:.2f} "
            f"forced_zero_std={result.std_forced_zero_rate:.3f} "
            f"avg_legal_moves={result.average_legal_moves:.2f}"
        )
        print(f"   adjacency={_board_to_adjacency_json(result.board)}")


def _build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="LLM-style agent simulation and board search for the graph game."
    )
    sub = parser.add_subparsers(dest="cmd", required=True)

    common = argparse.ArgumentParser(add_help=False)
    common.add_argument("--board-json", type=str, default=None, help="Path to board JSON.")
    common.add_argument("--nodes", type=int, default=12, help="Random board node count.")
    common.add_argument("--edge-prob", type=float, default=0.24, help="Random board edge probability.")
    common.add_argument("--board-seed", type=int, default=100, help="Board seed.")
    common.add_argument("--game-seed", type=int, default=42, help="Game seed.")
    common.add_argument("--max-rolls", type=int, default=3, help="Max rolls per turn (1..3).")
    common.add_argument(
        "--agent",
        choices=["heuristic", "random", "llm-style", "llm-openai"],
        default="llm-style",
        help="Agent policy.",
    )
    common.add_argument("--temperature", type=float, default=1.0, help="Agent temperature.")
    common.add_argument(
        "--decision-seed",
        type=int,
        default=None,
        help="Decision RNG seed for deterministic policy behavior.",
    )
    common.add_argument("--llm-model", type=str, default="gpt-5-mini", help="Model for llm-openai.")
    common.add_argument(
        "--planarity",
        choices=["off", "prefer", "strict"],
        default="off",
        help="Planarity handling: off, prefer (bonus), strict (require planar).",
    )

    play_cmd = sub.add_parser("play", parents=[common], help="Play one traced game.")
    play_cmd.set_defaults(func=_cmd_play)

    variance_cmd = sub.add_parser(
        "same-seed-variance",
        parents=[common],
        help="Run repeated games with same board_seed and game_seed.",
    )
    variance_cmd.add_argument("--repeats", type=int, default=5, help="Number of repeated runs.")
    variance_cmd.add_argument(
        "--trace",
        action="store_true",
        help="Print full turn trace for each repeated run.",
    )
    variance_cmd.set_defaults(func=_cmd_same_seed_variance)

    search_cmd = sub.add_parser(
        "search",
        parents=[common],
        help="Search for human-friendly boards across 10-20 nodes.",
    )
    search_cmd.add_argument("--min-nodes", type=int, default=10)
    search_cmd.add_argument("--max-nodes", type=int, default=20)
    search_cmd.add_argument(
        "--fixed-nodes",
        type=int,
        default=None,
        help="If set, overrides min/max and evaluates exactly this node count.",
    )
    search_cmd.add_argument(
        "--edge-probs",
        type=str,
        default="0.18,0.25,0.35",
        help="Comma-separated edge probabilities.",
    )
    search_cmd.add_argument("--candidates-per-combo", type=int, default=3)
    search_cmd.add_argument("--runs-per-board", type=int, default=15)
    search_cmd.add_argument("--board-seed-start", type=int, default=2000)
    search_cmd.add_argument("--base-game-seed", type=int, default=7000)
    search_cmd.add_argument("--top-k", type=int, default=10)
    search_cmd.set_defaults(func=_cmd_search)

    return parser


def main() -> None:
    parser = _build_parser()
    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
