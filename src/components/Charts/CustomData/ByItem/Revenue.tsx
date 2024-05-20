import { Chart, type PieStyleOptions, type DataPoint } from "@sisense/sdk-ui"
import {
  type ChartProps,
  pieChartStyleOptions,
} from "../../../../configs/chart.config"
import type { Record } from "../../../../configs/data.config"

export default function RevenueByItem({
  data,
  filters,
  setFilters,
}: ChartProps) {
  return (
    <Chart
      chartType={"pie"}
      dataSet={data.data}
      dataOptions={{
        category: [data.item],
        value: [data.revenue],
      }}
      styleOptions={pieChartStyleOptions("bottom") as PieStyleOptions}
      onDataPointClick={(point: DataPoint) => {
        if (filters && setFilters) {
          const item = point.categoryValue as string
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
