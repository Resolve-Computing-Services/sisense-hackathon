import { useState, useEffect } from "react"
import { type Filter } from "@sisense/sdk-data"
import * as DM from "../sample-ecommerce"
import { ecommerceChartBreakByOptions } from "../../configs/chart.config"
import { USERNAME } from "../../configs/brand.config"

import Grid from "@mui/material/Grid"
import BreakByButtons from "../Insights/BreakByButtons"
import DashboardCard from "../../components/Card/Dashboard"
import Button from "../../components/Button"

import TotalRevenue from "../../components/Charts/Connector/Total/Revenue"
import TotalUnitsSold from "../../components/Charts/Connector/Total/UnitsSold"
import RevenueTrend from "../../components/Charts/Connector/Overtime/RevenueTrend"
import RevenueAndQuantity from "../../components/Charts/Connector/Overtime/RevenueAndQuantity"
import RevenueByCountry from "../../components/Charts/Connector/ByCountry/Revenue"
import RevenueByAge from "../../components/Charts/Connector/ByAge/Revenue"
import RevenueByGender from "../../components/Charts/Connector/ByGender/Revenue"

export default function Recap() {
  const [filterGender, _] = useState<Filter | null>(null)
  const [isTotalVisitsCompared, setCompareVisits] = useState<boolean>(false)
  const [breakBy, setBreakBy] = useState<number>(
    ecommerceChartBreakByOptions.CONDITION
  )

  const activeFilters: Filter[] = [filterGender].filter((f) => {
    if (f) return f // make sure no filters are undefined
  }) as Filter[]

  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between gap-3 mx-5">
        <div>
          <h1 className="font-bold text-3xl mb-1">Hi {USERNAME}!</h1>
          <p>Here's your eCommerce recap</p>
        </div>
      </div>
      <Grid container spacing={2} rowSpacing={2} padding={2}>
        <DashboardCard gridColumns={8}>
          <TotalRevenue data={DM} filters={activeFilters} />
        </DashboardCard>
        <DashboardCard gridColumns={4}>
          <TotalUnitsSold data={DM} filters={activeFilters} />
        </DashboardCard>
        <DashboardCard gridColumns={4} title="Revenue Trend">
          <div className="flex flex-row items-center gap-2 h-[40px] mb-2">
            <Button
              isActive={!isTotalVisitsCompared}
              onClick={() => setCompareVisits(false)}
            >
              Vs. Units Sold
            </Button>
            <Button
              isActive={isTotalVisitsCompared}
              onClick={() => setCompareVisits(true)}
            >
              Vs. Total Visits
            </Button>
          </div>
          {isTotalVisitsCompared ? (
            <RevenueTrend data={DM} filters={activeFilters} />
          ) : (
            <RevenueAndQuantity data={DM} filters={activeFilters} />
          )}
        </DashboardCard>
        <DashboardCard gridColumns={4} title="Demographics">
          <div className="flex flex-row items-center gap-2 h-[40px] mb-2">
            <BreakByButtons
              breakBy={breakBy}
              setBreakBy={setBreakBy}
              noCondition={true}
            />
          </div>
          {breakBy === ecommerceChartBreakByOptions.GENDER ? (
            <RevenueByGender data={DM} filters={activeFilters} />
          ) : (
            <RevenueByAge data={DM} filters={activeFilters} />
          )}
        </DashboardCard>
        <DashboardCard gridColumns={4} title="Geography">
          <div className="hidden lg:block h-[40px] mb-2"></div>
          <RevenueByCountry data={DM} filters={activeFilters} />
        </DashboardCard>
      </Grid>
    </>
  )
}
