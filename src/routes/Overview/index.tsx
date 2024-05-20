import React from "react"
import { buildData, filterData, type Record } from "../../configs/data.config"
import { items, sales } from "../../configs/data" // data source
import { USERNAME } from "../../configs/brand.config"

import Grid from "@mui/material/Grid"
import FilterButtons from "./FilterButtons"
import DashboardCard from "../../components/Card/Dashboard"
import TotalRevenue from "../../components/Charts/CustomData/Total/Revenue"
import TotalUnitsSold from "../../components/Charts/CustomData/Total/UnitsSold"
import RevenueOverTime from "../../components/Charts/CustomData/Overtime/Revenue"
import RevenueByItem from "../../components/Charts/CustomData/ByItem/Revenue"
import RevenueBySize from "../../components/Charts/CustomData/BySize/Revenue"
import UnitsSoldOvertimeByItem from "../../components/Charts/CustomData/Overtime/UnitsSoldByItem"

export default function Overview() {
  const [filters, setFilters] = React.useState<Record>({ month: [] })
  const originalData = buildData(items, sales)
  const data = filterData(originalData, filters)

  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 mx-5">
        <div>
          <h1 className="font-bold text-3xl mb-1">Hi {USERNAME}!</h1>
          <p>Here's your shop recap</p>
        </div>
        <FilterButtons filters={filters} setFilters={setFilters} />
      </div>
      <Grid container spacing={2} rowSpacing={2} padding={2}>
        <DashboardCard gridColumns={8}>
          <TotalRevenue data={data} />
        </DashboardCard>
        <DashboardCard gridColumns={4}>
          <TotalUnitsSold data={data} />
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title="Revenue Over Time"
          isClearFilterEnabled={filters.date && filters.date.length > 0}
          clearFilter={() => setFilters({ ...filters, date: [] })}
        >
          <RevenueOverTime
            data={data}
            filters={filters}
            setFilters={setFilters}
            period={"date"}
          />
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title={
            filters.itemName && filters.itemName.length > 0
              ? `${filters.itemName[0]} Revenue By Size`
              : "Revenue By Item"
          }
          isClearFilterEnabled={filters.itemName && filters.itemName.length > 0}
          clearFilter={() => setFilters({ ...filters, itemName: [] })}
        >
          {filters.itemName && filters.itemName.length > 0 ? (
            <RevenueBySize
              data={data}
              filters={filters}
              setFilters={setFilters}
            />
          ) : (
            <RevenueByItem
              data={data}
              filters={filters}
              setFilters={setFilters}
            />
          )}
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title="Units Sold By Item"
          isClearFilterEnabled={filters.itemName && filters.itemName.length > 0}
          clearFilter={() => setFilters({ ...filters, itemName: [] })}
        >
          <UnitsSoldOvertimeByItem
            data={data}
            period={"month"}
            filters={filters}
            setFilters={setFilters}
          />
        </DashboardCard>
      </Grid>
    </>
  )
}
