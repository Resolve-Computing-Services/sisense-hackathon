import { Chart, type DataPoint, type PieStyleOptions } from "@sisense/sdk-ui"
import {
  pieChartStyleOptions,
  type ChartProps,
} from "../../../../configs/chart.config"
import { measureFactory, filterFactory, type Filter } from "@sisense/sdk-data"

export default function RevenueByGender({
  data,
  filters,
  setFilters,
}: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="pie"
      dataOptions={{
        category: [data.Commerce.Gender],
        value: [measureFactory.sum(data.Commerce.Revenue, "Total Revenue")],
        breakBy: [],
      }}
      styleOptions={pieChartStyleOptions("null") as PieStyleOptions}
      filters={filters as Filter[]}
      onDataPointClick={(point: DataPoint) => {
        setFilters &&
          setFilters(
            filterFactory.equals(
              data.Commerce.Gender,
              point.categoryValue as string
            )
          )
      }}
    />
  )
}
