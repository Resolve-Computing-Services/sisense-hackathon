import React from "react"
import { SisenseContextProvider, ThemeProvider } from "@sisense/sdk-ui"
import { useThemeStore, colorPalettes } from "../stores/useThemeStore"

type SisenseProviderProps = {
  children: React.ReactNode
}

// Configure arguments for <SisenseContextProvider />
// Including Sisense URL, auth tokens and app configs
const SisenseContextProviderArgs = () => {
  const baseOptions = {
    url: import.meta.env.VITE_APP_SISENSE_URL, // sisense url
    defaultDataSource: "Sample ECommerce",
    appConfig: {
      queryCacheConfig: { enabled: true }, // load data and save in cache
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

// Configure arguments for <SisenseThemeProvider />
// Including chart styling, color palette and typography
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

// SisenseProvider:
// Fetch theme configs from useThemeStore() and configure arguments accordingly
export default function SisenseProvider({ children }: SisenseProviderProps) {
  const { isDarkTheme, colorPalette } = useThemeStore()
  const palette =
    colorPalette === colorPalettes.DEFAULT
      ? ["#00A7E1", "#007EA7", "#003459", "#003535"]
      : colorPalette === colorPalettes.BRAND
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
