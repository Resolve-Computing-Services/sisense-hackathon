import { MouseEventHandler, ReactNode } from "react"
import { useWindowWidth } from "@react-hook/window-size"
import Grid from "@mui/material/Grid"
import { useThemeStore } from "../../stores/useThemeStore"
import FilterButton from "../Button/Filter"

type DashboardCardProps = {
  title?: string
  widthThreshold?: number
  gridColumns: number
  children?: ReactNode
  isClearFilterEnabled?: boolean
  clearFilter?: MouseEventHandler<HTMLButtonElement>
}

export default function DashboardCard({
  title = "",
  widthThreshold = 1280,
  gridColumns,
  children,
  isClearFilterEnabled,
  clearFilter,
}: DashboardCardProps) {
  const width = useWindowWidth()
  const { isDarkTheme } = useThemeStore()
  return (
    <Grid item xs={width >= widthThreshold ? gridColumns : 12}>
      <div
        className={
          isDarkTheme ? "p-3 bg-gray-950 rounded-lg" : "p-3 bg-white rounded-lg"
        }
      >
        {title ? (
          <div className="min-h-[40px] flex flex-col md:flex-row md:items-start justify-start md:justify-between mb-3">
            <h1 className="text-lg">{title}</h1>
            {isClearFilterEnabled && clearFilter ? (
              <FilterButton onClick={clearFilter}>Clear selection</FilterButton>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        {children}
      </div>
    </Grid>
  )
}
