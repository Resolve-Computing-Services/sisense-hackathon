import { Outlet } from "react-router-dom"
import { useThemeStore } from "../stores/useThemeStore"
import Navbar from "../components/Navbar"
import Breadcrumbs from "../components/Breadcrumbs"
import Header from "./Header"
import Footer from "./Footer"

export default function MainLayout() {
  const { isDarkTheme } = useThemeStore()
  return (
    <>
      <div
        className={`
          w-full min-h-[100vh] font-noto flex flex-row
          ${
            isDarkTheme
              ? "bg-[#353739] text-white"
              : "bg-[#EDEEF1] text-slate-800"
          }
        `}
      >
        <aside>
          <Navbar />
        </aside>
        <div className="w-full md:w-[calc(100%-220px)]">
          <Header />
          <main className="w-full p-3">
            <Breadcrumbs />
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
