import { useThemeStore } from "../../stores/useThemeStore"
import { IconSun, IconMoon } from "../Icons"

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useThemeStore()
  return (
    <div
      title="Customization"
      className="flex flex-row gap-1 items-center cursor-pointer p-2 rounded-md hover:bg-[#782f9d]"
      onClick={toggleDarkTheme}
    >
      {isDarkTheme ? (
        <>
          <IconMoon width={24} height={24} className="animate-pulse" />
          <span className="hidden md:block text-sm">Dark Theme</span>
        </>
      ) : (
        <>
          <IconSun width={24} height={24} className="animate-pulse" />
          <span className="hidden md:block text-sm">Light Theme</span>
        </>
      )}
    </div>
  )
}
