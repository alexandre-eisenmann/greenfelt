import unittest

from research.game_backend import GraphBoard, GraphGame


class GraphGameTests(unittest.TestCase):
    def test_default_setup_opens_one_node_per_component(self) -> None:
        board = GraphBoard(
            {
                "A": ["B"],
                "B": ["A"],
                "C": ["D"],
                "D": ["C", "E"],
                "E": ["D"],
            }
        )
        game = GraphGame(board, seed=7)

        open_nodes = set(game.open_nodes())
        components = board.connected_components()

        self.assertEqual(len(open_nodes), len(components))
        for component in components:
            self.assertEqual(len(open_nodes.intersection(component)), 1)

    def test_seed_reproducibility_for_dice(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A"]})
        game_one = GraphGame(board, seed=123, initial_open_nodes=["A"])
        game_two = GraphGame(board, seed=123, initial_open_nodes=["A"])

        self.assertEqual(game_one.roll_dice(), game_two.roll_dice())
        self.assertEqual(game_one.roll_dice({0, 2}), game_two.roll_dice({0, 2}))
        self.assertEqual(game_one.lock_roll_value(), game_two.lock_roll_value())

    def test_freezing_and_roll_limits(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A"]})
        game = GraphGame(board, seed=9, initial_open_nodes=["A"])

        roll_one = game.roll_dice()
        roll_two = game.roll_dice({1, 3})
        self.assertEqual(roll_two[1], roll_one[1])
        self.assertEqual(roll_two[3], roll_one[3])

        roll_three = game.roll_dice({0, 1, 2, 3, 4})
        self.assertEqual(roll_three, roll_two)

        with self.assertRaises(RuntimeError):
            game.roll_dice()

        locked_value = game.lock_roll_value()
        self.assertEqual(locked_value, sum(roll_three))

        with self.assertRaises(RuntimeError):
            game.roll_dice()

    def test_expansion_happens_even_when_placement_forces_zero(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A", "C"], "C": ["B"]})
        seed = self._find_seed_for_descending_rolls(board)
        game = GraphGame(board, seed=seed, initial_open_nodes=["A"])

        game.roll_dice()
        game.lock_roll_value()
        game.place_value("A")

        game.roll_dice()
        game.lock_roll_value()
        outcome = game.place_value("B")

        self.assertTrue(outcome.forced_zero)
        self.assertEqual(outcome.placed_value, 0)
        self.assertIn("C", outcome.newly_opened)
        self.assertIn("C", game.open_nodes())

    def test_nonzero_when_all_filled_neighbors_are_lower(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A"]})
        seed = self._find_seed_for_ascending_rolls(board)
        game = GraphGame(board, seed=seed, initial_open_nodes=["A"])

        game.roll_dice()
        first_total = game.lock_roll_value()
        first_outcome = game.place_value("A")
        self.assertEqual(first_outcome.placed_value, first_total)

        game.roll_dice()
        second_total = game.lock_roll_value()
        second_outcome = game.place_value("B")

        self.assertGreater(second_total, first_total)
        self.assertFalse(second_outcome.forced_zero)
        self.assertEqual(second_outcome.placed_value, second_total)

    def test_game_ends_when_all_nodes_are_filled(self) -> None:
        board = GraphBoard({"A": ["B"], "B": ["A"]})
        game = GraphGame(board, seed=21, initial_open_nodes=["A", "B"])

        total = 0
        for node in ("A", "B"):
            game.roll_dice()
            game.lock_roll_value()
            outcome = game.place_value(node)
            total += outcome.placed_value

        self.assertTrue(game.is_finished)
        self.assertEqual(game.final_score, total)
        self.assertEqual(game.score, total)

        with self.assertRaises(RuntimeError):
            game.roll_dice()

    def _find_seed_for_descending_rolls(self, board: GraphBoard) -> int:
        for seed in range(10000):
            game = GraphGame(board, seed=seed, initial_open_nodes=["A"])
            game.roll_dice()
            first = game.lock_roll_value()
            game.place_value("A")

            game.roll_dice()
            second = game.lock_roll_value()
            if second <= first:
                return seed

        raise AssertionError("Could not find a seed with descending roll totals.")

    def _find_seed_for_ascending_rolls(self, board: GraphBoard) -> int:
        for seed in range(10000):
            game = GraphGame(board, seed=seed, initial_open_nodes=["A"])
            game.roll_dice()
            first = game.lock_roll_value()
            game.place_value("A")

            game.roll_dice()
            second = game.lock_roll_value()
            if second > first:
                return seed

        raise AssertionError("Could not find a seed with ascending roll totals.")


if __name__ == "__main__":
    unittest.main()
