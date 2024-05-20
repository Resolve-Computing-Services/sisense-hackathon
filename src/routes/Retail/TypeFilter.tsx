import Button from "../../components/Button"
import type { FilterProps } from "."

type TypeFilterProps = FilterProps & {
  toggleBreakByItem: Function
}

export default function TypeFilter({
  filters,
  setFilters,
  toggleBreakByItem,
}: TypeFilterProps) {
  return (
    <div className="flex flex-col sm:flex-row md:items-center gap-3">
      <p className="w-[120px]">By item type:</p>
      <div className="flex flex-row items-center gap-3">
        <Button
          isActive={
            (filters.itemType && filters.itemType.length === 0) ||
            !filters.itemType
          }
          onClick={() => {
            setFilters({ ...filters, itemType: [], itemName: [] })
            toggleBreakByItem(false)
          }}
        >
          All items
        </Button>
        <Button
          isActive={filters.itemType && filters.itemType[0] === "Clothing"}
          onClick={() => {
            setFilters({ ...filters, itemType: ["Clothing"], itemName: [] })
            toggleBreakByItem(true)
          }}
        >
          Clothing
        </Button>
        <Button
          isActive={filters.itemType && filters.itemType[0] === "Accessories"}
          onClick={() => {
            setFilters({ ...filters, itemType: ["Accessories"], itemName: [] })
            toggleBreakByItem(true)
          }}
        >
          Accessories
        </Button>
      </div>
    </div>
  )
}
