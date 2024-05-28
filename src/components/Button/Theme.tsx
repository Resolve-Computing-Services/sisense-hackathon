import { useWorkspaceStore } from "../../stores/useWorkspaceStore"
import { useThemeStore, colorPalettes } from "../../stores/useThemeStore"
import { IconSun, IconMoon } from "../Icons"

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme, colorPalette } = useThemeStore()
  const { toggleDisplayWorkspace } = useWorkspaceStore()
  return (
    <div
      title="Customization"
      className={`
        md:w-[130px] flex flex-row gap-1 items-center justify-between cursor-pointer p-2 rounded-md
        ${colorPalette === colorPalettes.BRAND ? "hover:bg-[#782f9d]" : "hover:bg-blue-500"}
      `}
      onClick={() => {
        toggleDarkTheme()
        toggleDisplayWorkspace(false)
      }}
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
