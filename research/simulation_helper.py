"""Simulation helpers and terminal rendering utilities for GraphGame."""

from __future__ import annotations

import argparse
from dataclasses import dataclass
import json
import random
from statistics import mean
import sys
from typing import Iterable, Mapping, Sequence, TextIO

if __package__ in (None, ""):
    import os

    sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from research.game_backend import GraphBoard, GraphGame, NodeId, PlacementOutcome


@dataclass(frozen=True)
class TurnLog:
    """Trace information for a single completed turn."""

    turn: int
    rolls: tuple[tuple[int, int, int, int, int], ...]
    freeze_sets: tuple[tuple[int, ...], ...]
    locked_value: int
    chosen_node: NodeId
    outcome: PlacementOutcome
    score_after_turn: int


@dataclass(frozen=True)
class GameLog:
    """Trace information for a full game."""

    seed: int | None
    turns: tuple[TurnLog, ...]
    final_score: int
    node_count: int


@dataclass(frozen=True)
class BatchSimulationSummary:
    """Aggregate output for multiple game simulations."""

    runs: int
    base_seed: int | None
    scores: tuple[int, ...]

    @property
    def min_score(self) -> int:
        return min(self.scores)

    @property
    def max_score(self) -> int:
        return max(self.scores)

    @property
    def average_score(self) -> float:
        return mean(self.scores)


def generate_random_board(
    node_count: int,
    edge_probability: float,
    seed: int | None = None,
) -> GraphBoard:
    """Generate a random undirected board using an Erdos-Renyi model."""

    if node_count <= 0:
        raise ValueError("node_count must be >= 1.")
    if edge_probability < 0 or edge_probability > 1:
        raise ValueError("edge_probability must be in [0, 1].")

    rng = random.Random(seed)
    nodes = [f"N{i}" for i in range(node_count)]
    adjacency: dict[str, set[str]] = {node: set() for node in nodes}

    for left in range(node_count):
        for right in range(left + 1, node_count):
            if rng.random() <= edge_probability:
                a = nodes[left]
                b = nodes[right]
                adjacency[a].add(b)
                adjacency[b].add(a)

    return GraphBoard({node: neighbors for node, neighbors in adjacency.items()})


def load_board_from_json(json_path: str) -> GraphBoard:
    """Load adjacency mapping from a JSON file.

    Expected format:
        {
          "A": ["B", "C"],
          "B": ["A"],
          "C": ["A"]
        }
    """

    with open(json_path, "r", encoding="utf-8") as handle:
        raw = json.load(handle)

    if not isinstance(raw, dict):
        raise ValueError("Board JSON must be an object mapping node -> neighbor list.")

    adjacency: dict[str, list[str]] = {}
    for node, neighbors in raw.items():
        if not isinstance(neighbors, list):
            raise ValueError(f"Neighbors for {node!r} must be a list.")
        adjacency[str(node)] = [str(neighbor) for neighbor in neighbors]

    return GraphBoard(adjacency)


def simulate_many_games(
    board: GraphBoard | Mapping[NodeId, Iterable[NodeId]],
    runs: int,
    base_seed: int | None = None,
    max_rolls: int = 3,
    freeze_threshold: int = 5,
    hold_at_total: int = 22,
    move_policy: str = "heuristic",
) -> BatchSimulationSummary:
    """Run multiple games and return score distribution summary."""

    if runs <= 0:
        raise ValueError("runs must be >= 1.")

    resolved_board = board if isinstance(board, GraphBoard) else GraphBoard(board)
    scores: list[int] = []
    for run_index in range(runs):
        game_seed = None if base_seed is None else base_seed + run_index
        log = play_game_with_trace(
            resolved_board,
            seed=game_seed,
            max_rolls=max_rolls,
            freeze_threshold=freeze_threshold,
            hold_at_total=hold_at_total,
            move_policy=move_policy,
            stream=None,
        )
        scores.append(log.final_score)

    return BatchSimulationSummary(runs=runs, base_seed=base_seed, scores=tuple(scores))


def play_game_with_trace(
    board: GraphBoard | Mapping[NodeId, Iterable[NodeId]],
    seed: int | None = None,
    *,
    max_rolls: int = 3,
    freeze_threshold: int = 5,
    hold_at_total: int = 22,
    move_policy: str = "heuristic",
    stream: TextIO | None = None,
) -> GameLog:
    """Play one game automatically and optionally print every placement."""

    _validate_roll_config(max_rolls=max_rolls, freeze_threshold=freeze_threshold)
    if move_policy not in {"heuristic", "random"}:
        raise ValueError("move_policy must be 'heuristic' or 'random'.")

    resolved_board = board if isinstance(board, GraphBoard) else GraphBoard(board)
    game = GraphGame(resolved_board, seed=seed)
    policy_rng = random.Random(seed)

    turns: list[TurnLog] = []
    if stream is not None:
        stream.write("=== GAME START ===\n")
        stream.write(
            f"nodes={game.board.node_count} components={len(game.board.connected_components())} "
            f"game_seed={seed}\n"
        )
        stream.write(render_graph_state(game))
        stream.write("\n")

    turn = 1
    while not game.is_finished:
        rolls: list[tuple[int, int, int, int, int]] = []
        freeze_sets: list[tuple[int, ...]] = []

        dice = game.roll_dice()
        rolls.append(dice)

        while game.rolls_used < max_rolls:
            current_total = sum(rolls[-1])
            if current_total >= hold_at_total:
                break
            freeze = _freeze_indices(rolls[-1], freeze_threshold)
            if len(freeze) == 5:
                break
            freeze_sets.append(freeze)
            dice = game.roll_dice(freeze)
            rolls.append(dice)

        locked_value = game.lock_roll_value()
        chosen_node = _choose_node(game, value=locked_value, policy=move_policy, rng=policy_rng)
        outcome = game.place_value(chosen_node)

        log = TurnLog(
            turn=turn,
            rolls=tuple(rolls),
            freeze_sets=tuple(freeze_sets),
            locked_value=locked_value,
            chosen_node=chosen_node,
            outcome=outcome,
            score_after_turn=game.score,
        )
        turns.append(log)

        if stream is not None:
            _write_turn(stream=stream, game=game, turn_log=log)
            stream.write(render_graph_state(game, highlight_node=chosen_node))
            stream.write("\n")

        turn += 1

    final_score = game.final_score
    if stream is not None:
        stream.write(f"=== GAME END === final_score={final_score}\n")

    return GameLog(
        seed=seed,
        turns=tuple(turns),
        final_score=final_score,
        node_count=game.board.node_count,
    )


def render_graph_state(game: GraphGame, highlight_node: NodeId | None = None) -> str:
    """Render graph state as terminal-friendly adjacency and edge lists."""

    board = game.board
    node_labels = {node: str(node) for node in board.nodes}
    node_width = max(4, max(len(label) for label in node_labels.values()))

    lines: list[str] = []
    lines.append("Graph:")
    lines.append(f"score={game.score} open={len(game.open_nodes())}/{board.node_count}")
    lines.append("nodes:")
    lines.append(
        f"  {'node'.ljust(node_width)}  state   value  neighbors"
    )
    for node in board.nodes:
        view = game.node(node)
        marker = "*" if node == highlight_node else " "
        state = "OPEN" if view.is_open else "CLOSED"
        value = "." if view.value is None else str(view.value)
        neighbors = ", ".join(str(neighbor) for neighbor in board.neighbors(node)) or "-"
        lines.append(
            f"{marker} {node_labels[node].ljust(node_width)}  {state.ljust(6)}  "
            f"{value.rjust(5)}  {neighbors}"
        )

    lines.append("edges:")
    edges = _edges(board)
    if edges:
        for left, right in edges:
            lines.append(f"  {left} -- {right}")
    else:
        lines.append("  (none)")

    return "\n".join(lines)


def _choose_node(
    game: GraphGame,
    value: int,
    policy: str,
    rng: random.Random,
) -> NodeId:
    legal = list(game.legal_moves())
    if not legal:
        raise RuntimeError("No legal moves available.")

    if policy == "random":
        return rng.choice(legal)

    order = {node: index for index, node in enumerate(game.board.nodes)}
    best_node = legal[0]
    best_rank = _node_rank(game, best_node, value, order)
    for node in legal[1:]:
        rank = _node_rank(game, node, value, order)
        if rank > best_rank:
            best_node = node
            best_rank = rank
    return best_node


def _node_rank(
    game: GraphGame,
    node: NodeId,
    value: int,
    order: Mapping[NodeId, int],
) -> tuple[int, int, int]:
    forced_zero = _would_force_zero(game, node=node, value=value)
    closed_neighbors = sum(
        1 for neighbor in game.board.neighbors(node) if not game.node(neighbor).is_open
    )
    # Prioritize keeping the rolled value, then maximizing expansion.
    return (0 if forced_zero else 1, closed_neighbors, -order[node])


def _would_force_zero(game: GraphGame, node: NodeId, value: int) -> bool:
    for neighbor in game.board.neighbors(node):
        neighbor_value = game.node(neighbor).value
        if neighbor_value is not None and neighbor_value >= value:
            return True
    return False


def _freeze_indices(dice: Sequence[int], freeze_threshold: int) -> tuple[int, ...]:
    return tuple(index for index, face in enumerate(dice) if face >= freeze_threshold)


def _write_turn(stream: TextIO, game: GraphGame, turn_log: TurnLog) -> None:
    stream.write(f"\nTurn {turn_log.turn}\n")
    for idx, dice in enumerate(turn_log.rolls, start=1):
        frozen_text = ""
        if idx > 1:
            frozen = turn_log.freeze_sets[idx - 2]
            frozen_text = f" frozen={list(frozen)}"
        stream.write(f"  roll {idx}: {list(dice)} total={sum(dice)}{frozen_text}\n")

    stream.write(f"  locked V={turn_log.locked_value}\n")
    stream.write(
        f"  placed node={turn_log.chosen_node} value={turn_log.outcome.placed_value} "
        f"forced_zero={turn_log.outcome.forced_zero}\n"
    )
    stream.write(f"  newly_opened={list(turn_log.outcome.newly_opened)}\n")
    stream.write(f"  score_after_turn={turn_log.score_after_turn}\n")
    stream.write(f"  legal_moves_next={list(game.legal_moves())}\n")


def _edges(board: GraphBoard) -> list[tuple[str, str]]:
    sorted_nodes = list(board.nodes)
    order = {node: index for index, node in enumerate(sorted_nodes)}
    seen: set[tuple[NodeId, NodeId]] = set()
    edges: list[tuple[str, str]] = []
    for node in sorted_nodes:
        for neighbor in board.neighbors(node):
            left, right = (node, neighbor)
            if order[left] > order[right]:
                left, right = right, left
            edge = (left, right)
            if edge in seen:
                continue
            seen.add(edge)
            edges.append((str(left), str(right)))
    return edges


def _validate_roll_config(max_rolls: int, freeze_threshold: int) -> None:
    if max_rolls < 1 or max_rolls > 3:
        raise ValueError("max_rolls must be in [1, 3].")
    if freeze_threshold < 1 or freeze_threshold > 6:
        raise ValueError("freeze_threshold must be in [1, 6].")


def _build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description="Play and simulate the graph game with terminal rendering."
    )
    parser.add_argument("--board-json", type=str, default=None, help="Path to board JSON.")
    parser.add_argument("--nodes", type=int, default=10, help="Random board node count.")
    parser.add_argument(
        "--edge-prob",
        type=float,
        default=0.25,
        help="Random board edge probability in [0, 1].",
    )
    parser.add_argument(
        "--board-seed",
        type=int,
        default=None,
        help="Random board generation seed. Omit for pure random board.",
    )
    parser.add_argument(
        "--seed",
        type=int,
        default=None,
        help="Game RNG seed. Omit for pure random gameplay.",
    )
    parser.add_argument(
        "--runs",
        type=int,
        default=1,
        help="Number of simulations. runs=1 prints full turn-by-turn trace.",
    )
    parser.add_argument(
        "--max-rolls",
        type=int,
        default=3,
        help="Max rolls per turn (1 to 3).",
    )
    parser.add_argument(
        "--freeze-threshold",
        type=int,
        default=5,
        help="Auto-freeze dice >= this value during rerolls.",
    )
    parser.add_argument(
        "--hold-at-total",
        type=int,
        default=22,
        help="Stop rerolling if current total reaches this threshold.",
    )
    parser.add_argument(
        "--move-policy",
        choices=["heuristic", "random"],
        default="heuristic",
        help="Automatic move policy.",
    )
    return parser


def _resolve_board(args: argparse.Namespace) -> GraphBoard:
    if args.board_json is not None:
        return load_board_from_json(args.board_json)
    return generate_random_board(
        node_count=args.nodes,
        edge_probability=args.edge_prob,
        seed=args.board_seed,
    )


def main() -> None:
    parser = _build_arg_parser()
    args = parser.parse_args()

    board = _resolve_board(args)

    if args.runs == 1:
        log = play_game_with_trace(
            board=board,
            seed=args.seed,
            max_rolls=args.max_rolls,
            freeze_threshold=args.freeze_threshold,
            hold_at_total=args.hold_at_total,
            move_policy=args.move_policy,
            stream=sys.stdout,
        )
        sys.stdout.write(f"turns={len(log.turns)} final_score={log.final_score}\n")
        return

    summary = simulate_many_games(
        board=board,
        runs=args.runs,
        base_seed=args.seed,
        max_rolls=args.max_rolls,
        freeze_threshold=args.freeze_threshold,
        hold_at_total=args.hold_at_total,
        move_policy=args.move_policy,
    )

    print("=== BATCH SIMULATION ===")
    print(f"runs={summary.runs} base_seed={summary.base_seed}")
    print(f"min_score={summary.min_score}")
    print(f"max_score={summary.max_score}")
    print(f"average_score={summary.average_score:.2f}")
    print(f"scores={list(summary.scores)}")


if __name__ == "__main__":
    main()
