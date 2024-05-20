import { ScattermapChart } from "@sisense/sdk-ui"
import { type ChartProps } from "../../../../configs/chart.config"
import { measureFactory, filterFactory, type Filter } from "@sisense/sdk-data"

export default function RevenueByCountry({
  data,
  filters,
  setFilters,
}: ChartProps) {
  return (
    <ScattermapChart
      dataSet={data.DataSource}
      dataOptions={{
        geo: [data.Country.Country],
        size: measureFactory.sum(data.Commerce.Cost, "Cost"),
        colorBy: {
          column: measureFactory.sum(data.Commerce.Revenue, "Revenue"),
          color: "#007EA7",
        },
        details: data.Category.Category,
      }}
      filters={filters as Filter[]}
      onDataPointClick={(point: any) => {
        setFilters &&
          setFilters(
            filterFactory.equals(
              data.Country.Country,
              point.displayName as string
            )
          )
      }}
    />
  )
}
