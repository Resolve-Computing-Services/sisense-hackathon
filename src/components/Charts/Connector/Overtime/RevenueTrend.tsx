import { Chart } from "@sisense/sdk-ui"
import { type ChartProps } from "../../../../configs/chart.config"
import { measureFactory, type Filter } from "@sisense/sdk-data"

export default function RevenueTrend({ data, filters }: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="column"
      dataOptions={{
        category: [data.Commerce.Date.Quarters],
        value: [
          measureFactory.sum(data.Commerce.Revenue, "Total Revenue"),
          {
            column: measureFactory.countDistinct(data.Commerce.VisitID),
            showOnRightAxis: true,
            chartType: "line",
            title: "Total Visits",
          },
        ],
        breakBy: [],
      }}
      styleOptions={{
        subtype: "area/spline",
        xAxis: {
          enabled: false,
        },
      }}
      filters={filters as Filter[]}
    />
  )
}
