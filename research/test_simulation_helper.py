import unittest

from research.game_backend import GraphBoard, GraphGame
from research.simulation_helper import (
    generate_random_board,
    play_game_with_trace,
    render_graph_state,
    simulate_many_games,
)


class SimulationHelperTests(unittest.TestCase):
    def test_generate_random_board_is_reproducible_with_seed(self) -> None:
        board_one = generate_random_board(node_count=8, edge_probability=0.3, seed=99)
        board_two = generate_random_board(node_count=8, edge_probability=0.3, seed=99)

        self.assertEqual(board_one.nodes, board_two.nodes)
        for node in board_one.nodes:
            self.assertEqual(board_one.neighbors(node), board_two.neighbors(node))

    def test_play_game_with_trace_fills_all_nodes(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A", "C"], "C": ["B"]})

        log = play_game_with_trace(
            board,
            seed=17,
            max_rolls=3,
            freeze_threshold=5,
            hold_at_total=22,
            move_policy="heuristic",
            stream=None,
        )

        self.assertEqual(log.node_count, 3)
        self.assertEqual(len(log.turns), 3)
        self.assertEqual(log.final_score, log.turns[-1].score_after_turn)

    def test_render_graph_state_contains_nodes_and_edges(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A"]})
        game = GraphGame(board, seed=5, initial_open_nodes=["A", "B"])
        game.roll_dice()
        game.lock_roll_value()
        game.place_value("A")

        rendered = render_graph_state(game, highlight_node="A")

        self.assertIn("Graph:", rendered)
        self.assertIn("nodes:", rendered)
        self.assertIn("edges:", rendered)
        self.assertIn("A -- B", rendered)
        self.assertIn("OPEN", rendered)
        self.assertIn("* A", rendered)

    def test_simulate_many_games_reproducible_with_base_seed(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A", "C"], "C": ["B"]})

        first = simulate_many_games(board=board, runs=5, base_seed=200)
        second = simulate_many_games(board=board, runs=5, base_seed=200)

        self.assertEqual(first.scores, second.scores)
        self.assertEqual(first.runs, 5)
        self.assertEqual(len(first.scores), 5)


if __name__ == "__main__":
    unittest.main()
