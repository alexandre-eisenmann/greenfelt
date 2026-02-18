import { useEffect, useMemo, useState } from "react"

import { GraphForceRenderer } from "./components/renderers/d3/GraphForceRenderer"
import { DiceThrowRenderer } from "./components/renderers/three/DiceThrowRenderer"
import { adjacencyToGraph, connectedComponents, edgeDensity } from "./core/graph"
import type { BoardConfig } from "./types/config"

function App() {
  const [config, setConfig] = useState<BoardConfig | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/board-config.json", {
          headers: { "Cache-Control": "no-cache" },
        })
        if (!response.ok) {
          throw new Error(`Failed to load config (${response.status})`)
        }
        const json = (await response.json()) as BoardConfig
        if (!json.graph?.adjacency) {
          throw new Error("Invalid config: graph.adjacency missing")
        }
        setConfig(json)
      } catch (err) {
        setError((err as Error).message)
      }
    }
    load()
  }, [])

  const metrics = useMemo(() => {
    if (!config) return null
    const { nodes, edges } = adjacencyToGraph(config.graph.adjacency)
    const components = connectedComponents(config.graph.adjacency)
    const nodeIdSet = new Set(nodes.map((node) => node.id))
    const configuredOpen =
      config.graph.openNodes?.filter((nodeId) => nodeIdSet.has(nodeId)) ?? []
    const openNodes = configuredOpen.length
      ? configuredOpen
      : components.map((component) => component[0]).filter(Boolean)
    return {
      nodes,
      edges,
      componentCount: components.length,
      density: edgeDensity(nodes.length, edges.length),
      openNodes,
    }
  }, [config])

  if (error) {
    return (
      <main className="min-h-screen bg-slate-100 px-8 py-10 text-slate-800">
        <h1 className="text-2xl font-semibold">Config Error</h1>
        <p className="mt-3 text-sm text-slate-600">{error}</p>
      </main>
    )
  }

  if (!config || !metrics) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-100 text-slate-700">
        <p className="text-sm tracking-wide">Loading board configuration...</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,#f5f7fb_0%,#ebf0f7_50%,#e1e8f2_100%)] px-6 py-8 sm:px-10">
      <section className="mx-auto grid max-w-[1760px] gap-5 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-slate-300/55 bg-white/70 p-5 shadow-[0_20px_70px_rgba(33,56,88,0.14)] backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Monotone / Static Graph Mode
          </p>
          <h1 className="mt-3 text-2xl font-medium tracking-tight text-slate-800">
            {config.name}
          </h1>
          {config.description ? (
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{config.description}</p>
          ) : null}

          <div className="mt-6 grid gap-3 text-sm">
            <Metric label="Nodes" value={String(metrics.nodes.length)} />
            <Metric label="Edges" value={String(metrics.edges.length)} />
            <Metric label="Components" value={String(metrics.componentCount)} />
            <Metric label="Open At Start" value={String(metrics.openNodes.length)} />
            <Metric label="Density" value={metrics.density.toFixed(3)} />
            <Metric label="Board Seed" value={String(config.boardSeed ?? "-")} />
            <Metric label="Game Seed" value={String(config.gameSeed ?? "-")} />
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/90 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Data Contract</p>
            <p className="mt-2 text-xs leading-relaxed text-slate-600">
              Frontend reads <code className="rounded bg-slate-200 px-1 py-0.5">/board-config.json</code>.
              Python research can replace this file without runtime API communication.
            </p>
          </div>
        </aside>

        <section className="flex min-h-0 min-w-0 flex-col gap-6">
          <div className="h-[38vh] min-h-[300px] min-w-0 lg:h-[42vh]">
            <GraphForceRenderer
              nodes={metrics.nodes}
              edges={metrics.edges}
              openNodeIds={metrics.openNodes}
            />
          </div>
          <div className="h-[38vh] min-h-[320px] min-w-0 sm:h-[42vh]">
            <DiceThrowRenderer />
          </div>
        </section>
      </section>
    </main>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-3 py-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-medium text-slate-800">{value}</span>
    </div>
  )
}

export default App
