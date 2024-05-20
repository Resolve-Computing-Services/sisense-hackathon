import { Chart } from "@sisense/sdk-ui"
import { type ChartProps } from "../../../../configs/chart.config"
import { measureFactory, type Filter } from "@sisense/sdk-data"

export default function SitePopularity({ data, filters }: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="line"
      dataOptions={{
        category: [data.Commerce.Date.Weeks],
        value: [
          measureFactory.countDistinct(data.Commerce.VisitID, "Total Visits"),
        ],
      }}
      styleOptions={{
        subtype: "line/spline",
        xAxis: {
          enabled: false,
        },
      }}
      filters={filters as Filter[]}
    />
  )
}
