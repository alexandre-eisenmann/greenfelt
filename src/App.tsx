import { useEffect, useMemo, useState } from "react"

import { GraphForceRenderer } from "./components/renderers/d3/GraphForceRenderer"
import { DiceThrowRenderer } from "./components/renderers/three/DiceThrowRenderer"
import { adjacencyToGraph, connectedComponents } from "./core/graph"
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
      <section className="mx-auto flex max-w-[1760px] flex-col gap-6">
        <div className="h-[38vh] min-h-[300px] min-w-0 lg:h-[42vh]">
          <GraphForceRenderer
            nodes={metrics.nodes}
            edges={metrics.edges}
            openNodeIds={metrics.openNodes}
          />
        </div>
        <div className="h-[38vh] min-h-[320px] min-w-0 sm:h-[42vh]">
          <DiceThrowRenderer diceCount={5} maxAttempts={3} />
        </div>
      </section>
    </main>
  )
}

export default App
