import { create } from "zustand"

export const workspaceName = {
  ECOMMERCE: "eCommerce",
  RETAIL: "Custom Retail",
} as const

type WorkspaceState = {
  workspace: string
  setWorkspace: (workspace: string) => void
  isWorkspaceDisplayed: boolean
  toggleDisplayWorkspace: (workspace: boolean) => void
}

export const useWorkspaceStore = create<WorkspaceState>()((set) => ({
  workspace: workspaceName.RETAIL,
  setWorkspace: (workspace: string) => set({ workspace }),
  isWorkspaceDisplayed: false,
  toggleDisplayWorkspace: (isWorkspaceDisplayed: boolean) =>
    set({ isWorkspaceDisplayed }),
}))
