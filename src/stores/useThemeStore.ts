import { create } from "zustand"

type ThemeState = {
  isDarkTheme: boolean
  toggleDarkTheme: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkTheme: false,
  toggleDarkTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
}))
