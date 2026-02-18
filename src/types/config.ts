export type GraphAdjacency = Record<string, string[]>

export type BoardConfig = {
  name: string
  description?: string
  boardSeed?: number
  edgeProbability?: number
  gameSeed?: number
  metadata?: Record<string, string>
  graph: {
    adjacency: GraphAdjacency
    openNodes?: string[]
  }
}

export type GraphNode = {
  id: string
}

export type GraphEdge = {
  source: string
  target: string
  id: string
}
