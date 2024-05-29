import React from "react"
import { SisenseContextProvider, ThemeProvider } from "@sisense/sdk-ui"
import { useThemeStore } from "../stores/useThemeStore"

type SisenseProviderProps = {
  children: React.ReactNode
}

const SisenseContextProviderArgs = () => {
  const baseOptions = {
    url: import.meta.env.VITE_APP_SISENSE_URL,
    defaultDataSource: "Sample ECommerce",
    appConfig: {
      queryCacheConfig: { enabled: true },
    },
  }
  const wat = import.meta.env.VITE_APP_SISENSE_WAT
  const token = import.meta.env.VITE_APP_SISENSE_API_TOKEN
  const ssoEnabled = import.meta.env.VITE_APP_SISENSE_SSO_ENABLED as string

  if (ssoEnabled) {
    return { ...baseOptions, ssoEnabled: ssoEnabled.toLowerCase() === "true" }
  } else if (wat) {
    return { ...baseOptions, wat }
  } else if (token) {
    return { ...baseOptions, token }
  } else {
    return baseOptions
  }
}

const SisenseThemeProviderArgs = (isDarkTheme: boolean, palette: string[]) => ({
  theme: {
    chart: {
      backgroundColor: "transparent",
      textColor: isDarkTheme ? "#ffffff" : "#1e293b",
    },
    palette: {
      variantColors: palette,
    },
    typography: {
      fontFamily: "Noto Sans",
    },
  },
})

export default function SisenseProvider({ children }: SisenseProviderProps) {
  const { isDarkTheme, colorPalette } = useThemeStore()
  const palette =
    colorPalette === 0
      ? ["#00A7E1", "#007EA7", "#003459", "#003535"]
      : colorPalette === 1
        ? ["#ab62d0", "#963bc4", "#782f9d", "#5a2376"]
        : []

  return (
    <SisenseContextProvider {...SisenseContextProviderArgs()}>
      <ThemeProvider {...SisenseThemeProviderArgs(isDarkTheme, palette)}>
        {children}
      </ThemeProvider>
    </SisenseContextProvider>
  )
}
