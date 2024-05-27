import React, { useState } from "react"
import type { FilterProps } from "."

export default function TimeFilter({ filters, setFilters }: FilterProps) {
  const [year, setYear] = useState<string>("")
  const [month, setMonth] = useState<string>("")

  React.useEffect(() => {
    if (!filters.month || filters.month.length === 0) {
      setMonth("")
      if (!filters.year || filters.year.length === 0) {
        setYear("")
      }
    }
  }, [filters])

  const yearOptions = () => {
    const result: number[] = []
    for (let i = 2017; i <= new Date().getFullYear(); i++) {
      result.push(i)
    }
    return result
  }

  const handleInputYear = (e: any) => {
    setYear(e.target.value)
    if (e.target.value === "") {
      setFilters({ ...filters, year: [], month: [] })
    } else {
      setFilters({ ...filters, year: [e.target.value] })
    }

    if (month !== "") {
      setFilters({ ...filters, month: [`${e.target.value}-${month}`] })
    }
  }
  const handleInputMonth = (e: any) => {
    setMonth(e.target.value)
    if (e.target.value === "") {
      setFilters({ ...filters, month: [] })
    } else {
      setFilters({ ...filters, month: [`${year}-${e.target.value}`] })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row md:items-center gap-3">
      <p className="w-[120px]">By time:</p>
      <div className="flex flex-row items-center gap-3">
        <select
          name="month"
          title="Select month"
          disabled={year === ""}
          value={month}
          onChange={handleInputMonth}
          className={`
            w-[120px] text-black px-1 border border-[#f9ab53] rounded-md shadow-md
            disabled:bg-gray-200 disabled:border-gray-500 disabled:cursor-not-allowed
          `}
        >
          <option value={""}>---</option>
          <option value={"01"}>January</option>
          <option value={"02"}>February</option>
          <option value={"03"}>March</option>
          <option value={"04"}>April</option>
          <option value={"05"}>May</option>
          <option value={"06"}>June</option>
          <option value={"07"}>July</option>
          <option value={"08"}>August</option>
          <option value={"09"}>September</option>
          <option value={"10"}>October</option>
          <option value={"11"}>November</option>
          <option value={"12"}>December</option>
        </select>
        <select
          name="year"
          title="Select year"
          value={year}
          onChange={handleInputYear}
          className="w-[80px] text-black px-1 border border-[#f9ab53] rounded-md shadow-md"
        >
          <option value={""}>---</option>
          {yearOptions().map((year: number) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
