"""Export a selected graph into frontend static config.

This keeps graph research in Python while allowing frontend to run without
runtime backend communication.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Iterable, Mapping

if __package__ in (None, ""):
    import os
    import sys

    sys.path.append(os.path.dirname(os.path.dirname(__file__)))

from research.game_backend import GraphBoard, GraphGame
from research.llm_simulation import _check_planarity, _generate_connected_board


def main() -> None:
    parser = argparse.ArgumentParser(description="Export board config for frontend.")
    parser.add_argument("--output", default="public/board-config.json")
    parser.add_argument("--name", default="python-selected-board")
    parser.add_argument("--description", default="Board exported from Python research.")
    parser.add_argument("--board-seed", type=int, default=2022)
    parser.add_argument("--edge-prob", type=float, default=0.26)
    parser.add_argument("--nodes", type=int, default=14)
    parser.add_argument("--game-seed", type=int, default=42)
    parser.add_argument("--selection-mode", default="variability-first")
    parser.add_argument("--planarity-mode", choices=["off", "prefer", "strict"], default="strict")
    parser.add_argument(
        "--board-json",
        default=None,
        help="Optional JSON file containing adjacency mapping. If set, generation flags are ignored.",
    )
    args = parser.parse_args()

    if args.board_json:
        board = _load_board_from_json(args.board_json)
    else:
        board = _generate_connected_board(
            node_count=args.nodes,
            edge_probability=args.edge_prob,
            seed=args.board_seed,
            require_planar=(args.planarity_mode == "strict"),
        )

    adjacency = _adjacency_dict(board)
    initial_game = GraphGame(board, seed=args.game_seed)
    open_nodes = [str(node) for node in initial_game.open_nodes()]
    payload = {
        "name": args.name,
        "description": args.description,
        "boardSeed": args.board_seed,
        "edgeProbability": args.edge_prob,
        "gameSeed": args.game_seed,
        "metadata": {
            "source": "python",
            "selectionMode": args.selection_mode,
            "planarityMode": args.planarity_mode,
            "isPlanar": str(_check_planarity(board)),
        },
        "graph": {"adjacency": adjacency, "openNodes": open_nodes},
    }

    output_path = Path(args.output)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Exported board config to {output_path}")


def _load_board_from_json(path: str) -> GraphBoard:
    raw = json.loads(Path(path).read_text(encoding="utf-8"))
    if not isinstance(raw, dict):
        raise ValueError("board-json file must contain adjacency object.")
    adjacency: dict[str, list[str]] = {}
    for node, neighbors in raw.items():
        if not isinstance(neighbors, list):
            raise ValueError(f"Neighbors for {node!r} must be a list.")
        adjacency[str(node)] = [str(neighbor) for neighbor in neighbors]
    return GraphBoard(adjacency)


def _adjacency_dict(board: GraphBoard) -> dict[str, list[str]]:
    return {str(node): [str(neighbor) for neighbor in board.neighbors(node)] for node in board.nodes}


if __name__ == "__main__":
    main()
