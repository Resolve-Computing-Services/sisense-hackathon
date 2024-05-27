import React from "react"
import { useLocation } from "react-router-dom"
import { useNavStore } from "../stores/useNavStore"
import { useThemeStore } from "../stores/useThemeStore"
import ThemeToggle from "../components/Button/Theme"
import Bubble from "../components/Bubble"
import { IconMenu, IconCog, IconProfile, IconLogout } from "../components/Icons"
import { BRAND_NAME, USERNAME } from "../configs/brand.config"

export default function Header() {
  const { pathname } = useLocation()
  const [isProfileEnabled, toggleProfile] = React.useState(false)
  const { isSidebarActive, toggleSidebar } = useNavStore()
  const { isDarkTheme } = useThemeStore()

  React.useEffect(() => {
    toggleProfile(false)
  }, [pathname, isSidebarActive])

  return (
    <header className="w-full flex flex-col select-none mb-3">
      <div
        className={`
          flex flex-row items-center justify-between p-1 px-3
          bg-[#ab62d0] text-white shadow-md 
          ${isDarkTheme ? "shadow-gray-500" : "shadow-gray-400"} 
        `}
      >
        <div>
          <div className="flex flex-row items-center gap-3">
            <IconMenu
              width={24}
              height={24}
              className="md:hidden animate-pulse cursor-pointer"
              onClick={() => toggleSidebar(true)}
            />
            <div className="flex flex-row items-center gap-1 font-bold md:hidden">
              <img src="/favicon.png" alt="logo" />
              {BRAND_NAME}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 p-1">
          <ThemeToggle />
          <div className="relative">
            <div
              title="Profile"
              className="flex flex-row gap-2 items-center cursor-pointer p-2 rounded-md hover:bg-[#782f9d]"
              onClick={() => toggleProfile(!isProfileEnabled)}
            >
              <IconProfile width={20} height={20} className="animate-pulse" />
              <span className="hidden md:block text-sm">Profile</span>
            </div>
            <Bubble isOpen={isProfileEnabled}>
              <div>
                Hello
                <br />
                <strong>{USERNAME}</strong>!
              </div>
              <hr className="-mx-1 my-2 border border-slate-300" />
              <div
                className={`
                flex flex-row gap-2 mb-2 items-center  
                p-1 rounded-md cursor-pointer hover:bg-gray-200
              `}
              >
                <IconProfile />
                Profile
              </div>
              <div
                className={`
                flex flex-row gap-2 mb-2 items-center  
                p-1 rounded-md cursor-pointer hover:bg-gray-200
              `}
              >
                <IconCog />
                Settings
              </div>
              <hr className="-mx-1 my-2 border border-slate-300" />
              <div
                className={`
                flex flex-row gap-2 items-center  
                p-1 rounded-md cursor-pointer hover:bg-gray-200
              `}
              >
                <IconLogout />
                Log out
              </div>
            </Bubble>
          </div>
        </div>
      </div>
    </header>
  )
}
