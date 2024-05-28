import Button from "../../components/Button"
import type { Record } from "../../configs/data.config"

type FilterButtonsProps = {
  filters: Record
  setFilters: Function
}

export default function FilterButtons({
  filters,
  setFilters,
}: FilterButtonsProps) {
  const lastMonth =
    new Date().getMonth() === 0
      ? new Date().getFullYear() - 1 + "-12"
      : new Date().getMonth().toString().length === 2
        ? new Date().getFullYear() + "-" + new Date().getMonth()
        : new Date().getFullYear() + "-0" + new Date().getMonth()

  const thisMonth =
    (new Date().getMonth() + 1).toString().length === 2
      ? new Date().getFullYear() + "-" + (new Date().getMonth() + 1)
      : new Date().getFullYear() + "-0" + (new Date().getMonth() + 1)

  return (
    <div className="flex flex-row gap-1 items-center animate-fadein">
      <Button
        title={"See all time recap"}
        isActive={filters.month.length === 0}
        onClick={() => setFilters({ ...filters, month: [], date: [] })}
      >
        All time
      </Button>
      <Button
        title={"See last month's recap"}
        isActive={filters.month[0] === lastMonth}
        onClick={() => setFilters({ ...filters, month: [lastMonth], date: [] })}
      >
        Last month
      </Button>
      <Button
        title={"See this month's recap"}
        isActive={filters.month[0] === thisMonth}
        onClick={() => setFilters({ ...filters, month: [thisMonth], date: [] })}
      >
        This month
      </Button>
    </div>
  )
}
