import { Chart, type DataPoint } from "@sisense/sdk-ui"
import {
  ChartProps,
  numberFormatConfigs,
} from "../../../../configs/chart.config"
import type { Record } from "../../../../configs/data.config"

export default function RevenueByEmployee({
  data,
  filters,
  setFilters,
}: ChartProps) {
  return (
    <Chart
      chartType={"bar"}
      dataSet={data.data}
      dataOptions={{
        category: [data.soldBy],
        value: [
          {
            column: data.revenue,
            numberFormatConfig: numberFormatConfigs.currency,
          },
        ],
      }}
      styleOptions={{
        legend: {
          enabled: false,
        },
      }}
      onDataPointClick={(point: DataPoint) => {
        if (filters && setFilters) {
          const item = point.categoryValue as string
          if (
            !(filters as Record).soldBy ||
            (filters as Record).soldBy.length === 0
          ) {
            setFilters({ ...filters, soldBy: [item] })
          } else {
            setFilters({ ...filters, soldBy: [] })
          }
        }
      }}
    />
  )
}
