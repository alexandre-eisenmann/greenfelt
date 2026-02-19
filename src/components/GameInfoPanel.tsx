import { type ColumnId, type ColumnTotals, PLAYABLE_ROWS, computeColumnTotals } from "./YamScorecard"

const COLUMNS: Array<{ id: ColumnId; label: string }> = [
  { id: "down", label: "▼" },
  { id: "up", label: "▲" },
  { id: "desordem", label: "D" },
  { id: "seco", label: "S" },
]

type YamSheet = Record<ColumnId, Partial<Record<(typeof PLAYABLE_ROWS)[number], number>>>

type RollResult = { total: number; values: number[]; attempt: number }

type Props = {
  sheet: YamSheet
  totalScore: number
  rollResult: RollResult | null
  maxAttempts: number
}

export function GameInfoPanel({ sheet, totalScore, rollResult, maxAttempts }: Props) {
  const filledCells = COLUMNS.reduce(
    (sum, col) => sum + PLAYABLE_ROWS.filter((rowId) => sheet[col.id][rowId] != null).length,
    0,
  )
  const totalCells = COLUMNS.length * PLAYABLE_ROWS.length
  const progressPct = totalCells > 0 ? (filledCells / totalCells) * 100 : 0

  const colTotals = Object.fromEntries(
    COLUMNS.map((col) => [col.id, computeColumnTotals(sheet[col.id])]),
  ) as Record<ColumnId, ColumnTotals>

  return (
    <div
      className="w-[376px] max-w-full shrink-0 overflow-hidden rounded-2xl border border-[#ccc8c0] bg-[#f7f4ef]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header strip */}
      <div className="flex items-end justify-between border-b border-[#ccc8c0] px-5 pb-3 pt-4">
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8070]"
          >
            Greenfelt
          </p>
          <p
            className="mt-0.5 text-2xl font-bold leading-none tracking-tight text-[#2d2820]"
            style={{ fontFamily: "Fraunces, 'Iowan Old Style', Palatino, serif" }}
          >
            Yam
          </p>
        </div>

        <div className="text-right">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8070]">
            Score
          </p>
          <p
            className="mt-0.5 text-5xl font-bold leading-none text-[#2d2820]"
            style={{ fontFamily: "'Kalam', cursive" }}
          >
            {totalScore > 0 ? totalScore : "—"}
          </p>
        </div>
      </div>

      <div className="px-5 py-4 flex flex-col gap-4">
        {/* Roll result — shown when dice have settled */}
        {rollResult ? (
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {rollResult.values.map((v, i) => (
                <span
                  key={i}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#ccc8c0] bg-white text-sm font-bold text-[#2d2820] shadow-sm"
                >
                  {v}
                </span>
              ))}
            </div>
            <span className="text-xs text-[#8a8070]">=</span>
            <span className="text-base font-bold text-[#2d2820]">{rollResult.total}</span>
            <span className="ml-auto text-[11px] font-semibold tracking-wide text-[#8a8070]">
              {rollResult.attempt} / {maxAttempts}
            </span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e0dbd2] bg-[#eeece7] text-sm font-bold text-[#ccc8c0]"
              >
                —
              </span>
            ))}
          </div>
        )}

        {/* Progress bar */}
        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a8070]">
              Progress
            </span>
            <span className="text-[11px] font-semibold text-[#8a8070]">
              {filledCells} / {totalCells}
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#e0dbd2]">
            <div
              className="h-full rounded-full bg-[#1a7a4a] transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        {/* Column breakdown */}
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8a8070]">
            Columns
          </p>
          <table className="w-full border-separate border-spacing-[2px] text-center">
            <colgroup>
              <col style={{ width: "56px" }} />
              {COLUMNS.map((col) => (
                <col key={col.id} />
              ))}
            </colgroup>
            <thead>
              <tr>
                <td />
                {COLUMNS.map((col) => (
                  <th
                    key={col.id}
                    className="h-6 rounded-md bg-[#e8e4dd] text-xs font-bold text-[#5a5448]"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-0.5 text-left text-[10px] font-semibold uppercase tracking-wide text-[#8a8070]">
                  Top
                </td>
                {COLUMNS.map((col) => {
                  const t = colTotals[col.id]
                  return (
                    <td key={col.id} className="h-6 rounded-md bg-white text-xs font-semibold text-[#2d2820]">
                      {t.secondTotal > 0 ? (
                        <span className="relative inline-block">
                          {t.secondTotal}
                          {t.bonus > 0 && (
                            <span className="absolute -top-1 -right-4 text-[8px] font-bold leading-none text-[#1a7a4a]">
                              +30
                            </span>
                          )}
                        </span>
                      ) : (
                        <span className="text-[#ccc8c0]">—</span>
                      )}
                    </td>
                  )
                })}
              </tr>
              <tr>
                <td className="py-0.5 text-left text-[10px] font-semibold uppercase tracking-wide text-[#8a8070]">
                  Low
                </td>
                {COLUMNS.map((col) => {
                  const t = colTotals[col.id]
                  return (
                    <td key={col.id} className="h-6 rounded-md bg-white text-xs font-semibold text-[#2d2820]">
                      {t.thirdTotal > 0 ? (
                        t.thirdTotal
                      ) : (
                        <span className="text-[#ccc8c0]">—</span>
                      )}
                    </td>
                  )
                })}
              </tr>
              <tr>
                <td className="py-0.5 text-left text-[10px] font-bold uppercase tracking-wide text-[#5a5448]">
                  Total
                </td>
                {COLUMNS.map((col) => {
                  const t = colTotals[col.id]
                  return (
                    <td
                      key={col.id}
                      className="h-7 rounded-md bg-[#2d2820] text-sm font-bold text-[#f7f4ef]"
                      style={{ fontFamily: "'Kalam', cursive" }}
                    >
                      {t.combined > 0 ? (
                        t.combined
                      ) : (
                        <span className="text-[11px] font-normal text-[#6b6458]">0</span>
                      )}
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
