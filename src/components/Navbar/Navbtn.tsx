import { Link, useLocation } from "react-router-dom"
import { useThemeStore } from "../../stores/useThemeStore"
import { IconDashboard, IconDollar, IconInsights, IconUser } from "../Icons"

export type NavbtnProps = {
  path: string
  text: string
  description?: string
  onClick?: () => void
}

export default function Navbtn({
  path,
  text,
  description,
  onClick,
}: NavbtnProps) {
  const { pathname } = useLocation()
  const { isDarkTheme } = useThemeStore()

  const NavIcon = () => {
    switch (path) {
      case "/":
        return <IconDashboard width={18} height={18} />
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

  return (
    <Link
      to={path}
      title={description}
      onClick={onClick}
      className={`
        w-[220px] p-3 py-2
        ${pathname === path ? (isDarkTheme ? "bg-[#222240]" : "bg-zinc-300") : ""}
        ${isDarkTheme ? "hover:bg-[#782f9d] text-white" : "hover:bg-[#ab62d0] text-black"}
      `}
    >
      <li className="flex flex-row items-start gap-2">
        <div className="mt-1">
          <NavIcon />
        </div>
        <div className="flex flex-col gap-1 w-[160px]">
          <span className="font-bold">{text}</span>
          <span
            className={`text-xs ${isDarkTheme ? "text-gray-400" : "text-gray-700"}`}
          >
            {description}
          </span>
        </div>
      </li>
    </Link>
  )
}
