import { Chart, type DataPoint } from "@sisense/sdk-ui"
import {
  type OvertimeChartProps,
  numberFormatConfigs,
} from "../../../../configs/chart.config"
import type { Record } from "../../../../configs/data.config"

export default function RevenueOverTime({
  data,
  filters,
  setFilters,
  period = "date",
}: OvertimeChartProps) {
  return (
    <Chart
      chartType={"line"}
      dataSet={data.data}
      dataOptions={{
        category:
          period === "year"
            ? [data.year]
            : period === "month"
              ? [data.month]
              : [data.date],
        value: [
          {
            column: data.revenue,
            numberFormatConfig: numberFormatConfigs.currency,
          },
        ],
      }}
      styleOptions={{
        lineWidth: {
          width: "bold",
        },
        legend: {
          enabled: false,
        },
      }}
      onDataPointClick={(point: DataPoint) => {
        if (filters && setFilters) {
          const item = point.categoryDisplayValue as string
          if (
            !(filters as Record).date ||
            (filters as Record).date.length === 0
          ) {
            setFilters({ ...filters, date: [item] })
          } else {
            setFilters({ ...filters, date: [] })
          }
        }
      }}
    />
  )
}
