import { useThemeStore } from "../../stores/useThemeStore"
import { IconClearFilter } from "../Icons"
import { ButtonProps } from "."

export default function FilterButton({ children, onClick }: ButtonProps) {
  const { isDarkTheme } = useThemeStore()
  return (
    <button
      onClick={onClick}
      className={`
        min-w-[140px] text-sm p-2 rounded-md
        flex flex-row items-center gap-1 text-left
        ${
          isDarkTheme
            ? "text-white hover:bg-gray-700"
            : "text-black hover:bg-gray-200"
        }
      `}
    >
      <IconClearFilter width={20} height={20} />
      {children}
    </button>
  )
}
