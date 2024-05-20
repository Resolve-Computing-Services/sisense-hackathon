import { Chart } from "@sisense/sdk-ui"
import {
  type ChartProps,
  indicatorStyleOptions,
} from "../../../../configs/chart.config"
import { measureFactory, type Filter } from "@sisense/sdk-data"

export default function TotalUnitsSold({
  data,
  filters,
  title = "Total Units Sold",
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.DataSource}
      dataOptions={{
        value: [measureFactory.sum(data.Commerce.Quantity)],
        secondary: [],
      }}
      styleOptions={indicatorStyleOptions(title)}
      filters={filters as Filter[]}
    />
  )
}
