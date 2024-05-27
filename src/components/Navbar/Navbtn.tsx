import { Link, useLocation } from "react-router-dom"
import { useThemeStore } from "../../stores/useThemeStore"
import {
  IconBell,
  IconDashboard,
  IconDollar,
  IconInsights,
  IconUser,
} from "../Icons"

export type NavbtnProps = {
  path: string | null
  text: string
  description?: string
}

export default function Navbtn({ path, text, description }: NavbtnProps) {
  const { pathname } = useLocation()
  const { isDarkTheme } = useThemeStore()

  const NavIcon = () => {
    switch (path) {
      case "/overview":
        return <IconDashboard width={18} height={18} />
      case "/recap":
        return <IconBell width={18} height={18} />
      case "/insights":
        return <IconInsights width={18} height={18} />
      case "/retail":
        return <IconDollar width={18} height={18} />
      case "/employees":
        return <IconUser width={18} height={18} />
      default:
        return <></>
    }
  }

  if (path !== null)
    return (
      <Link
        to={path}
        title={description}
        className={`
          w-[220px] p-3 py-2
          ${pathname === path ? (isDarkTheme ? "bg-[#222240]" : "bg-zinc-300") : ""}
          ${isDarkTheme ? "hover:bg-[#782f9d] text-white" : "hover:bg-[#ab62d0] text-black"}
        `}
      >
        <li className="flex flex-row items-center gap-2">
          <NavIcon />
          <span className="w-[160px]">{text}</span>
        </li>
      </Link>
    )
  else
    return (
      <div
        title={description}
        className={`
          w-[220px] text-xs italic p-3 py-2 mt-3
          ${isDarkTheme ? "text-gray-400" : "text-gray-500"}
        `}
      >
        {text}
      </div>
    )
}
