export type ColumnId = "down" | "up" | "desordem" | "seco"

export type RowId =
  | "ones"
  | "twos"
  | "threes"
  | "fours"
  | "fives"
  | "sixes"
  | "quadra"
  | "full"
  | "seqLow"
  | "seqHigh"
  | "min"
  | "max"
  | "yam"

export type Placement = {
  columnId: ColumnId
  rowId: RowId
  value: number
}

export type YamSheet = Record<ColumnId, Partial<Record<RowId, number>>>

export const PLAYABLE_ROWS: RowId[] = [
  "ones",
  "twos",
  "threes",
  "fours",
  "fives",
  "sixes",
  "quadra",
  "full",
  "seqLow",
  "seqHigh",
  "min",
  "max",
  "yam",
]

const UPPER_ROWS: RowId[] = ["ones", "twos", "threes", "fours", "fives", "sixes"]
const LOWER_ROWS: RowId[] = ["quadra", "full", "seqLow", "seqHigh", "min", "max", "yam"]

const COLUMNS: Array<{ id: ColumnId; title: string }> = [
  { id: "down", title: "▼" },
  { id: "up", title: "▲" },
  { id: "desordem", title: "D" },
  { id: "seco", title: "S" },
]

const ROW_LABELS: Array<{ id: RowId; left: string; label: string }> = [
  { id: "ones", left: "2", label: "1" },
  { id: "twos", left: "4", label: "2" },
  { id: "threes", left: "9", label: "3" },
  { id: "fours", left: "12", label: "4" },
  { id: "fives", left: "15", label: "5" },
  { id: "sixes", left: "18", label: "6" },
  { id: "quadra", left: "20", label: "Q" },
  { id: "full", left: "30", label: "F" },
  { id: "seqLow", left: "35", label: "S-" },
  { id: "seqHigh", left: "40", label: "S+" },
  { id: "min", left: "X", label: "-" },
  { id: "max", left: "X", label: "+" },
  { id: "yam", left: "50", label: "Y" },
]

export type ColumnTotals = {
  upperTotal: number
  upperComplete: boolean
  bonus: number
  secondTotal: number
  thirdTotal: number
  combined: number
}

type Props = {
  sheet: YamSheet
  openCells: Set<string>
  clickable: boolean
  pendingPlacement: Placement | null
  onCellClick: (columnId: ColumnId, rowId: RowId) => void
}

export function YamScorecard({
  sheet,
  openCells,
  clickable,
  pendingPlacement,
  onCellClick,
}: Props) {
  const totalsByColumn = Object.fromEntries(
    COLUMNS.map((column) => {
      const values =
        pendingPlacement?.columnId === column.id
          ? { ...sheet[column.id], [pendingPlacement.rowId]: pendingPlacement.value }
          : sheet[column.id]
      return [column.id, computeColumnTotals(values)]
    }),
  ) as Record<ColumnId, ColumnTotals>

  const grandTotal = COLUMNS.reduce((sum, column) => sum + totalsByColumn[column.id].combined, 0)

  return (
    <div className="w-[340px] max-w-full shrink-0 sm:w-[360px] lg:w-[376px]">
      <table
        className="w-full table-fixed border-collapse bg-white text-center"
        style={{ fontFamily: "'Atkinson Hyperlegible', 'Source Sans 3', 'Inter', sans-serif" }}
      >
        <colgroup>
          <col className="w-[44px]" />
          <col className="w-[58px]" />
          <col className="w-[58px]" />
          <col className="w-[58px]" />
          <col className="w-[58px]" />
          <col className="w-[36px]" />
        </colgroup>
        <thead>
          <tr>
            <th className="h-7 px-2">
            </th>
            {COLUMNS.map((column) => (
              <th key={column.id} className="h-7 px-2 text-[0.98rem] leading-none font-semibold text-slate-600">
                {column.id === "down" ? (
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                ) : column.id === "up" ? (
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <polyline points="6,15 12,9 18,15" />
                  </svg>
                ) : (
                  <span className="text-[0.98rem] font-semibold tracking-[0.08em]">{column.title}</span>
                )}
              </th>
            ))}
            <th className="h-7 px-1"></th>
          </tr>
        </thead>
        <tbody>
          {ROW_LABELS.slice(0, 6).map((row) => (
            <tr key={row.id}>
              <td className="h-7 bg-transparent pl-1 pr-3 text-right text-[0.98rem] leading-none font-semibold tracking-[0.02em] text-slate-500">{row.label}</td>
              {COLUMNS.map((column) => renderPlayableCell({
                columnId: column.id,
                rowId: row.id,
                sheet,
                openCells,
                clickable,
                pendingPlacement,
                onCellClick,
              }))}
              <td className="h-7 bg-transparent px-1"></td>
            </tr>
          ))}

          <tr>
            <td className="h-6 bg-transparent px-1"></td>
            {COLUMNS.map((column) => {
              const totals = totalsByColumn[column.id]
              return (
                <td
                  key={column.id}
                  className="h-6 bg-transparent px-1 align-middle text-[0.9rem] font-semibold tabular-nums text-slate-500"
                >
                  {totals.bonus > 0 ? "30" : ""}
                </td>
              )
            })}
            <td className="h-6 bg-transparent pl-3 pr-0 text-left text-[0.68rem] leading-none font-semibold tracking-[0.08em] text-slate-500">
              BONUS
            </td>
          </tr>

          {ROW_LABELS.slice(6).map((row) => {
            const isBonusHint = row.left !== "X"
            return (
            <tr key={row.id}>
              <td className="h-7 bg-transparent pl-1 pr-3 text-right text-[0.98rem] leading-none font-semibold tracking-[0.02em] text-slate-500">{row.label}</td>
              {COLUMNS.map((column) => renderPlayableCell({
                columnId: column.id,
                rowId: row.id,
                sheet,
                openCells,
                clickable,
                pendingPlacement,
                onCellClick,
              }))}
              <td
                className={
                  isBonusHint
                    ? "h-7 bg-transparent pl-3 pr-0 text-left text-[0.68rem] leading-none font-semibold tabular-nums tracking-[0.02em] text-slate-500"
                    : "h-7 bg-transparent pl-3 pr-0 text-left"
                }
              >
                {isBonusHint ? `+${row.left}` : ""}
              </td>
            </tr>
            )
          })}

        </tbody>
      </table>
      <div className="mt-2 flex justify-center">
        <div
          className="inline-flex h-6 items-center gap-2 rounded-full border border-slate-400 bg-transparent px-3"
          style={{ fontFamily: "'Atkinson Hyperlegible', 'Source Sans 3', 'Inter', sans-serif" }}
        >
          <span className="text-[0.86rem] font-bold leading-none text-slate-500">TOTAL</span>
          <span className="inline-block w-[4ch] text-right text-[0.86rem] font-bold leading-none tabular-nums text-slate-950">
            {toCellValue(grandTotal)}
          </span>
        </div>
      </div>
    </div>
  )
}

function renderPlayableCell({
  columnId,
  rowId,
  sheet,
  openCells,
  clickable,
  pendingPlacement,
  onCellClick,
}: {
  columnId: ColumnId
  rowId: RowId
  sheet: YamSheet
  openCells: Set<string>
  clickable: boolean
  pendingPlacement: Placement | null
  onCellClick: (columnId: ColumnId, rowId: RowId) => void
}) {
  const key = `${columnId}:${rowId}`
  const locked = sheet[columnId][rowId] != null
  const isOpen = openCells.has(key)
  const isPending =
    pendingPlacement?.columnId === columnId && pendingPlacement.rowId === rowId

  let value: number | null = null
  if (isPending) {
    value = pendingPlacement.value
  } else if (sheet[columnId][rowId] != null) {
    value = sheet[columnId][rowId]!
  }

  const isCrossed = value === 0
  const strokeColor = isPending ? "#065f46" : "#1e293b"

  return (
    <td
      key={columnId}
      onClick={() => {
        if (!clickable || !isOpen || locked) return
        onCellClick(columnId, rowId)
      }}
      style={(isPending || locked) && !isCrossed ? { fontWeight: 700, fontSize: "0.98rem", verticalAlign: "middle", paddingTop: "1px" } : undefined}
      className={`h-7 touch-manipulation select-none border border-slate-500/70 px-1 text-[0.92rem] leading-none font-semibold transition-colors ${
        isPending
            ? "bg-emerald-50 text-emerald-950"
          : locked
            ? "bg-white text-slate-950"
            : isOpen && clickable
              ? "cursor-pointer bg-white text-slate-700 hover:bg-slate-50 active:bg-slate-100"
              : "bg-slate-100 text-slate-400"
      }`}
    >
      {isCrossed ? (
        <svg viewBox="0 0 50 30" className="h-full w-full" style={{ display: "block", padding: "2px 3px" }}>
          <path d="M 4,3 C 16,10 30,18 46,27" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" fill="none" />
          <path d="M 46,3 C 33,11 19,18 4,27" stroke={strokeColor} strokeWidth="2.8" strokeLinecap="round" fill="none" />
        </svg>
      ) : value !== null ? String(value) : ""}
    </td>
  )
}

export function computeColumnTotals(columnValues: Partial<Record<RowId, number>>): ColumnTotals {
  const upperTotal = UPPER_ROWS.reduce((sum, rowId) => sum + (columnValues[rowId] ?? 0), 0)
  const upperComplete = UPPER_ROWS.every((rowId) => columnValues[rowId] != null)
  const bonus = upperTotal >= 60 ? 30 : 0
  const secondTotal = upperTotal + bonus
  const thirdTotal = LOWER_ROWS.reduce((sum, rowId) => sum + (columnValues[rowId] ?? 0), 0)
  const combined = secondTotal + thirdTotal
  return { upperTotal, upperComplete, bonus, secondTotal, thirdTotal, combined }
}

function toCellValue(value: number): string {
  return value > 0 ? String(value) : ""
}
