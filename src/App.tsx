import { useCallback, useMemo, useState } from "react"

import {
  PLAYABLE_ROWS,
  YamScorecard,
  type ColumnId,
  type Placement,
  type RowId,
  type YamSheet,
} from "./components/YamScorecard"
import { DiceThrowRenderer } from "./components/renderers/three/DiceThrowRenderer"
const COLUMN_ORDER: ColumnId[] = ["down", "up", "desordem", "seco"]
const DOWN_ORDER: RowId[] = [...PLAYABLE_ROWS]
const UP_ORDER: RowId[] = [...PLAYABLE_ROWS].reverse()

const EMPTY_SHEET: YamSheet = {
  down: {},
  up: {},
  desordem: {},
  seco: {},
}

type RollResult = { total: number; values: number[]; attempt: number }

function App() {
  const [sheet, setSheet] = useState<YamSheet>(EMPTY_SHEET)
  const [rollResult, setRollResult] = useState<RollResult | null>(null)
  const [hasDiceResult, setHasDiceResult] = useState(false)
  const [pendingPlacement, setPendingPlacement] = useState<Placement | null>(null)

  const currentAttempt = rollResult?.attempt ?? 0

  const openCells = useMemo(() => {
    const open = new Set<string>()
    for (const columnId of COLUMN_ORDER) {
      const values = sheet[columnId]
      if (columnId === "down") {
        const next = DOWN_ORDER.find((rowId) => values[rowId] == null)
        if (next) open.add(`${columnId}:${next}`)
        continue
      }
      if (columnId === "up") {
        const next = UP_ORDER.find((rowId) => values[rowId] == null)
        if (next) open.add(`${columnId}:${next}`)
        continue
      }
      if (columnId === "desordem") {
        PLAYABLE_ROWS.forEach((rowId) => {
          if (values[rowId] == null) {
            open.add(`${columnId}:${rowId}`)
          }
        })
        continue
      }
      if (columnId === "seco" && currentAttempt === 1) {
        PLAYABLE_ROWS.forEach((rowId) => {
          if (values[rowId] == null) {
            open.add(`${columnId}:${rowId}`)
          }
        })
      }
    }
    return open
  }, [sheet, currentAttempt])

  const gameOver = useMemo(
    () => COLUMN_ORDER.every((columnId) => PLAYABLE_ROWS.every((rowId) => sheet[columnId][rowId] != null)),
    [sheet],
  )

  const totalScore = useMemo(() => {
    return COLUMN_ORDER.reduce((sum, columnId) => {
      return (
        sum +
        PLAYABLE_ROWS.reduce((columnSum, rowId) => columnSum + (sheet[columnId][rowId] ?? 0), 0)
      )
    }, 0)
  }, [sheet])

  const handleDiceResult = useCallback((result: RollResult) => {
    setRollResult(result)
    setHasDiceResult(true)
    setPendingPlacement(null)
  }, [])

  const handleCellClick = useCallback(
    (columnId: ColumnId, rowId: RowId) => {
      if (!hasDiceResult || !rollResult) return
      const key = `${columnId}:${rowId}`
      if (!openCells.has(key)) return
      if (sheet[columnId][rowId] != null) return

      if (
        pendingPlacement?.columnId === columnId &&
        pendingPlacement.rowId === rowId
      ) {
        setPendingPlacement(null)
        return
      }

      const score = scoreForRow(rowId, rollResult.values, sheet[columnId])
      setPendingPlacement({ columnId, rowId, value: score })
    },
    [hasDiceResult, openCells, pendingPlacement, rollResult, sheet],
  )

  const commitPlacement = useCallback(() => {
    if (!pendingPlacement) return
    const { columnId, rowId, value } = pendingPlacement
    setSheet((prev) => ({
      ...prev,
      [columnId]: {
        ...prev[columnId],
        [rowId]: value,
      },
    }))
    setPendingPlacement(null)
    setHasDiceResult(false)
    setRollResult(null)
  }, [pendingPlacement])

  const restartGame = useCallback(() => {
    setSheet({
      down: {},
      up: {},
      desordem: {},
      seco: {},
    })
    setRollResult(null)
    setHasDiceResult(false)
    setPendingPlacement(null)
  }, [])

  return (
    <main className="min-h-screen bg-[linear-gradient(140deg,#f5f7fb_0%,#ebf0f7_50%,#e1e8f2_100%)] px-6 py-8 sm:px-10">
      <section className="mx-auto flex w-full max-w-[1760px] flex-col gap-6 lg:flex-row lg:items-start">
        <div className="min-w-0 lg:shrink-0">
          <YamScorecard
            sheet={sheet}
            openCells={openCells}
            clickable={hasDiceResult}
            pendingPlacement={pendingPlacement}
            onCellClick={handleCellClick}
          />
        </div>
        <div className="min-w-0 flex-1 lg:sticky lg:top-8">
          {gameOver ? (
            <div className="flex h-[34vh] min-h-[280px] flex-col items-center justify-center gap-5 rounded-3xl border-2 border-slate-400 bg-[#eef2f7]" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">Game Over</p>
              <p className="text-5xl font-bold text-slate-800">{totalScore}</p>
              <button
                onClick={restartGame}
                className="mt-2 rounded-full border border-slate-300 bg-white px-8 py-2.5 text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition hover:bg-slate-50"
              >
                New Game
              </button>
            </div>
          ) : (
            <div className="h-[42vh] min-h-[300px] min-w-0 lg:h-[56vh]">
              <DiceThrowRenderer
                diceCount={5}
                maxAttempts={3}
                onDiceResult={handleDiceResult}
                hasPendingPlacement={pendingPlacement != null}
                onCommitPlacement={commitPlacement}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function scoreForRow(rowId: RowId, values: number[], columnValues?: Partial<Record<RowId, number>>): number {
  const counts = countByFace(values)
  const total = values.reduce((sum, value) => sum + value, 0)

  switch (rowId) {
    case "ones":
      return scoreUpper(counts, 1)
    case "twos":
      return scoreUpper(counts, 2)
    case "threes":
      return scoreUpper(counts, 3)
    case "fours":
      return scoreUpper(counts, 4)
    case "fives":
      return scoreUpper(counts, 5)
    case "sixes":
      return scoreUpper(counts, 6)
    case "quadra": {
      const quadraFace = counts.findIndex((c, i) => i > 0 && c >= 4)
      return quadraFace > 0 ? 20 + 4 * quadraFace : 0
    }
    case "full":
      return isFullHouse(counts) ? 30 + total : 0
    case "seqLow":
      return hasStraight(values, [1, 2, 3, 4, 5]) ? 35 + total : 0
    case "seqHigh":
      return hasStraight(values, [2, 3, 4, 5, 6]) ? 40 + total : 0
    case "min": {
      const existingMax = columnValues?.max
      return existingMax == null || total < existingMax ? total : 0
    }
    case "max": {
      const existingMin = columnValues?.min
      return existingMin == null || total > existingMin ? total : 0
    }
    case "yam":
      return hasExactlyCount(counts, 5) ? 50 + total : 0
  }
}

export default App

function countByFace(values: number[]): number[] {
  const counts = Array(7).fill(0)
  values.forEach((value) => {
    if (value >= 1 && value <= 6) {
      counts[value] += 1
    }
  })
  return counts
}

function scoreUpper(counts: number[], face: number): number {
  return counts[face] * face
}

function hasExactlyCount(counts: number[], required: number): boolean {
  return counts.some((count) => count === required)
}

function isFullHouse(counts: number[]): boolean {
  const grouped = counts.filter((count) => count > 0)
  return grouped.length === 2 && grouped.includes(3) && grouped.includes(2)
}

function hasStraight(values: number[], expected: number[]): boolean {
  const sorted = [...new Set(values)].sort((a, b) => a - b)
  if (sorted.length !== expected.length) return false
  return expected.every((value, index) => sorted[index] === value)
}
