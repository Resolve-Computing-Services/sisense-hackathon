import { Chart, type DataPoint } from "@sisense/sdk-ui"
import {
  type OvertimeChartProps,
  numberFormatConfigs,
} from "../../../../configs/chart.config"
import type { Record } from "../../../../configs/data.config"

export default function RevenueOverTimeByItem({
  data,
  period = "date",
  filters,
  setFilters,
}: OvertimeChartProps) {
  return (
    <Chart
      chartType={"column"}
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
        breakBy: [data.item],
      }}
      styleOptions={{
        lineWidth: {
          width: "bold",
        },
        legend: {
          enabled: !(
            (filters as Record)?.itemName &&
            (filters as Record)?.itemName.length === 1
          ),
          position: "bottom",
        },
      }}
      onDataPointClick={(point: DataPoint) => {
        if (filters && setFilters) {
          const item = point.seriesValue as string
          if (
            !(filters as Record).itemName ||
            (filters as Record).itemName.length === 0
          ) {
            setFilters({ ...filters, itemName: [item] })
          } else {
            setFilters({ ...filters, itemName: [] })
          }
        }
      }}
    />
  )
}
