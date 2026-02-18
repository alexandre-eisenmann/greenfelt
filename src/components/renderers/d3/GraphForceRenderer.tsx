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
}

const WIDTH = 980
const HEIGHT = 620

export function GraphForceRenderer({ nodes, edges, openNodeIds = [] }: Props) {
  const svgRef = useRef<SVGSVGElement | null>(null)

  const graphData = useMemo(() => {
    const simNodes: SimNode[] = nodes.map((n) => ({ ...n }))
    const simEdges: SimEdge[] = edges.map((e) => ({ ...e }))
    const openNodeSet = new Set(openNodeIds)
    return { simNodes, simEdges, openNodeSet }
  }, [nodes, edges, openNodeIds])

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
      .attr("stroke", "#93a4bb")
      .attr("stroke-width", 1.35)
      .attr("stroke-opacity", (d: SimEdge) => {
        const sourceId = typeof d.source === "string" ? d.source : d.source.id
        const targetId = typeof d.target === "string" ? d.target : d.target.id
        const touchesOpen =
          graphData.openNodeSet.has(sourceId) || graphData.openNodeSet.has(targetId)
        return touchesOpen ? 0.58 : 0.22
      })
      .attr("stroke-linecap", "round")

    const nodeLayer = stage
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(graphData.simNodes)
      .join("g")

    nodeLayer
      .append("circle")
      .attr("r", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? 23 : 0))
      .attr("fill", "#7aa3ef")
      .attr("fill-opacity", 0.18)

    nodeLayer
      .append("circle")
      .attr("r", 16)
      .attr("fill", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? "#d6e4ff" : "#c8ced7"))
      .attr("fill-opacity", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? 0.98 : 0.76))
      .attr("stroke", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? "#27446f" : "#8e99ab"))
      .attr("stroke-opacity", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? 0.82 : 0.62))
      .attr("stroke-width", 1.1)

    nodeLayer
      .append("text")
      .text((d: SimNode) => d.id.replace(/^N/, ""))
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .attr("font-size", "11px")
      .attr("font-weight", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? 620 : 520))
      .attr("letter-spacing", "0.03em")
      .attr("fill", (d: SimNode) => (graphData.openNodeSet.has(d.id) ? "#182841" : "#5f6c7f"))

    const simulation = forceSimulation(graphData.simNodes)
      .force(
        "link",
        forceLink<SimNode, SimEdge>(graphData.simEdges)
          .id((d: SimNode) => d.id)
          .distance(64)
          .strength(0.72),
      )
      .force("charge", forceManyBody().strength(-240))
      .force("center", forceCenter(WIDTH / 2, HEIGHT / 2))
      .force("collide", forceCollide(24))
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

  return (
    <div className="relative h-full w-full rounded-3xl border border-slate-300/45 bg-[radial-gradient(circle_at_20%_20%,#f7f9fc_0%,#eef3f8_38%,#e2e9f2_100%)] shadow-[0_20px_80px_rgba(20,35,60,0.17)]">
      <div className="pointer-events-none absolute left-4 top-4 rounded-xl border border-white/70 bg-white/60 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-slate-600 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#97b8f5]" />
          Open
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#b9bec7]" />
          Closed
        </div>
      </div>
      <svg ref={svgRef} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="h-full w-full" />
    </div>
  )
}
