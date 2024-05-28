import { useLocation, Link } from "react-router-dom"
import { useWorkspaceStore } from "../../stores/useWorkspaceStore"
import { IconHouse, IconArrowRight } from "../Icons"
import { navRouter } from "../../routes"
import type { NavbtnProps } from "../Navbar/Navbtn"

export default function Breadcrumbs() {
  const { workspace } = useWorkspaceStore()
  const { pathname } = useLocation()
  const crumbs = pathname === "/" ? [""] : pathname.split("/")

  const getBreadCrumbText = (s: string) =>
    navRouter(workspace).map((route: NavbtnProps) => {
      if (s === route.path) return route.text
    })

  const getBreadCrumbLink = (crumbs: string[], i: number) => {
    if (i === 0) {
      return "/"
    }

    let result: string = ""
    crumbs.map((crumb: string, j: number) => {
      if (j > 0 && j <= i) {
        result += "/" + crumb
      }
    })
    return result
  }

  return (
    <div className="h-[18px] flex flex-row items-center gap-1 mb-2 mx-5 text-sm text-[#F7931D]">
      {crumbs.map((crumb: string, i: number) => {
        const url = getBreadCrumbLink(crumbs, i)
        return (
          <div key={i} className="flex flex-row items-center gap-1">
            {i < crumb.length - 1 ? (
              <IconArrowRight width={10} height={10} color={"#9ca3af"} />
            ) : (
              <></>
            )}
            <Link to={url}>
              {crumb !== "" ? (
                <span className="hover:underline">
                  {getBreadCrumbText(url)}
                </span>
              ) : (
                <IconHouse />
              )}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
