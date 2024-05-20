import {
  Chart,
  type StackableStyleOptions,
  type DataPoint,
} from "@sisense/sdk-ui"
import {
  type OvertimeChartProps,
  barChartStyleOptions,
} from "../../../../configs/chart.config"
import type { Record } from "../../../../configs/data.config"

export default function UnitsSoldOvertime({
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
        value: [data.quantity],
        breakBy: [data.item],
      }}
      styleOptions={barChartStyleOptions("bottom") as StackableStyleOptions}
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
