import type { GraphAdjacency, GraphEdge, GraphNode } from "../types/config"

export function adjacencyToGraph(adjacency: GraphAdjacency): {
  nodes: GraphNode[]
  edges: GraphEdge[]
} {
  const nodeSet = new Set<string>()
  for (const [node, neighbors] of Object.entries(adjacency)) {
    nodeSet.add(node)
    for (const neighbor of neighbors) nodeSet.add(neighbor)
  }

  const nodes = [...nodeSet]
    .sort((a, b) => a.localeCompare(b))
    .map((id) => ({ id }))

  const seen = new Set<string>()
  const edges: GraphEdge[] = []
  for (const [node, neighbors] of Object.entries(adjacency)) {
    for (const neighbor of neighbors) {
      const [left, right] = node < neighbor ? [node, neighbor] : [neighbor, node]
      const key = `${left}--${right}`
      if (seen.has(key)) continue
      seen.add(key)
      edges.push({ id: key, source: left, target: right })
    }
  }

  edges.sort((a, b) => a.id.localeCompare(b.id))
  return { nodes, edges }
}

export function connectedComponents(adjacency: GraphAdjacency): string[][] {
  const { nodes } = adjacencyToGraph(adjacency)
  const visited = new Set<string>()
  const components: string[][] = []

  for (const node of nodes.map((n) => n.id)) {
    if (visited.has(node)) continue
    const stack = [node]
    const component: string[] = []
    while (stack.length) {
      const current = stack.pop() as string
      if (visited.has(current)) continue
      visited.add(current)
      component.push(current)
      const neighbors = adjacency[current] ?? []
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) stack.push(neighbor)
      }
    }
    component.sort((a, b) => a.localeCompare(b))
    components.push(component)
  }

  components.sort((a, b) => a[0].localeCompare(b[0]))
  return components
}

export function edgeDensity(nodeCount: number, edgeCount: number): number {
  if (nodeCount <= 1) return 0
  const maxEdges = (nodeCount * (nodeCount - 1)) / 2
  return edgeCount / maxEdges
}
