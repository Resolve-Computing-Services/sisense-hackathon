import { useState, useEffect, useRef } from "react"
import { toPng } from "html-to-image"
import {
  DateRangeFilterTile,
  MemberFilterTile,
  RelativeDateFilterTile,
} from "@sisense/sdk-ui"
import { filterFactory, type Filter } from "@sisense/sdk-data"
import * as DM from "../sample-ecommerce"
import { ecommerceChartBreakByOptions } from "../../configs/chart.config"

import Grid from "@mui/material/Grid"
import BreakByButtons from "./BreakByButtons"
import DashboardCard from "../../components/Card/Dashboard"
import Button from "../../components/Button"
import { IconClose, IconDownload } from "../../components/Icons"

import TotalRevenue from "../../components/Charts/Connector/Total/Revenue"
import TotalUnitsSold from "../../components/Charts/Connector/Total/UnitsSold"
import TotalSales from "../../components/Charts/Connector/Total/Sales"
import TotalBrands from "../../components/Charts/Connector/Total/Brands"
import RevenueTrend from "../../components/Charts/Connector/Overtime/RevenueTrend"
import RevenueAndQuantity from "../../components/Charts/Connector/Overtime/RevenueAndQuantity"
import SitePopularity from "../../components/Charts/Connector/Overtime/SitePopularity"
import SitePopularityByAge from "../../components/Charts/Connector/ByAge/SitePopularity"
import SitePopularityByGender from "../../components/Charts/Connector/ByGender/SitePopularity"
import RevenueByCountry from "../../components/Charts/Connector/ByCountry/Revenue"
import BuyerAnalysisByCondition from "../../components/Charts/Connector/ByCondition/BuyerAnalysis"
import BuyerAnalysisByAge from "../../components/Charts/Connector/ByAge/BuyerAnalysis"
import BuyerAnalysisByGender from "../../components/Charts/Connector/ByGender/BuyerAnalysis"
import RevenueByAge from "../../components/Charts/Connector/ByAge/Revenue"
import RevenueByGender from "../../components/Charts/Connector/ByGender/Revenue"

export default function Insights() {
  const containerRef = useRef()
  const [filterDateRange, setFilterDateRange] = useState<Filter>(
    filterFactory.dateRange(DM.Commerce.Date.Years)
  )
  const [filterRelativeDateRange, setFilterRelativeDateRange] =
    useState<Filter>(filterFactory.dateRange(DM.Commerce.Date.Years))
  const [filterAgeRange, setFilterAgeRange] = useState<Filter | null>(null)
  const [filterBrand, setFilterBrand] = useState<Filter | null>(null)
  const [filterCountry, setFilterCountry] = useState<Filter | null>(null)
  const [filterGender, setFilterGender] = useState<Filter | null>(null)

  const [showFilters, setShowFilters] = useState<boolean>(false)
  const [isTotalVisitsCompared, setCompareVisits] = useState<boolean>(false)
  const [breakBy, setBreakBy] = useState<number>(
    ecommerceChartBreakByOptions.CONDITION
  )

  const activeFilters: Filter[] = [
    filterDateRange,
    filterRelativeDateRange,
    filterAgeRange,
    filterBrand,
    filterCountry,
    filterGender,
  ].filter((f) => {
    if (f) return f // make sure no filters are undefined
  }) as Filter[]

  useEffect(() => window.scrollTo(0, 0), [])

  const ClearAllFiltersButton = () => (
    <Button
      isActive={true}
      onClick={() => {
        setFilterDateRange(filterFactory.dateRange(DM.Commerce.Date.Years))
        setFilterRelativeDateRange(
          filterFactory.dateRange(DM.Commerce.Date.Years)
        )
        setFilterAgeRange(null)
        setFilterBrand(null)
        setFilterCountry(null)
        setFilterGender(null)
        setShowFilters(false)
      }}
    >
      Clear All Filters
    </Button>
  )

  const DownloadImageButton = () => (
    <Button
      title={"Download as PNG"}
      isActive={false}
      onClick={() =>
        toPng(containerRef.current!)
          .then((dataUrl) => {
            const link = document.createElement("a")
            link.href = dataUrl
            link.download = `insights-dashboard-${new Date().toLocaleString("en-US")}.png`
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
      }
    >
      <IconDownload width={24} height={24} />
    </Button>
  )

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start lg:items-end lg:justify-between gap-3 mx-5">
        <h1 className="font-bold text-3xl mb-1">Insights</h1>
        <div className="flex flex-row items-center gap-3 animate-fadein">
          <DownloadImageButton />
          <Button onClick={() => setShowFilters(true)}>
            {showFilters ? "Hide" : "Show"} Filters
          </Button>
          <ClearAllFiltersButton />
        </div>
      </div>
      {showFilters ? (
        <>
          <div className="fixed top-0 right-0 w-[240px] h-[100vh] flex flex-col gap-3 bg-white p-3 z-[2003]">
            <div className="flex flex-row items-center justify-between mb-6">
              <p className="font-bold text-black">Filters</p>
              <div
                className="p-2 text-gray-800 hover:text-gray-400 cursor-pointer"
                onClick={() => setShowFilters(false)}
              >
                <IconClose width={24} height={24} />
              </div>
            </div>
            <ClearAllFiltersButton />
            <div className="min-w-[216px] border border-[#dadada] w-min p-1 py-[2px]">
              <DateRangeFilterTile
                title="Date Range"
                attribute={DM.Commerce.Date.Years}
                filter={filterDateRange}
                onChange={(filter: Filter) => {
                  setFilterDateRange(filter)
                }}
              />
            </div>
            <RelativeDateFilterTile
              title="Date Range"
              filter={filterRelativeDateRange}
              arrangement={"horizontal"}
              onUpdate={(filter: Filter | null) => {
                filter && setFilterRelativeDateRange(filter)
              }}
            />
            <MemberFilterTile
              title="Age Range"
              dataSource={DM.DataSource}
              attribute={DM.Commerce.AgeRange}
              filter={filterAgeRange}
              onChange={setFilterAgeRange}
            />
            <MemberFilterTile
              title="Brand"
              dataSource={DM.DataSource}
              attribute={DM.Brand.Brand}
              filter={filterBrand}
              onChange={setFilterBrand}
            />
            <MemberFilterTile
              title="Country"
              dataSource={DM.DataSource}
              attribute={DM.Country.Country}
              filter={filterCountry}
              onChange={setFilterCountry}
            />
            <MemberFilterTile
              title="Gender"
              dataSource={DM.DataSource}
              attribute={DM.Commerce.Gender}
              filter={filterGender}
              onChange={setFilterGender}
            />
          </div>
          <div
            onClick={() => setShowFilters(false)}
            className="fixed top-0 left-[-18px] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[2002]"
          />
        </>
      ) : (
        <></>
      )}

      <Grid
        container
        spacing={2}
        rowSpacing={2}
        padding={2}
        className="animate-fadein"
        ref={containerRef as any}
      >
        <DashboardCard gridColumns={3}>
          <TotalRevenue data={DM} filters={activeFilters} />
        </DashboardCard>
        <DashboardCard gridColumns={3}>
          <TotalUnitsSold data={DM} filters={activeFilters} />
        </DashboardCard>
        <DashboardCard gridColumns={3}>
          <TotalSales data={DM} filters={activeFilters} />
        </DashboardCard>
        <DashboardCard gridColumns={3}>
          <TotalBrands data={DM} filters={activeFilters} />
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
            <RevenueTrend
              data={DM}
              filters={activeFilters}
              setFilters={setFilterDateRange}
            />
          ) : (
            <RevenueAndQuantity data={DM} filters={activeFilters} />
          )}
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title={`
            Site Popularity${filterAgeRange !== null || filterGender !== null ? ": " : ""}
            ${
              filterGender !== null && filterAgeRange !== null
                ? `${(filterGender as any)?.valueA}, ${(filterAgeRange as any)?.valueA}`
                : filterGender !== null
                  ? `${(filterGender as any)?.valueA}`
                  : filterAgeRange !== null
                    ? `${(filterAgeRange as any)?.valueA}`
                    : ""
            }
          `}
          isClearFilterEnabled={
            filterAgeRange !== null || filterGender !== null
          }
          clearFilter={() => {
            setFilterAgeRange(null)
            setFilterGender(null)
          }}
        >
          <BreakByButtons
            breakBy={breakBy}
            setBreakBy={setBreakBy}
            customText={"All Time"}
          />
          {breakBy === ecommerceChartBreakByOptions.AGE ? (
            <SitePopularityByAge
              data={DM}
              filters={activeFilters}
              setFilters={setFilterAgeRange}
            />
          ) : breakBy === ecommerceChartBreakByOptions.GENDER ? (
            <SitePopularityByGender
              data={DM}
              filters={activeFilters}
              setFilters={setFilterGender}
            />
          ) : (
            <SitePopularity data={DM} filters={activeFilters} />
          )}
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title={`Geography${filterCountry !== null ? `: ${(filterCountry as any).valueA}` : ""}`}
          isClearFilterEnabled={filterCountry !== null}
          clearFilter={() => setFilterCountry(null)}
        >
          <div className="hidden lg:block h-[40px] mb-2"></div>
          <RevenueByCountry
            data={DM}
            filters={activeFilters}
            setFilters={setFilterCountry}
          />
        </DashboardCard>
        <DashboardCard
          gridColumns={8}
          title={`
            Buyer Analysis${filterAgeRange !== null || filterGender !== null ? ": " : ""}
            ${
              filterGender !== null && filterAgeRange !== null
                ? `${(filterGender as any)?.valueA}, ${(filterAgeRange as any)?.valueA}`
                : filterGender !== null
                  ? `${(filterGender as any)?.valueA}`
                  : filterAgeRange !== null
                    ? `${(filterAgeRange as any)?.valueA}`
                    : ""
            }
          `}
          isClearFilterEnabled={
            filterAgeRange !== null || filterGender !== null
          }
          clearFilter={() => {
            setFilterAgeRange(null)
            setFilterGender(null)
          }}
        >
          <BreakByButtons breakBy={breakBy} setBreakBy={setBreakBy} />
          {breakBy === ecommerceChartBreakByOptions.CONDITION ? (
            <BuyerAnalysisByCondition data={DM} filters={activeFilters} />
          ) : breakBy === ecommerceChartBreakByOptions.AGE ? (
            <BuyerAnalysisByAge data={DM} filters={activeFilters} />
          ) : (
            <BuyerAnalysisByGender data={DM} filters={activeFilters} />
          )}
        </DashboardCard>
        <DashboardCard
          gridColumns={4}
          title={`
            Demographics${filterAgeRange !== null || filterGender !== null ? ": " : ""}
            ${
              filterGender !== null && filterAgeRange !== null
                ? `${(filterGender as any)?.valueA}, ${(filterAgeRange as any)?.valueA}`
                : filterGender !== null
                  ? `${(filterGender as any)?.valueA}`
                  : filterAgeRange !== null
                    ? `${(filterAgeRange as any)?.valueA}`
                    : ""
            }
          `}
          isClearFilterEnabled={
            filterAgeRange !== null || filterGender !== null
          }
          clearFilter={() => {
            setFilterAgeRange(null)
            setFilterGender(null)
          }}
        >
          <div className="flex flex-row items-center gap-2 h-[40px] mb-2">
            <BreakByButtons
              breakBy={breakBy}
              setBreakBy={setBreakBy}
              noCondition={true}
            />
          </div>
          {breakBy === ecommerceChartBreakByOptions.GENDER ? (
            <RevenueByGender
              data={DM}
              filters={activeFilters}
              setFilters={setFilterGender}
            />
          ) : (
            <RevenueByAge
              data={DM}
              filters={activeFilters}
              setFilters={setFilterAgeRange}
            />
          )}
        </DashboardCard>
      </Grid>
    </>
  )
}
