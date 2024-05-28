import { create } from "zustand"

export const colorPalettes = {
  DEFAULT: 0,
  BRAND: 1,
} as const

type ThemeState = {
  isDarkTheme: boolean
  toggleDarkTheme: () => void
  colorPalette: number
  setColorPalette: () => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  isDarkTheme: false,
  toggleDarkTheme: () => set((state) => ({ isDarkTheme: !state.isDarkTheme })),
  colorPalette: colorPalettes.DEFAULT,
  setColorPalette: () =>
    set((state) => ({ colorPalette: (state.colorPalette + 1) % 2 })),
}))
