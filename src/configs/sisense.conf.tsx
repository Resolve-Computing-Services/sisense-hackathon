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
      backgroundColor: "#00000000",
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
  const { isDarkTheme } = useThemeStore()
  return (
    <SisenseContextProvider {...SisenseContextProviderArgs()}>
      <ThemeProvider
        {...SisenseThemeProviderArgs(isDarkTheme, [
          "#ab62d0",
          "#963bc4",
          "#782f9d",
          "#5a2376",
        ])}
      >
        {children}
      </ThemeProvider>
    </SisenseContextProvider>
  )
}
