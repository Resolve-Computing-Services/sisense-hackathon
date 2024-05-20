import { Chart } from "@sisense/sdk-ui"
import {
  type ChartProps,
  numberFormatConfigs,
  indicatorStyleOptions,
} from "../../../../configs/chart.config"

export default function TotalRevenue({
  data,
  title = "Total Revenue",
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.data}
      dataOptions={{
        value: [
          {
            column: data.revenue,
            numberFormatConfig: numberFormatConfigs.currency,
          },
        ],
        secondary: [],
      }}
      styleOptions={indicatorStyleOptions(title)}
    />
  )
}
