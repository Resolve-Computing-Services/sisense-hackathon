// data.config.ts:
// Used for manipulating the data from data.ts
// to display appropriately to Sisense charts

const cols = [
  "saleId",
  "date",
  "itemId",
  "itemName",
  "itemType",
  "itemGender",
  "itemColor",
  "itemSize",
  "itemPrice",
  "quantity",
  "soldBy",
  "revenue",
  "month",
  "year",
]

export const buildData = (items: any, sales: any) => {
  const columns = [
    sales.data.columns[0],
    sales.data.columns[1],
    sales.data.columns[2],
    items.data.columns[1],
    items.data.columns[2],
    items.data.columns[3],
    items.data.columns[4],
    items.data.columns[5],
    items.data.columns[6],
    sales.data.columns[3],
    sales.data.columns[4],
    sales.data.columns[5],
    { name: "Month", type: "date" },
    { name: "Year", type: "date" },
  ]

  const rows = sales.data.rows.map((sale: Array<string | number>) => {
    return [
      sale?.[0],
      sale?.[1],
      sale?.[2],
      items.data.rows[(sale?.[2] as number) - 1]?.[1],
      items.data.rows[(sale?.[2] as number) - 1]?.[2],
      items.data.rows[(sale?.[2] as number) - 1]?.[3],
      items.data.rows[(sale?.[2] as number) - 1]?.[4],
      items.data.rows[(sale?.[2] as number) - 1]?.[5],
      items.data.rows[(sale?.[2] as number) - 1]?.[6],
      sale?.[3],
      sale?.[4],
      sale?.[5],
      (sale?.[1] as string).substring(0, 7),
      (sale?.[1] as string).substring(0, 4),
    ]
  })

  return {
    data: { columns, rows },
    date: sales.date,
    month: {
      name: "Month",
      type: "data",
    },
    year: {
      name: "Year",
      type: "date",
    },
    itemID: sales.itemID,
    item: items.item,
    type: items.type,
    gender: items.gender,
    color: items.color,
    size: items.size,
    itemPrice: items.price,
    quantity: sales.quantity,
    soldBy: sales.soldBy,
    revenue: sales.revenue,
  }
}

export type Record = {
  [key: string]: Array<string>
}

export const filterData = (data: any, filters: Record) => {
  let result = data
  cols.map((column: string, i: number) => {
    if (filters[column] && filters[column].length > 0) {
      result = {
        ...result,
        data: {
          ...result.data,
          rows: result.data.rows.filter((row: Array<string | number>) => {
            if (filters[column].includes(row[i] as string)) return row
          }),
        },
      }
    }
  })
  return result
}

export const defaultFilter = () => {
  const result: Record = {}
  cols.map((column: string) => ({
    ...result,
    [column]: [],
  }))
  return result
}
