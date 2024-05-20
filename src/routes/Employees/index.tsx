import React from "react"
import { buildData, filterData, type Record } from "../../configs/data.config"
import { items, sales } from "../../configs/data" // data source

import Grid from "@mui/material/Grid"
import FilterButtons from "./FilterButtons"
import DashboardCard from "../../components/Card/Dashboard"
import TotalRevenue from "../../components/Charts/CustomData/Total/Revenue"
import RevenueByEmployee from "../../components/Charts/CustomData/ByEmployee/Revenue"
import EmployeeStats from "../../components/Charts/CustomData/ByEmployee/Table"

export default function Employees() {
  const [filters, setFilters] = React.useState<Record>({ month: [] })
  const originalData = buildData(items, sales)
  const data = filterData(originalData, filters)

  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-3 mx-5">
        <h1 className="font-bold text-3xl mb-1">Employees</h1>
        <FilterButtons filters={filters} setFilters={setFilters} />
      </div>
      <Grid container spacing={2} rowSpacing={2} padding={2}>
        <DashboardCard
          gridColumns={12}
          title="Revenue By Employee"
          isClearFilterEnabled={filters.soldBy && filters.soldBy.length > 0}
          clearFilter={() => setFilters({ ...filters, soldBy: [] })}
        >
          {filters.soldBy && filters.soldBy.length > 0 ? (
            <TotalRevenue
              data={data}
              filters={filters}
              setFilters={setFilters}
              title={`${filters?.soldBy?.[0]}`}
            />
          ) : (
            <RevenueByEmployee
              data={data}
              filters={filters}
              setFilters={setFilters}
            />
          )}
        </DashboardCard>
        <DashboardCard gridColumns={12} title="Sales Records">
          <EmployeeStats data={data} />
        </DashboardCard>
      </Grid>
    </>
  )
}
