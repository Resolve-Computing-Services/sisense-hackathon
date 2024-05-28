import { useWorkspaceStore } from "../../stores/useWorkspaceStore"
import { useThemeStore, colorPalettes } from "../../stores/useThemeStore"
import { IconPalette } from "../Icons"

export default function PaletteToggle() {
  const { colorPalette, setColorPalette } = useThemeStore()
  const { toggleDisplayWorkspace } = useWorkspaceStore()
  return (
    <div
      title="Customization"
      className={`
        md:w-[95px] flex flex-row gap-1 items-center justify-between cursor-pointer p-2 rounded-md
        ${colorPalette === colorPalettes.BRAND ? "hover:bg-[#782f9d]" : "hover:bg-blue-500"}  
      `}
      onClick={() => {
        setColorPalette()
        toggleDisplayWorkspace(false)
      }}
    >
      <IconPalette width={24} height={24} className="animate-pulse" />
      <span className="hidden md:block text-sm">
        {colorPalette === colorPalettes.BRAND ? "Brand" : "Default"}
      </span>
    </div>
  )
}
