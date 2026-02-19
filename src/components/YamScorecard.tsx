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
  { id: "min", left: "X", label: "MIN" },
  { id: "max", left: "X", label: "MAX" },
  { id: "yam", left: "50", label: "YAM" },
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
    <div className="w-[376px] max-w-full shrink-0">
      <table
        className="w-full table-fixed border-separate border-spacing-[2px] bg-[#f2f2f2] text-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <colgroup>
          <col className="w-[43px]" />
          <col className="w-[43px]" />
          <col className="w-[65px]" />
          <col className="w-[65px]" />
          <col className="w-[65px]" />
          <col className="w-[65px]" />
        </colgroup>
        <thead>
          <tr>
            <th className="h-10 rounded-md border border-slate-700 bg-white px-2 text-base leading-none font-bold text-slate-800" colSpan={2}>
            </th>
            {COLUMNS.map((column) => (
              <th key={column.id} className="h-10 rounded-md border border-slate-700 bg-white px-2 text-xl leading-none font-bold text-slate-800">
                {column.id === "down" ? (
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                ) : column.id === "up" ? (
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <polyline points="6,15 12,9 18,15" />
                  </svg>
                ) : column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROW_LABELS.slice(0, 6).map((row) => (
            <tr key={row.id}>
              <td className="h-9 border border-slate-700 bg-white px-1 text-xl leading-none font-bold text-slate-900">{row.left}</td>
              <td className="h-9 border border-slate-700 bg-white px-1 text-lg leading-none font-semibold text-slate-900">{row.label}</td>
              {COLUMNS.map((column) => renderPlayableCell({
                columnId: column.id,
                rowId: row.id,
                sheet,
                openCells,
                clickable,
                pendingPlacement,
                onCellClick,
              }))}
            </tr>
          ))}

          <tr>
            <td className="h-9 border border-slate-700 bg-white px-1 text-[11px] leading-none font-bold uppercase tracking-wide text-slate-700" colSpan={2}>
              total
            </td>
            {COLUMNS.map((column) => {
              const totals = totalsByColumn[column.id]
              return (
                <td key={column.id} className="h-9 border border-slate-700 bg-white px-1">
                  <div className="flex h-full items-center justify-center">
                    <div className="relative inline-block">
                      <span style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: "1.35rem", paddingTop: "4px", color: "#cbd5e1" }}>
                        {toCellValue(totals.secondTotal)}
                      </span>
                      {totals.upperComplete && totals.bonus > 0 && (
                        <span className="absolute top-px -right-5 text-[9px] font-bold leading-none text-slate-800">
                          +30
                        </span>
                      )}
                    </div>
                  </div>
                </td>
              )
            })}
          </tr>

          {ROW_LABELS.slice(6).map((row) => (
            <tr key={row.id}>
              <td className="h-9 border border-slate-700 bg-white px-1 text-xl leading-none font-bold text-slate-900">{row.left}</td>
              <td className="h-9 border border-slate-700 bg-white px-1 text-xs leading-none font-semibold text-slate-900">{row.label}</td>
              {COLUMNS.map((column) => renderPlayableCell({
                columnId: column.id,
                rowId: row.id,
                sheet,
                openCells,
                clickable,
                pendingPlacement,
                onCellClick,
              }))}
            </tr>
          ))}

          <tr>
            <td className="h-9 border border-slate-700 bg-white px-1 text-[11px] leading-none font-bold uppercase tracking-wide text-slate-700" colSpan={2}>
              total
            </td>
            {COLUMNS.map((column) => (
              <td key={column.id} className="h-9 border border-slate-700 bg-white px-1 align-middle" style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: "1.35rem", paddingTop: "4px", color: "#cbd5e1" }}>
                {toCellValue(totalsByColumn[column.id].thirdTotal)}
              </td>
            ))}
          </tr>


          <tr>
            <td className="h-9 border border-slate-700 bg-white px-1 text-lg leading-none font-bold text-slate-900" colSpan={2}>
              TOTAL
            </td>
            <td className="h-9 border border-slate-700 bg-white px-1 align-middle" colSpan={4} style={{ fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: "1.35rem", paddingTop: "4px", color: "#cbd5e1" }}>
              {toCellValue(grandTotal)}
            </td>
          </tr>
        </tbody>
      </table>
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
      style={(isPending || locked) && !isCrossed ? { fontFamily: "'Kalam', cursive", fontWeight: 700, fontSize: "1.35rem", verticalAlign: "middle", paddingTop: "4px" } : undefined}
      className={`h-9 border border-slate-700 px-1 text-base leading-none font-bold ${
        isPending
          ? "bg-emerald-100 text-emerald-900"
          : locked
            ? "bg-white text-slate-900"
            : isOpen && clickable
              ? "cursor-pointer bg-blue-50 text-blue-900 hover:bg-blue-100"
              : "bg-white text-slate-400"
      }`}
    >
      {isCrossed ? (
        <svg viewBox="0 0 50 30" className="w-full h-full" style={{ display: "block", padding: "2px 4px" }}>
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
