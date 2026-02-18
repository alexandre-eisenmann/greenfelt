# Monotone Graph Game

This repo uses a split architecture:

- Python for graph research/simulation/search
- React + TypeScript (Vite) frontend for visualization/play
- No runtime backend communication: frontend reads a static config file

Frontend consumes:

- `/public/board-config.json`

Python research selects/exports a board into that file.

---

## Game Rules

- Fill all nodes.
- Turn: roll 5 dice (up to 3 rolls with freeze), lock `V`, place in one open+empty node.
- If any filled neighbor has value `>= V`, placement becomes `0`; else placement is `V`.
- After placement, all closed neighbors of placed node become open.
- Game ends when all nodes are filled.
- Final score is sum of all node values.

---

## Python Side

Key files:

- `game_backend.py` (rules engine)
- `simulation_helper.py` (trace/simulation)
- `llm_simulation.py` (search, variability, planarity modes)
- `export_frontend_config.py` (exports selected board to frontend config)

---

## Frontend Side

Key files:

- `src/App.tsx` (loads static config and shows board dashboard)
- `src/components/renderers/d3/GraphForceRenderer.tsx` (self-contained D3 graph renderer)
- `src/components/renderers/three/DiceThrowRenderer.tsx` (self-contained Three.js dice renderer)
- `src/core/graph.ts` (graph utilities)
- `src/types/config.ts` (config contract)

Styling stack:

- Tailwind v4 (`@tailwindcss/postcss`)
- entry: `src/index.css`
- config: `postcss.config.js`

Renderer architecture:

- Each renderer technology lives in its own React component subtree.
- D3 and Three.js components own their own setup/loop/cleanup internally.
- Parent React app passes data via props and does not manage renderer internals.

---

## Config Contract

`/public/board-config.json` shape:

```json
{
  "name": "candidate-2022",
  "boardSeed": 2022,
  "edgeProbability": 0.26,
  "gameSeed": 42,
  "metadata": {
    "selectionMode": "variability-first",
    "planarityMode": "strict"
  },
  "graph": {
    "adjacency": {
      "N0": ["N1", "N13", "N4"]
    }
  }
}
```

---

## Export Board Config From Python

Generate connected board and export:

```bash
python /Users/nbnuser/workspace/monotone/research/export_frontend_config.py \
  --output public/board-config.json \
  --name candidate-2022 \
  --nodes 14 \
  --edge-prob 0.26 \
  --board-seed 2022 \
  --game-seed 42 \
  --planarity-mode strict
```

Export from custom adjacency JSON file:

```bash
python /Users/nbnuser/workspace/monotone/research/export_frontend_config.py \
  --board-json /absolute/path/adjacency.json \
  --output public/board-config.json
```

---

## Run

```bash
pnpm dev
```

Build:

```bash
pnpm build
```

---

## Why This Split

- Python keeps scientific/search tooling where it is strongest.
- Frontend stays fast, static, and deterministic.
- Changing board/topology is just replacing one config file.
