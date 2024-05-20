import { Chart, type PieStyleOptions } from "@sisense/sdk-ui"
import {
  type ChartProps,
  pieChartStyleOptions,
} from "../../../../configs/chart.config"

export default function UnitsSoldByColor({ data }: ChartProps) {
  return (
    <Chart
      chartType={"pie"}
      dataSet={data.data}
      dataOptions={{
        category: [data.color],
        value: [data.quantity],
      }}
      styleOptions={pieChartStyleOptions("null") as PieStyleOptions}
    />
  )
}
