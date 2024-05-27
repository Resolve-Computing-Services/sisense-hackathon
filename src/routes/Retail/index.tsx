import React from "react"
import {
  buildData,
  filterData,
  defaultFilter,
  type Record,
} from "../../configs/data.config"
import { items, sales } from "../../configs/data" // data source

import Grid from "@mui/material/Grid"
import Button from "../../components/Button"
import TimeFilter from "./TimeFilter"
import TypeFilter from "./TypeFilter"
import GenderFilter from "./GenderFilter"

import DashboardCard from "../../components/Card/Dashboard"
import TotalRevenue from "../../components/Charts/CustomData/Total/Revenue"
import TotalUnitsSold from "../../components/Charts/CustomData/Total/UnitsSold"
import RevenueOverTime from "../../components/Charts/CustomData/Overtime/Revenue"
import RevenueOverTimeByItem from "../../components/Charts/CustomData/Overtime/RevenueByItem"
import UnitsSoldBySize from "../../components/Charts/CustomData/BySize/UnitsSold"
import RevenueByColor from "../../components/Charts/CustomData/ByColor/UnitsSold"
import RevenueByGender from "../../components/Charts/CustomData/ByGender/Revenue"
import UnitsSoldByGender from "../../components/Charts/CustomData/ByGender/UnitsSold"

export type FilterProps = {
  filters: Record
  setFilters: Function
}

export default function Retail() {
  const [isBreakByItem, toggleBreakByItem] = React.useState<boolean>(false)
  const [filters, setFilters] = React.useState<Record>(defaultFilter())
  const originalData = buildData(items, sales)
  const data = filterData(originalData, filters)

  React.useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between gap-3 mx-5">
        <div>
          <h1 className="font-bold text-3xl mb-6">Retail</h1>
          <div className="flex flex-col gap-3 mb-6">
            <p className="text-lg underline text-[#F7931D] font-bold">
              Filters:
            </p>
            <TimeFilter filters={filters} setFilters={setFilters} />
            <TypeFilter
              filters={filters}
              setFilters={setFilters}
              toggleBreakByItem={toggleBreakByItem}
            />
            <GenderFilter filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="mb-0 lg:mb-6">
          <Button
            isActive={true}
            onClick={() => {
              setFilters({})
              setFilters(defaultFilter())
              toggleBreakByItem(false)
            }}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
      <Grid container spacing={2} rowSpacing={2} padding={2}>
        <DashboardCard gridColumns={8}>
          <TotalRevenue data={data} />
        </DashboardCard>
        <DashboardCard gridColumns={4}>
          <TotalUnitsSold data={data} />
        </DashboardCard>
        <DashboardCard
          gridColumns={12}
          title={
            filters.itemName && filters.itemName.length === 1
              ? `Revenue: ${filters.itemName[0]}`
              : "Revenue Over Time"
          }
          isClearFilterEnabled={
            (filters.itemName && filters.itemName.length > 0) ||
            (filters.date && filters.date.length > 0)
          }
          clearFilter={() => {
            if (
              filters.itemName &&
              filters.itemName.length > 0 &&
              !(filters.date && filters.date.length > 0)
            ) {
              toggleBreakByItem(true)
            } else {
              toggleBreakByItem(false)
            }
            setFilters({ ...filters, itemName: [], date: [] })
          }}
        >
          <div className="flex flex-row items-center gap-2">
            <Button
              isActive={!isBreakByItem}
              onClick={() => {
                setFilters({ ...filters, itemName: [] })
                toggleBreakByItem(false)
              }}
            >
              All Items
            </Button>
            <Button
              isActive={isBreakByItem}
              onClick={() => {
                setFilters({ ...filters, itemName: [] })
                toggleBreakByItem(true)
              }}
            >
              Break by Items
            </Button>
          </div>
          {isBreakByItem ? (
            <RevenueOverTimeByItem
              data={data}
              filters={filters}
              setFilters={setFilters}
            />
          ) : (
            <RevenueOverTime
              data={data}
              filters={filters}
              setFilters={setFilters}
              period={"date"}
            />
          )}
        </DashboardCard>
        <DashboardCard gridColumns={4} title={"Units Sold By Size"}>
          <UnitsSoldBySize
            data={data}
            filters={filters}
            setFilters={setFilters}
          />
        </DashboardCard>
        <DashboardCard gridColumns={4} title={"Units Sold By Color"}>
          <RevenueByColor
            data={data}
            filters={filters}
            setFilters={setFilters}
          />
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title={
            filters.itemName && filters.itemName.length > 0
              ? `Units Sold By Gender`
              : "Revenue By Gender"
          }
        >
          {filters.itemName && filters.itemName.length > 0 ? (
            <UnitsSoldByGender
              data={data}
              filters={filters}
              setFilters={setFilters}
            />
          ) : (
            <RevenueByGender
              data={data}
              filters={filters}
              setFilters={setFilters}
            />
          )}
        </DashboardCard>
      </Grid>
    </>
  )
}
