import { Chart } from "@sisense/sdk-ui"
import {
  type ChartProps,
  numberFormatConfigs,
  indicatorStyleOptions,
} from "../../../../configs/chart.config"
import { measureFactory, type Filter } from "@sisense/sdk-data"

export default function TotalBrands({
  data,
  filters,
  title = "Total Brands",
}: ChartProps) {
  return (
    <Chart
      chartType={"indicator"}
      dataSet={data.DataSource}
      dataOptions={{
        value: [
          {
            column: measureFactory.countDistinct(data.Commerce.BrandID),
            numberFormatConfig: numberFormatConfigs.unit,
          },
        ],
        secondary: [],
      }}
      styleOptions={indicatorStyleOptions(title)}
      filters={filters as Filter[]}
    />
  )
}
