import unittest

from research.llm_simulation import (
    LLMStyleAgent,
    RandomAgent,
    _check_planarity,
    play_game_with_agent_trace,
    run_same_seed_variance_experiment,
    search_human_friendly_boards,
)
from research.simulation_helper import generate_random_board


def _has_networkx() -> bool:
    try:
        import networkx  # noqa: F401

        return True
    except Exception:
        return False


class LLMSimulationTests(unittest.TestCase):
    def test_llm_style_agent_reproducible_with_decision_seed(self) -> None:
        board = generate_random_board(node_count=8, edge_probability=0.25, seed=321)
        agent_one = LLMStyleAgent(temperature=1.1, decision_seed=99)
        agent_two = LLMStyleAgent(temperature=1.1, decision_seed=99)

        first = play_game_with_agent_trace(
            board=board,
            board_seed=321,
            game_seed=77,
            agent=agent_one,
            stream=None,
        )
        second = play_game_with_agent_trace(
            board=board,
            board_seed=321,
            game_seed=77,
            agent=agent_two,
            stream=None,
        )

        self.assertEqual(first.final_score, second.final_score)
        self.assertEqual(
            [turn.outcome.placed_value for turn in first.turns],
            [turn.outcome.placed_value for turn in second.turns],
        )

    def test_same_seed_variance_experiment_repeats_requested_runs(self) -> None:
        board = generate_random_board(node_count=7, edge_probability=0.3, seed=22)

        logs = run_same_seed_variance_experiment(
            board=board,
            board_seed=22,
            game_seed=55,
            repeats=4,
            agent_factory=lambda: RandomAgent(decision_seed=101),
            max_rolls=3,
            trace=False,
            stream=None,
        )

        self.assertEqual(len(logs), 4)
        self.assertTrue(all(log.final_score >= 0 for log in logs))

    def test_search_returns_sorted_results(self) -> None:
        results = search_human_friendly_boards(
            min_nodes=6,
            max_nodes=7,
            edge_probabilities=(0.2, 0.35),
            candidates_per_combo=2,
            runs_per_board=4,
            board_seed_start=120,
            base_game_seed=220,
            top_k=3,
        )

        self.assertEqual(len(results), 3)
        self.assertGreaterEqual(results[0].variability_index, results[1].variability_index)
        self.assertGreaterEqual(results[1].variability_index, results[2].variability_index)
        self.assertGreaterEqual(results[0].std_forced_zero_rate, 0.0)
        self.assertGreaterEqual(results[0].edge_count, 0)
        self.assertGreaterEqual(results[0].edge_density, 0.0)
        self.assertLessEqual(results[0].edge_density, 1.0)
        self.assertTrue(all(len(item.board.connected_components()) == 1 for item in results))

    @unittest.skipUnless(_has_networkx(), "networkx not installed")
    def test_search_strict_planarity_returns_only_planar(self) -> None:
        results = search_human_friendly_boards(
            min_nodes=9,
            max_nodes=9,
            edge_probabilities=(0.2, 0.3),
            candidates_per_combo=2,
            runs_per_board=3,
            board_seed_start=500,
            base_game_seed=1000,
            top_k=4,
            planarity="strict",
        )
        self.assertTrue(results)
        self.assertTrue(all(item.is_planar is True for item in results))
        self.assertTrue(all(_check_planarity(item.board) is True for item in results))

    @unittest.skipUnless(_has_networkx(), "networkx not installed")
    def test_search_prefer_planarity_sets_planarity_flag(self) -> None:
        results = search_human_friendly_boards(
            min_nodes=9,
            max_nodes=9,
            edge_probabilities=(0.3,),
            candidates_per_combo=2,
            runs_per_board=3,
            board_seed_start=700,
            base_game_seed=2000,
            top_k=2,
            planarity="prefer",
        )
        self.assertTrue(results)
        self.assertTrue(all(item.is_planar in (True, False) for item in results))


if __name__ == "__main__":
    unittest.main()
