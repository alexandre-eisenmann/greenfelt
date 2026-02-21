import { useCallback, useMemo, useState } from "react"

import {
  PLAYABLE_ROWS,
  YamScorecard,
  computeColumnTotals,
  type ColumnId,
  type Placement,
  type RowId,
  type YamSheet,
} from "./components/YamScorecard"
import { DiceThrowRenderer } from "./components/renderers/three/DiceThrowRenderer"
const COLUMN_ORDER: ColumnId[] = ["down", "up", "desordem", "seco"]
const DOWN_ORDER: RowId[] = [...PLAYABLE_ROWS]
const UP_ORDER: RowId[] = [...PLAYABLE_ROWS].reverse()
const EMPTY_SHEET: YamSheet = { down: {}, up: {}, desordem: {}, seco: {} }

type RollResult = { total: number; values: number[]; attempt: number }
type ShareResultState = "idle" | "shared" | "copied" | "error"
type ShareSheet = Record<ColumnId, Record<RowId, number | null>>
type InitialGameState = { sheet: YamSheet; isSharedResultView: boolean }

function App() {
  const [initialState] = useState<InitialGameState>(() => getInitialGameState())
  const [sheet, setSheet] = useState<YamSheet>(initialState.sheet)
  const [isSharedResultView, setIsSharedResultView] = useState(initialState.isSharedResultView)
  const [rollResult, setRollResult] = useState<RollResult | null>(null)
  const [hasDiceResult, setHasDiceResult] = useState(false)
  const [pendingPlacement, setPendingPlacement] = useState<Placement | null>(null)
  const [shareResultState, setShareResultState] = useState<ShareResultState>("idle")
  const currentAttempt = rollResult?.attempt ?? 0
  const sharedViewOpenCells = useMemo(() => new Set<string>(), [])
  const ignoreCellClick = useCallback((_columnId: ColumnId, _rowId: RowId) => {}, [])

  const onlySecoRemaining = useMemo(() => {
    const nonSecoColumns: ColumnId[] = ["down", "up", "desordem"]
    const nonSecoFilled = nonSecoColumns.every((columnId) =>
      PLAYABLE_ROWS.every((rowId) => sheet[columnId][rowId] != null),
    )
    const secoHasEmpty = PLAYABLE_ROWS.some((rowId) => sheet.seco[rowId] == null)
    return nonSecoFilled && secoHasEmpty
  }, [sheet])

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

  const emptyCellsCount = useMemo(() => {
    return COLUMN_ORDER.reduce(
      (sum, columnId) => sum + PLAYABLE_ROWS.reduce((colSum, rowId) => colSum + (sheet[columnId][rowId] == null ? 1 : 0), 0),
      0,
    )
  }, [sheet])

  const totalScore = useMemo(() => {
    return COLUMN_ORDER.reduce((sum, columnId) => sum + computeColumnTotals(sheet[columnId]).combined, 0)
  }, [sheet])

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return ""
    return buildShareUrl(sheet, totalScore)
  }, [sheet, totalScore])

  const handleDiceResult = useCallback((result: RollResult) => {
    setRollResult(result)
    setHasDiceResult(true)
    setPendingPlacement(null)
  }, [])

  const handleRollStart = useCallback(() => {
    setHasDiceResult(false)
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
      if (emptyCellsCount === 1) {
        setSheet((prev) => ({
          ...prev,
          [columnId]: {
            ...prev[columnId],
            [rowId]: score,
          },
        }))
        setPendingPlacement(null)
        setHasDiceResult(false)
        setRollResult(null)
        return
      }

      setPendingPlacement({ columnId, rowId, value: score })
    },
    [emptyCellsCount, hasDiceResult, openCells, pendingPlacement, rollResult, sheet],
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
    setSheet(createEmptySheet())
    setIsSharedResultView(false)
    setRollResult(null)
    setHasDiceResult(false)
    setPendingPlacement(null)
    setShareResultState("idle")

    clearSharedResultFromUrl()
  }, [])

  const startFreshGameFromSharedLink = useCallback(() => {
    setSheet(EMPTY_SHEET)
    setIsSharedResultView(false)
    setRollResult(null)
    setHasDiceResult(false)
    setPendingPlacement(null)
    setShareResultState("idle")
    clearSharedResultFromUrl()
  }, [])

  const handleShareResult = useCallback(async () => {
    if (typeof window === "undefined" || !shareUrl) return

    const shareData = {
      title: "Greenfelt",
      text: `I scored ${totalScore} points in Greenfelt.`,
      url: shareUrl,
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        setShareResultState("shared")
        return
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl)
        setShareResultState("copied")
        return
      }

      setShareResultState("error")
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") return
      setShareResultState("error")
    }
  }, [shareUrl, totalScore])

  if (isSharedResultView) {
    return (
      <main className="min-h-screen bg-white px-3 py-4 sm:px-6 sm:py-6">
        <section className="mx-auto flex w-full max-w-[760px] flex-col items-center gap-5">
          <YamScorecard
            sheet={sheet}
            openCells={sharedViewOpenCells}
            clickable={false}
            pendingPlacement={null}
            onCellClick={ignoreCellClick}
          />
          <button
            onClick={startFreshGameFromSharedLink}
            className="rounded-full border border-[#0f4f9a]/20 bg-[#1d4f91] px-8 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm transition hover:bg-[#194681] focus:outline-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Play Game
          </button>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen touch-pan-y overflow-x-hidden bg-white px-0 py-0">
      <section className="mx-auto flex w-full max-w-[1400px] flex-col gap-0 lg:flex-row lg:items-start lg:gap-8">

        {/* Left column: info panel + scorecard
            Mobile: order-2 → appears below the dice
            Desktop: order-1 → left side */}
        <div className="order-2 mt-0 flex flex-col items-start gap-0 lg:order-1 lg:mt-0 lg:shrink-0 lg:items-start lg:gap-5">
          <YamScorecard
            sheet={sheet}
            openCells={openCells}
            clickable={hasDiceResult}
            pendingPlacement={pendingPlacement}
            onCellClick={handleCellClick}
          />
        </div>

        {/* Right column: dice
            Mobile: order-1 → appears at the top
            Desktop: order-2 → right side, sticky */}
        <div className="order-1 min-w-0 flex-1 lg:order-2 lg:sticky lg:top-0">
          <div className="h-[24vh] min-h-[150px] min-w-0 sm:h-[34vh] lg:h-[469px]">
            <DiceThrowRenderer
              diceCount={5}
              maxAttempts={3}
              onDiceResult={handleDiceResult}
              onRollStart={handleRollStart}
              forceSingleAttempt={onlySecoRemaining}
              hasPendingPlacement={pendingPlacement != null}
              onCommitPlacement={commitPlacement}
              rollSpeedMode="fast"
            />
          </div>
        </div>

      </section>
      {gameOver && !isSharedResultView && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#1f2937]/42 px-4 backdrop-blur-[3px]">
          <div
            className="w-full max-w-[430px] rounded-[28px] border border-[#ddd6cb] bg-[#f7f4ef] px-6 py-6 shadow-[0_16px_50px_rgba(15,23,42,0.28)]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-[#8a8070]">
              Game Over
            </p>
            <p
              className="mt-3 text-center text-7xl font-bold leading-none text-[#2d2820]"
              style={{ fontFamily: "'Kalam', cursive" }}
            >
              {totalScore}
            </p>
            <p className="mt-2 text-center text-sm text-[#8a8070]">final score</p>
            <p className="mt-1 text-center text-xs text-[#9b9182]">Share your full scorecard and invite friends.</p>

            <div className="mt-6 flex flex-col gap-2.5">
              <button
                onClick={handleShareResult}
                className="rounded-full border border-[#0f4f9a]/20 bg-[#1d4f91] px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm transition hover:bg-[#194681] focus:outline-none"
              >
                Share Result
              </button>
              <button
                onClick={restartGame}
                className="rounded-full border border-[#cfc8bc] bg-white px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#5a5448] shadow-sm transition hover:bg-[#f0ece4] focus:outline-none"
              >
                New Game
              </button>
            </div>

            {shareResultState === "shared" && (
              <p className="mt-3 text-center text-xs text-[#5f8d5f]">Shared.</p>
            )}
            {shareResultState === "copied" && (
              <p className="mt-3 text-center text-xs text-[#5f8d5f]">Link copied to clipboard.</p>
            )}
            {shareResultState === "error" && (
              <p className="mt-3 text-center text-xs text-[#9c4f4f]">
                Could not share automatically. Copy this URL manually.
              </p>
            )}
            {shareResultState === "error" && (
              <p className="mt-1 break-all text-center text-xs text-[#8a8070]">{shareUrl}</p>
            )}
          </div>
        </div>
      )}
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

function buildShareUrl(sheet: YamSheet, totalScore: number): string {
  const payload = {
    v: 2,
    mode: "single-game",
    sharedAt: new Date().toISOString(),
    totalScore,
    sheet: normalizeSheetForShare(sheet),
  }
  const encodedPayload = encodeURIComponent(JSON.stringify(payload))
  const url = getCurrentPageUrl()
  url.searchParams.set("result", encodedPayload)
  return url.toString()
}

function readSharedSheetFromUrl(): YamSheet | null {
  if (typeof window === "undefined") return null

  try {
    const url = getCurrentPageUrl()
    const encodedPayload = url.searchParams.get("result")
    if (!encodedPayload) return null
    const decodedPayload = decodeURIComponent(encodedPayload)
    const parsedPayload = JSON.parse(decodedPayload) as { v?: number; sheet?: unknown }
    if (parsedPayload.v === 2) {
      if (!isValidShareSheet(parsedPayload.sheet)) return null
      return denormalizeShareSheet(parsedPayload.sheet)
    }
    if (parsedPayload.v === 1) {
      if (!isValidSheet(parsedPayload.sheet)) return null
      return parsedPayload.sheet
    }
    return null
  } catch {
    return null
  }
}

function normalizeSheetForShare(sheet: YamSheet): ShareSheet {
  return COLUMN_ORDER.reduce((acc, columnId) => {
    acc[columnId] = PLAYABLE_ROWS.reduce((columnAcc, rowId) => {
      columnAcc[rowId] = sheet[columnId][rowId] ?? null
      return columnAcc
    }, {} as Record<RowId, number | null>)
    return acc
  }, {} as ShareSheet)
}

function denormalizeShareSheet(sheet: ShareSheet): YamSheet {
  return COLUMN_ORDER.reduce((acc, columnId) => {
    acc[columnId] = PLAYABLE_ROWS.reduce((columnAcc, rowId) => {
      const value = sheet[columnId][rowId]
      if (value != null) {
        columnAcc[rowId] = value
      }
      return columnAcc
    }, {} as Partial<Record<RowId, number>>)
    return acc
  }, {} as YamSheet)
}

function isValidSheet(value: unknown): value is YamSheet {
  if (!value || typeof value !== "object") return false

  for (const columnId of COLUMN_ORDER) {
    const column = (value as Record<string, unknown>)[columnId]
    if (!column || typeof column !== "object") return false

    for (const rowId of PLAYABLE_ROWS) {
      const rowValue = (column as Record<string, unknown>)[rowId]
      if (rowValue == null) continue
      if (typeof rowValue !== "number" || Number.isNaN(rowValue)) return false
    }
  }

  return true
}

function isValidShareSheet(value: unknown): value is ShareSheet {
  if (!value || typeof value !== "object") return false

  for (const columnId of COLUMN_ORDER) {
    const column = (value as Record<string, unknown>)[columnId]
    if (!column || typeof column !== "object") return false

    for (const rowId of PLAYABLE_ROWS) {
      const rowValue = (column as Record<string, unknown>)[rowId]
      if (rowValue === null) continue
      if (typeof rowValue !== "number" || Number.isNaN(rowValue)) return false
    }
  }

  return true
}

function getInitialGameState(): InitialGameState {
  const sharedSheet = readSharedSheetFromUrl()
  if (sharedSheet) {
    return { sheet: sharedSheet, isSharedResultView: true }
  }
  return { sheet: createEmptySheet(), isSharedResultView: false }
}

function clearSharedResultFromUrl(): void {
  if (typeof window === "undefined") return
  const url = getCurrentPageUrl()
  if (!url.searchParams.has("result")) return
  url.searchParams.delete("result")
  window.history.replaceState({}, "", url.toString())
}

function getCurrentPageUrl(): URL {
  return new URL(window.location.pathname + window.location.search + window.location.hash, window.location.origin)
}

function createEmptySheet(): YamSheet {
  return {
    ...EMPTY_SHEET,
    down: {},
    up: {},
    desordem: {},
    seco: {},
  }
}
