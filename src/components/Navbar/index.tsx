import { useNavStore } from "../../stores/useNavStore"
import { useThemeStore } from "../../stores/useThemeStore"
import { useWorkspaceStore } from "../../stores/useWorkspaceStore"
import WorkspaceSelect from "./WorkspaceSelect"
import Navbtn, { type NavbtnProps } from "./Navbtn"
import { navRouter } from "../../routes"
import { BRAND_NAME } from "../../configs/brand.config"

export default function Navbar() {
  const { isSidebarActive, toggleSidebar } = useNavStore()
  const { workspace, toggleDisplayWorkspace } = useWorkspaceStore()
  const { isDarkTheme } = useThemeStore()

  const classList = `
    min-h-[100vh] w-[220px] h-full z-[2000]
    shadow-lg select-none fixed md:relative md:ml-0
    ${isDarkTheme ? "bg-slate-950 shadow-gray-500" : "bg-zinc-200 shadow-gray-400"}
    ${isSidebarActive ? "left-0" : "-ml-[220px] md:left-0 md:ml-0"}
  `

  return (
    <>
      {/* Navbar */}
      <nav className={classList}>
        <div className="flex flex-row items-center gap-1 p-3 font-bold">
          <img src="/favicon.png" alt="logo" />
          {BRAND_NAME}
        </div>
        <ul className="fixed flex flex-col">
          <WorkspaceSelect />
          {navRouter(workspace).map((route: NavbtnProps) => {
            return (
              <Navbtn
                key={route.path ? route.path : route.text}
                path={route.path}
                text={route.text}
                description={route.description}
                onClick={() => {
                  toggleSidebar(false)
                  toggleDisplayWorkspace(false)
                }}
              />
            )
          })}
        </ul>
      </nav>
      {/* Black background in mobile view for sidebar */}
      {isSidebarActive && (
        <div
          onClick={() => {
            toggleSidebar(false)
            toggleDisplayWorkspace(false)
          }}
          className="fixed w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-[1999] md:hidden"
        />
      )}
    </>
  )
}
