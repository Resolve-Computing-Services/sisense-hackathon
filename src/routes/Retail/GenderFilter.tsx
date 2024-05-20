import Button from "../../components/Button"
import type { FilterProps } from "."

export default function GenderFilter({ filters, setFilters }: FilterProps) {
  return (
    <div className="flex flex-col sm:flex-row md:items-center gap-3">
      <p className="w-[120px]">By gender:</p>
      <div className="flex flex-row items-center gap-3">
        <Button
          isActive={
            (filters.itemGender && filters.itemGender.length === 0) ||
            !filters.itemGender
          }
          onClick={() => {
            setFilters({ ...filters, itemGender: [] })
          }}
        >
          All
        </Button>
        <Button
          isActive={filters.itemGender && filters.itemGender[0] === "Men"}
          onClick={() => {
            setFilters({ ...filters, itemGender: ["Men", "Unisex"] })
          }}
        >
          Men
        </Button>
        <Button
          isActive={filters.itemGender && filters.itemGender[0] === "Women"}
          onClick={() => {
            setFilters({ ...filters, itemGender: ["Women", "Unisex"] })
          }}
        >
          Women
        </Button>
        <Button
          isActive={filters.itemGender && filters.itemGender[0] === "Unisex"}
          onClick={() => {
            setFilters({ ...filters, itemGender: ["Unisex"] })
          }}
        >
          Unisex
        </Button>
      </div>
    </div>
  )
}
