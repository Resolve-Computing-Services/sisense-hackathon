import { Chart, type DataPoint } from "@sisense/sdk-ui"
import { type ChartProps } from "../../../../configs/chart.config"
import { measureFactory, filterFactory, type Filter } from "@sisense/sdk-data"

export default function SitePopularityByGender({
  data,
  filters,
  setFilters,
}: ChartProps) {
  return (
    <Chart
      dataSet={data.DataSource}
      chartType="line"
      dataOptions={{
        category: [data.Commerce.Date.Weeks],
        value: [
          measureFactory.countDistinct(data.Commerce.VisitID, "Total Visits"),
        ],
        breakBy: [data.Commerce.Gender],
      }}
      styleOptions={{
        subtype: "line/spline",
        xAxis: {
          enabled: false,
        },
      }}
      filters={filters as Filter[]}
      onDataPointClick={(point: DataPoint) => {
        setFilters &&
          setFilters(
            filterFactory.equals(
              data.Commerce.Gender,
              point.seriesValue as string
            )
          )
      }}
    />
  )
}
