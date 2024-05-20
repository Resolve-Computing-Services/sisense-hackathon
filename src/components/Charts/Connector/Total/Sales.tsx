import { Chart } from "@sisense/sdk-ui"
import {
  type ChartProps,
  numberFormatConfigs,
  indicatorStyleOptions,
} from "../../../../configs/chart.config"
import { measureFactory, type Filter } from "@sisense/sdk-data"

export default function TotalSales({
  data,
  filters,
  title = "Total Sales",
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.DataSource}
      dataOptions={{
        value: [
          {
            column: measureFactory.sum(data.Commerce.Cost),
            numberFormatConfig: numberFormatConfigs.currency_2,
          },
        ],
        secondary: [],
      }}
      styleOptions={indicatorStyleOptions(title)}
      filters={filters as Filter[]}
    />
  )
}
