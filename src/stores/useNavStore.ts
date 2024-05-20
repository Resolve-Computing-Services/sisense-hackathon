import { create } from "zustand"

type NavState = {
  isSidebarActive: boolean
  toggleSidebar: (isSidebarActive: boolean) => void
}

export const useNavStore = create<NavState>()((set) => ({
  isSidebarActive: false,
  toggleSidebar: (isSidebarActive: boolean) => set({ isSidebarActive }),
}))
