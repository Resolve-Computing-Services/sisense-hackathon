import { Chart } from "@sisense/sdk-ui"
import {
  type ChartProps,
  numberFormatConfigs,
  indicatorStyleOptions,
} from "../../../../configs/chart.config"

export default function TotalUnitsSold({
  data,
  title = "Total Units Sold",
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.data}
      dataOptions={{
        value: [
          {
            column: data.quantity,
            numberFormatConfig: numberFormatConfigs.unit,
          },
        ],
        secondary: [],
      }}
      styleOptions={indicatorStyleOptions(title)}
    />
  )
}
