"""Backend engine for the graph-filling dice game."""

from __future__ import annotations

from dataclasses import dataclass
import random
from typing import Hashable, Iterable, Mapping, Sequence

NodeId = Hashable


@dataclass(frozen=True)
class NodeView:
    """Public view of a node state."""

    node: NodeId
    is_open: bool
    value: int | None

    @property
    def is_empty(self) -> bool:
        return self.value is None

    @property
    def is_filled(self) -> bool:
        return self.value is not None


@dataclass(frozen=True)
class PlacementOutcome:
    """Result of a placement action."""

    node: NodeId
    rolled_value: int
    placed_value: int
    forced_zero: bool
    newly_opened: tuple[NodeId, ...]


class GraphBoard:
    """Undirected graph board used by the game."""

    def __init__(self, adjacency: Mapping[NodeId, Iterable[NodeId]]) -> None:
        if not adjacency:
            raise ValueError("Board cannot be empty.")

        nodes = set(adjacency.keys())
        for neighbors in adjacency.values():
            nodes.update(neighbors)

        if not nodes:
            raise ValueError("Board cannot be empty.")

        normalized: dict[NodeId, set[NodeId]] = {node: set() for node in nodes}
        for node, neighbors in adjacency.items():
            for neighbor in neighbors:
                if node == neighbor:
                    raise ValueError(f"Self-loops are not supported: {node!r}")
                normalized[node].add(neighbor)
                normalized[neighbor].add(node)

        self._nodes: tuple[NodeId, ...] = self.sort_nodes(nodes)
        self._adjacency: dict[NodeId, tuple[NodeId, ...]] = {
            node: self.sort_nodes(neighbors) for node, neighbors in normalized.items()
        }
        self._components: tuple[tuple[NodeId, ...], ...] | None = None

    @property
    def nodes(self) -> tuple[NodeId, ...]:
        return self._nodes

    @property
    def node_count(self) -> int:
        return len(self._nodes)

    def sort_nodes(self, nodes: Iterable[NodeId]) -> tuple[NodeId, ...]:
        return tuple(sorted(nodes, key=lambda value: repr(value)))

    def neighbors(self, node: NodeId) -> tuple[NodeId, ...]:
        self._require_node(node)
        return self._adjacency[node]

    def connected_components(self) -> tuple[tuple[NodeId, ...], ...]:
        if self._components is not None:
            return self._components

        visited: set[NodeId] = set()
        components: list[tuple[NodeId, ...]] = []
        for node in self._nodes:
            if node in visited:
                continue

            stack = [node]
            component: set[NodeId] = set()
            while stack:
                current = stack.pop()
                if current in visited:
                    continue
                visited.add(current)
                component.add(current)
                stack.extend(self._adjacency[current])
            components.append(self.sort_nodes(component))

        self._components = tuple(components)
        return self._components

    def _require_node(self, node: NodeId) -> None:
        if node not in self._adjacency:
            raise KeyError(f"Unknown node: {node!r}")


class GraphGame:
    """Game engine implementing setup, turn flow, placement rules and scoring."""

    def __init__(
        self,
        board: GraphBoard | Mapping[NodeId, Iterable[NodeId]],
        seed: int | None = None,
        initial_open_nodes: Iterable[NodeId] | None = None,
        initial_open_count: int | None = None,
    ) -> None:
        self._board = board if isinstance(board, GraphBoard) else GraphBoard(board)
        self._seed = seed
        # seed=None keeps pure random behavior.
        self._rng = random.Random(seed)

        self._values: dict[NodeId, int | None] = {node: None for node in self._board.nodes}
        self._open_nodes: set[NodeId] = self._initialize_open_nodes(
            initial_open_nodes=initial_open_nodes,
            initial_open_count=initial_open_count,
        )

        self._phase = "roll"
        self._roll_count = 0
        self._dice: tuple[int, int, int, int, int] | None = None
        self._pending_total: int | None = None

    @property
    def board(self) -> GraphBoard:
        return self._board

    @property
    def seed(self) -> int | None:
        return self._seed

    @property
    def phase(self) -> str:
        return self._phase

    @property
    def is_finished(self) -> bool:
        return all(value is not None for value in self._values.values())

    @property
    def score(self) -> int:
        return sum(value for value in self._values.values() if value is not None)

    @property
    def final_score(self) -> int:
        if not self.is_finished:
            raise RuntimeError("Final score is available only when all nodes are filled.")
        return self.score

    @property
    def rolls_used(self) -> int:
        return self._roll_count

    @property
    def current_dice(self) -> tuple[int, int, int, int, int] | None:
        return self._dice

    @property
    def current_roll_total(self) -> int | None:
        if self._dice is None:
            return None
        return sum(self._dice)

    def node(self, node: NodeId) -> NodeView:
        self._require_node(node)
        return NodeView(node=node, is_open=node in self._open_nodes, value=self._values[node])

    def open_nodes(self) -> tuple[NodeId, ...]:
        return self._ordered_nodes(self._open_nodes)

    def closed_nodes(self) -> tuple[NodeId, ...]:
        return self._ordered_nodes(node for node in self._board.nodes if node not in self._open_nodes)

    def legal_moves(self) -> tuple[NodeId, ...]:
        return self._ordered_nodes(
            node for node in self._open_nodes if self._values[node] is None
        )

    def roll_dice(self, frozen_indices: Iterable[int] = ()) -> tuple[int, int, int, int, int]:
        self._ensure_not_finished()
        if self._phase != "roll":
            raise RuntimeError("Cannot roll now. Lock has already happened for this turn.")
        if self._roll_count >= 3:
            raise RuntimeError("Maximum of 3 rolls reached for this turn.")

        frozen = set(frozen_indices)
        for index in frozen:
            if index < 0 or index > 4:
                raise ValueError(f"Invalid die index: {index}. Must be in [0, 4].")
        if self._roll_count == 0 and frozen:
            raise ValueError("Cannot freeze dice before the first roll.")

        previous = self._dice if self._dice is not None else (0, 0, 0, 0, 0)
        next_values = []
        for index in range(5):
            if index in frozen and self._roll_count > 0:
                next_values.append(previous[index])
            else:
                next_values.append(self._rng.randint(1, 6))

        self._dice = tuple(next_values)  # type: ignore[assignment]
        self._roll_count += 1
        return self._dice

    def lock_roll_value(self) -> int:
        self._ensure_not_finished()
        if self._phase != "roll":
            raise RuntimeError("Roll value is already locked for this turn.")
        if self._dice is None:
            raise RuntimeError("Roll at least once before locking a value.")

        self._pending_total = sum(self._dice)
        self._phase = "place"
        return self._pending_total

    def place_value(self, node: NodeId) -> PlacementOutcome:
        self._ensure_not_finished()
        self._require_node(node)
        if self._phase != "place":
            raise RuntimeError("Lock roll value before placing.")
        if self._pending_total is None:
            raise RuntimeError("Missing pending roll value.")
        if node not in self._open_nodes:
            raise ValueError(f"Node {node!r} is closed.")
        if self._values[node] is not None:
            raise ValueError(f"Node {node!r} is already filled.")

        rolled_value = self._pending_total
        forced_zero = any(
            (self._values[neighbor] is not None and self._values[neighbor] >= rolled_value)
            for neighbor in self._board.neighbors(node)
        )
        placed_value = 0 if forced_zero else rolled_value
        self._values[node] = placed_value

        newly_opened: list[NodeId] = []
        for neighbor in self._board.neighbors(node):
            if neighbor not in self._open_nodes:
                self._open_nodes.add(neighbor)
                newly_opened.append(neighbor)

        self._reset_turn_state()
        return PlacementOutcome(
            node=node,
            rolled_value=rolled_value,
            placed_value=placed_value,
            forced_zero=forced_zero,
            newly_opened=self._ordered_nodes(newly_opened),
        )

    def play_turn(
        self,
        node: NodeId,
        freeze_plan: Sequence[Iterable[int]] = (),
    ) -> PlacementOutcome:
        """Convenience API for a full turn.

        `freeze_plan` contains freeze sets for roll 2 and roll 3.
        Examples:
        - `[]` => 1 total roll
        - `[{0, 2}]` => 2 total rolls
        - `[{0}, {0, 4}]` => 3 total rolls
        """

        if len(freeze_plan) > 2:
            raise ValueError("freeze_plan can define at most two rerolls.")

        self.roll_dice()
        for frozen in freeze_plan:
            self.roll_dice(frozen)
        self.lock_roll_value()
        return self.place_value(node)

    def _initialize_open_nodes(
        self,
        initial_open_nodes: Iterable[NodeId] | None,
        initial_open_count: int | None,
    ) -> set[NodeId]:
        if initial_open_nodes is not None and initial_open_count is not None:
            raise ValueError("Use initial_open_nodes or initial_open_count, not both.")

        if initial_open_nodes is not None:
            chosen = list(initial_open_nodes)
            if not chosen:
                raise ValueError("initial_open_nodes cannot be empty.")
            if len(set(chosen)) != len(chosen):
                raise ValueError("initial_open_nodes cannot contain duplicates.")
            for node in chosen:
                self._require_node(node)
            return set(chosen)

        if initial_open_count is not None:
            if initial_open_count <= 0:
                raise ValueError("initial_open_count must be >= 1.")
            if initial_open_count > self._board.node_count:
                raise ValueError("initial_open_count cannot exceed node count.")
            return set(self._rng.sample(list(self._board.nodes), k=initial_open_count))

        # Default setup: exactly one open node per connected component.
        chosen = {self._rng.choice(component) for component in self._board.connected_components()}
        return chosen

    def _ordered_nodes(self, nodes: Iterable[NodeId]) -> tuple[NodeId, ...]:
        node_set = set(nodes)
        return tuple(node for node in self._board.nodes if node in node_set)

    def _reset_turn_state(self) -> None:
        self._phase = "roll"
        self._roll_count = 0
        self._dice = None
        self._pending_total = None

    def _ensure_not_finished(self) -> None:
        if self.is_finished:
            raise RuntimeError("Game is already finished.")

    def _require_node(self, node: NodeId) -> None:
        if node not in self._values:
            raise KeyError(f"Unknown node: {node!r}")
