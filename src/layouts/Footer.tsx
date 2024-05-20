import { useThemeStore } from "../stores/useThemeStore"
import { IconGithub } from "../components/Icons"
import { AUTHOR } from "../configs/brand.config"

export default function Footer() {
  const { isDarkTheme } = useThemeStore()
  return (
    <footer
      className={`
        flex flex-row items-center justify-between p-2 px-4 mt-3
        ${isDarkTheme ? "bg-[#eee] text-black" : "bg-[#303030] text-[#eee]"}
      `}
    >
      <span>
        {AUTHOR} &copy; {new Date().getFullYear()}
      </span>
      <div className="select-none">
        <a
          title="Visit GitHub Repo"
          href="https://github.com/Resolve-Computing-Services/sisense-hackathon"
          target="_blank"
          className={`
          flex flex-row gap-1 items-center cursor-pointer p-2 rounded-md
          ${isDarkTheme ? "hover:bg-neutral-400" : "hover:bg-neutral-600"}
        `}
        >
          <IconGithub width={24} height={24} className="animate-pulse" />
          <span className="hidden md:block text-sm">GitHub</span>
        </a>
      </div>
    </footer>
  )
}
