import type { NumberFormatConfig } from "@sisense/sdk-ui"
import type { Filter } from "@sisense/sdk-data"
import type { Record } from "./data.config"

export type ChartProps = {
  data: any
  title?: string
  filters?: Record | Filter[]
  setFilters?: Function
}

export type OvertimeChartProps = ChartProps & {
  period?: "date" | "month" | "year"
}

type NumberFormatConfigs = {
  [key: string]: NumberFormatConfig
}

export const numberFormatConfigs: NumberFormatConfigs = {
  currency: {
    name: "Currency",
    decimalScale: 2,
    trillion: false,
    billion: false,
    million: false,
    kilo: false,
    thousandSeparator: false,
    prefix: true,
    symbol: "$",
  },
  currency_2: {
    name: "Currency",
    decimalScale: 2,
    trillion: true,
    billion: true,
    million: true,
    kilo: true,
    thousandSeparator: true,
    prefix: true,
    symbol: "$",
  },
  unit: {
    decimalScale: 0,
    trillion: false,
    billion: false,
    million: false,
    kilo: false,
    thousandSeparator: false,
    prefix: true,
  },
}

export const indicatorStyleOptions = (text: string) => ({
  subtype: "indicator/numeric",
  skin: "vertical",
  indicatorComponents: {
    title: {
      shouldBeShown: true,
      text: text,
    },
  },
})

export const barChartStyleOptions = (position: string) => ({
  legend: {
    enabled: true,
    position: position,
  },
})

export const pieChartStyleOptions = (position: string) => ({
  legend: {
    enabled: position !== "null",
    position: position,
  },
  convolution: {
    enabled: false,
  },
  subtype: position !== "null" ? "pie/classic" : "pie/donut",
  labels: {
    enabled: position === "null",
    value: true,
  },
})

export const ecommerceChartBreakByOptions = {
  NONE: 0,
  CONDITION: 1,
  AGE: 2,
  GENDER: 3,
} as const
