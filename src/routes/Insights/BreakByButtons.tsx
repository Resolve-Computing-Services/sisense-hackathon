import Button from "../../components/Button"
import { ecommerceChartBreakByOptions } from "../../configs/chart.config"

type FilterButtonsProps = {
  breakBy: number
  setBreakBy: Function
  noCondition?: boolean
  customText?: string
}

export default function BreakByButtons({
  breakBy,
  setBreakBy,
  noCondition = false,
  customText,
}: FilterButtonsProps) {
  return (
    <div className="flex flex-row items-center gap-2 h-[40px] mb-2">
      {noCondition ? (
        <></>
      ) : (
        <Button
          isActive={breakBy === ecommerceChartBreakByOptions.CONDITION}
          onClick={() => setBreakBy(ecommerceChartBreakByOptions.CONDITION)}
        >
          {customText ? customText : "By Condition"}
        </Button>
      )}
      <Button
        isActive={
          noCondition
            ? breakBy !== ecommerceChartBreakByOptions.GENDER
            : breakBy === ecommerceChartBreakByOptions.AGE
        }
        onClick={() =>
          noCondition
            ? breakBy === ecommerceChartBreakByOptions.GENDER &&
              setBreakBy(ecommerceChartBreakByOptions.AGE)
            : setBreakBy(ecommerceChartBreakByOptions.AGE)
        }
      >
        By Age Range
      </Button>
      <Button
        isActive={breakBy === ecommerceChartBreakByOptions.GENDER}
        onClick={() => setBreakBy(ecommerceChartBreakByOptions.GENDER)}
      >
        By Gender
      </Button>
    </div>
  )
}
