import { Table } from "@sisense/sdk-ui"
import {
  ChartProps,
  numberFormatConfigs,
} from "../../../../configs/chart.config"

export default function EmployeeStats({ data }: ChartProps) {
  return (
    <Table
      dataSet={data.data}
      dataOptions={{
        columns: [
          {
            column: data.soldBy,
            title: "Employee",
          },
          {
            column: data.item,
            title: "Item",
          },
          {
            column: data.quantity,
            title: "Quantity",
            aggregation: "sum",
          },
          {
            column: data.revenue,
            title: "Revenue",
            numberFormatConfig: numberFormatConfigs.currency,
          },
        ],
      }}
      styleOptions={{
        rowsPerPage: 15,
      }}
    />
  )
}
