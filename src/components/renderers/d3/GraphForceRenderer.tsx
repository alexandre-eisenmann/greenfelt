import { useEffect, useMemo, useRef } from "react"
import { drag } from "d3-drag"
import {
  forceCenter,
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force"
import { select } from "d3-selection"
import type { D3DragEvent } from "d3-drag"
import type { SimulationLinkDatum, SimulationNodeDatum } from "d3-force"

import type { GraphEdge, GraphNode } from "../../../types/config"

type SimNode = GraphNode & SimulationNodeDatum

type SimEdge = SimulationLinkDatum<SimNode> & {
  source: SimNode | string
  target: SimNode | string
  id: string
}

type Props = {
  nodes: GraphNode[]
  edges: GraphEdge[]
  openNodeIds?: Iterable<string>
  nodeValues?: Record<string, number | null>
  clickable?: boolean
  onNodeClick?: (nodeId: string) => void
  pendingNodeId?: string | null
  pendingValue?: number | null
}

const WIDTH = 1400
const HEIGHT = 900
const NODE_R = 34
const GLOW_R = 46

export function GraphForceRenderer({
  nodes,
  edges,
  openNodeIds = [],
  nodeValues = {},
  clickable = false,
  onNodeClick,
  pendingNodeId = null,
  pendingValue = null,
}: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null)
  const onNodeClickRef = useRef(onNodeClick)
  onNodeClickRef.current = onNodeClick
  const clickableRef = useRef(clickable)
  clickableRef.current = clickable

  // Stable graph structure — only recompute when nodes/edges change
  const graphData = useMemo(() => {
    const simNodes: SimNode[] = nodes.map((n) => ({ ...n }))
    const simEdges: SimEdge[] = edges.map((e) => ({ ...e }))
    return { simNodes, simEdges }
  }, [nodes, edges])

  // Refs for dynamic visual state (don't trigger simulation restart)
  const nodeValuesRef = useRef(nodeValues)
  nodeValuesRef.current = nodeValues
  const openNodeSetRef = useRef(new Set<string>())
  openNodeSetRef.current = new Set(openNodeIds)
  const pendingNodeIdRef = useRef(pendingNodeId)
  pendingNodeIdRef.current = pendingNodeId

  // Create simulation once when graph structure changes
  useEffect(() => {
    const svgElement = svgRef.current
    if (!svgElement) return

    const svg = select(svgElement)
    svg.selectAll("*").remove()

    const stage = svg.append("g")

    const edgeLayer = stage
      .append("g")
      .attr("class", "edges")
      .selectAll("line")
      .data(graphData.simEdges)
      .join("line")
      .attr("stroke", "#000000")
      .attr("stroke-width", 4)
      .attr("stroke-opacity", 1)
      .attr("stroke-linecap", "round")

    const nodeLayer = stage
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graphData.simNodes)
      .join("g")
      .attr("cursor", "default")

    // Glow ring
    nodeLayer
      .append("circle")
      .attr("class", "glow")
      .attr("r", 0)
      .attr("fill", "#7aa3ef")
      .attr("fill-opacity", 0.18)

    // Main circle
    nodeLayer
      .append("circle")
      .attr("class", "main")
      .attr("r", NODE_R)
      .attr("fill", "#e8e0d5")
      .attr("fill-opacity", 1)
      .attr("stroke", "#8a7d6b")
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 2.5)
      .attr("stroke-dasharray", "none")

    // Value text
    nodeLayer
      .append("text")
      .attr("class", "value-label")
      .text("")
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("font-size", "24px")
      .attr("font-weight", 700)
      .attr("font-family", "'Inter', sans-serif")
      .attr("font-variant-numeric", "tabular-nums")
      .attr("letter-spacing", "0.02em")
      .attr("fill", "#2d3748")
      .attr("pointer-events", "none")

    // Click handler
    nodeLayer.on("click", (_event: PointerEvent, d: SimNode) => {
      if (!clickableRef.current) return
      if (!openNodeSetRef.current.has(d.id)) return
      onNodeClickRef.current?.(d.id)
    })

    const simulation = forceSimulation(graphData.simNodes)
      .force(
        "link",
        forceLink<SimNode, SimEdge>(graphData.simEdges)
          .id((d: SimNode) => d.id)
          .distance(160)
          .strength(0.65),
      )
      .force("charge", forceManyBody().strength(-800))
      .force("center", forceCenter(WIDTH / 2, HEIGHT / 2))
      .force("collide", forceCollide(NODE_R + 10))
      .alpha(1)
      .alphaDecay(0.035)
      .on("tick", () => {
        edgeLayer
          .attr("x1", (d: SimEdge) => (d.source as SimNode).x ?? 0)
          .attr("y1", (d: SimEdge) => (d.source as SimNode).y ?? 0)
          .attr("x2", (d: SimEdge) => (d.target as SimNode).x ?? 0)
          .attr("y2", (d: SimEdge) => (d.target as SimNode).y ?? 0)

        nodeLayer.attr("transform", (d: SimNode) => `translate(${d.x ?? 0},${d.y ?? 0})`)
      })

    const dragBehavior = drag<SVGGElement, SimNode>()
      .on("start", (event: D3DragEvent<SVGGElement, SimNode, SimNode>, d: SimNode) => {
        if (!event.active) simulation.alphaTarget(0.25).restart()
        d.fx = d.x
        d.fy = d.y
      })
      .on("drag", (event: D3DragEvent<SVGGElement, SimNode, SimNode>, d: SimNode) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on("end", (event: D3DragEvent<SVGGElement, SimNode, SimNode>, d: SimNode) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })

    nodeLayer.call(dragBehavior as never)

    return () => {
      simulation.stop()
    }
  }, [graphData])

  // Update visual state reactively without restarting simulation
  useEffect(() => {
    const svgElement = svgRef.current
    if (!svgElement) return
    const svg = select(svgElement)
    const openSet = new Set(openNodeIds)

    svg.selectAll<SVGGElement, SimNode>("g.nodes > g")
      .attr("cursor", (d) => (openSet.has(d.id) && clickable ? "pointer" : "default"))

    svg.selectAll<SVGCircleElement, SimNode>("circle.glow")
      .attr("r", (d) => {
        if (d.id === pendingNodeId) return GLOW_R
        return openSet.has(d.id) ? GLOW_R : 0
      })
      .attr("fill", (d) => {
        if (d.id === pendingNodeId) return "#4caf50"
        return clickable && openSet.size > 0 ? "#43a047" : "#5c8abf"
      })
      .attr("fill-opacity", (d) => {
        if (d.id === pendingNodeId) return 0.4
        return clickable && openSet.size > 0 ? 0.35 : 0.25
      })

    svg.selectAll<SVGCircleElement, SimNode>("circle.main")
      .attr("fill", (d) => {
        if (d.id === pendingNodeId) return "#c8e6c9"
        const val = nodeValues[d.id]
        if (val != null) return "#fff8ef"
        if (openSet.has(d.id)) return clickable ? "#a5d6a7" : "#bbdefb"
        return "#e8e0d5"
      })
      .attr("fill-opacity", 1)
      .attr("stroke", (d) => {
        if (d.id === pendingNodeId) return "#2e7d32"
        const val = nodeValues[d.id]
        if (val != null) return "#8a7d6b"
        if (openSet.has(d.id)) return clickable ? "#2e7d32" : "#1565c0"
        return "#8a7d6b"
      })
      .attr("stroke-opacity", 1)
      .attr("stroke-width", (d) => (d.id === pendingNodeId ? 3 : 2.5))
      .attr("stroke-dasharray", (d) => (d.id === pendingNodeId ? "6 4" : "none"))

    svg.selectAll<SVGTextElement, SimNode>("text.value-label")
      .text((d) => {
        if (d.id === pendingNodeId && pendingValue != null) return String(pendingValue)
        const val = nodeValues[d.id]
        return val != null ? String(val) : ""
      })
      .attr("fill", (d) => (d.id === pendingNodeId ? "#1b5e20" : "#1a1a2e"))

    // Update edge styling
    svg.selectAll<SVGLineElement, SimEdge>("g.edges > line")
      .attr("stroke", "#000000")
      .attr("stroke-opacity", 1)
  }, [nodeValues, clickable, openNodeIds, pendingNodeId, pendingValue])

  return (
    <div className="relative h-full w-full rounded-3xl border-2 border-slate-400 bg-[#eef2f7] shadow-[0_8px_40px_rgba(20,35,60,0.22)]">
      <svg ref={svgRef} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-full w-full" />
    </div>
  )
}
