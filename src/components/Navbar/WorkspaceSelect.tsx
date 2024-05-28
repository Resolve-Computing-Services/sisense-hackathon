import { useNavigate } from "react-router-dom"
import { useThemeStore } from "../../stores/useThemeStore"
import {
  useWorkspaceStore,
  workspaceName,
} from "../../stores/useWorkspaceStore"
import { IconArrowRight } from "../Icons"

export default function WorkspaceSelect() {
  const navigate = useNavigate()
  const { isDarkTheme } = useThemeStore()
  const {
    workspace,
    setWorkspace,
    isWorkspaceDisplayed,
    toggleDisplayWorkspace,
  } = useWorkspaceStore()
  return (
    <div
      title="Change your workspace..."
      className={`
        flex flex-row items-center justify-between cursor-pointer
        relative mx-3 mb-3 p-2 py-1 rounded-lg border border-[#9ca3af] 
      `}
      onClick={() => toggleDisplayWorkspace(!isWorkspaceDisplayed)}
    >
      <div className={"flex flex-col gap-0"}>
        <span className={"text-xs text-[#9ca3af]"}>
          {isWorkspaceDisplayed ? "Change Workspace..." : "Workspace"}
        </span>
        <span className="text-[#F7931D]">{workspace}</span>
      </div>
      <div className={isWorkspaceDisplayed ? "-rotate-90" : "rotate-90"}>
        <IconArrowRight
          width={16}
          height={16}
          color={isWorkspaceDisplayed ? "#9ca3af" : "#F7931D"}
        />
      </div>

      {isWorkspaceDisplayed ? (
        <div
          className={`
            absolute w-[220px] mt-[160px] ml-[8px] z-[2001] 
            flex flex-col gap-2 p-1 rounded-lg shadow-2xl
            ${isDarkTheme ? "bg-[#151530]" : "bg-[#ffffff]"}
          `}
        >
          {[workspaceName.ECOMMERCE, workspaceName.RETAIL].map(
            (space: string) => (
              <div
                key={space}
                className={`
                  p-2 px-3 rounded-md cursor-pointer
                  ${isDarkTheme ? "hover:bg-gray-700" : "hover:bg-gray-400"}
                `}
                onClick={() => {
                  if (workspace !== space) {
                    setWorkspace(space)
                    navigate("/", { replace: true })
                  }
                  toggleDisplayWorkspace(false)
                }}
              >
                {space}{" "}
                {workspace === space && (
                  <span className="text-xs text-[#F7931D]">Selected</span>
                )}
              </div>
            )
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
