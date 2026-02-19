# Greenfelt

A board game where players roll dice and place results on graph nodes.

## Tech Stack

- **React 19** + **TypeScript** + **Vite 7** + **TailwindCSS 4**
- **Three.js** + **cannon-es** — 3D dice with physics simulation
- **D3** (d3-force, d3-drag, d3-selection) — Force-directed graph board
- **Web Audio API** — Procedural collision sounds (no audio files)

## Commands

- `pnpm run dev` — Start dev server (always use pnpm, never npm/yarn)
- `pnpm run build` — TypeScript check + production build
- `pnpm run lint` — ESLint

## Project Structure

```
src/
  App.tsx                — Game state, turn flow, placement logic
  main.tsx               — React entry point
  index.css              — Tailwind imports
  types/config.ts        — GraphAdjacency, BoardConfig, GraphNode, GraphEdge
  core/graph.ts          — adjacencyToGraph(), connectedComponents()
  components/renderers/
    d3/GraphForceRenderer.tsx   — SVG graph board (D3 force simulation)
    three/DiceThrowRenderer.tsx — 3D dice roller (Three.js + cannon-es)
    three/diceAudio.ts          — Procedural audio for dice collisions
public/
  board-config.json      — Active board (swap with files from boards/)
  boards/                — Board collection
    line-5.json          — 5-node line (test board)
    python-selected.json — 14-node planar graph (main board)
```

## Architecture

### Game Flow

1. Player presses **Play** → dice roll with physics
2. Dice settle → `onDiceResult(total)` fires → open nodes become clickable
3. Player can **lock/unlock** individual dice (click on 3D dice or footer chips) and re-roll up to 3 attempts
4. Player clicks an open node → **tentative placement** (preview, dashed border)
5. Player can switch to another node or toggle off by clicking same node
6. **Play** commits the placement + starts a new turn (resets dice, throws)
7. **Confirm** button appears at attempt 3 (last attempt) to commit without re-rolling
8. Last placement (no open nodes remain) auto-commits → **Game Over** with score

### State (App.tsx)

- `nodeValues: Record<string, number | null>` — placed values per node
- `openNodeIds: string[]` — currently open (clickable) nodes
- `diceTotal: number` — current dice sum
- `hasDiceResult: boolean` — whether dice have settled (enables node clicking)
- `pendingPlacement: { nodeId, value } | null` — tentative placement before commit

### Placement Rules

- Value = `diceTotal` unless any **closed filled neighbor** has value > diceTotal → value = 0
- Placing closes the node and opens its empty (unfilled) neighbors
- Neighbors are computed bidirectionally (handles asymmetric adjacency)

### Graph Renderer (D3)

- Simulation only recreates when graph structure (nodes/edges) changes
- Visual updates (colors, text, open state) happen in a separate useEffect via refs
- Nodes: radius 34, edges: stroke-width 4, black edges, font 24px Inter bold
- Node states: inactive (warm ivory), open (blue/green), filled (cream + value), pending (green dashed)

### Dice Renderer (Three.js + cannon-es)

- Orthographic camera, top-down view
- `TABLE_GREEN = 0x1a7a4a`, `NoToneMapping`, dice are white with black pips
- Corner bumpers at 45° prevent dice wedging
- `readTopFace()` uses quaternion rotation to determine face values
- Props: `hasPendingPlacement` / `onCommitPlacement` for commit-on-play flow

### Audio (Web Audio API)

- Table hits: low-pass filtered noise + sine thump
- Dice hits: broadband transient + two detuned sine oscillators (1.47x ratio)
- Velocity-based modulation of volume, pitch, filter frequency

## Board Config Format

```json
{
  "name": "board-name",
  "graph": {
    "adjacency": {
      "A": ["B", "C"],
      "B": ["A"],
      "C": ["A"]
    },
    "openNodes": ["A"]
  }
}
```

- `adjacency` — node ID → array of neighbor IDs
- `openNodes` — initially open nodes (if omitted, one node per connected component opens)

## Conventions

- Always use **pnpm**
- Inter font (loaded from Google Fonts in index.html)
- UI labels are concise: "Play" not "Throw Dice", "1 of 3" not "Attempt 1 / 3"
- No emoji in code or UI
