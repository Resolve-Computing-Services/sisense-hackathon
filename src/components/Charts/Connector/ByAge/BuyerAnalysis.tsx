import { Chart } from "@sisense/sdk-ui"
import { type ChartProps } from "../../../../configs/chart.config"
import { measureFactory, type Filter } from "@sisense/sdk-data"

export default function BuyerAnalysisByAge({ data, filters }: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="scatter"
      dataOptions={{
        x: measureFactory.sum(data.Commerce.Revenue, "Total Revenue"),
        y: measureFactory.countDistinct(data.Commerce.VisitID, "Total Visits"),
        breakByPoint: { column: data.Commerce.Condition, name: "Condition" },
        breakByColor: { column: data.Commerce.AgeRange, name: "Age Range" },
      }}
      filters={filters as Filter[]}
    />
  )
}
