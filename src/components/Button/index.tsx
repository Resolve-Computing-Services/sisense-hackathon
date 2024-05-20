import React, { MouseEventHandler } from "react"
import { useThemeStore } from "../../stores/useThemeStore"

export type ButtonProps = {
  children: React.ReactNode
  isActive?: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  title?: string
}

export default function Button({
  children,
  isActive = false,
  onClick,
  title,
}: ButtonProps) {
  const { isDarkTheme } = useThemeStore()
  return (
    <button
      title={title}
      onClick={onClick}
      className={`
        p-2 rounded-md
        ${
          isActive
            ? "bg-blue-500 text-white hover:bg-blue-400"
            : isDarkTheme
              ? "bg-gray-50 text-black hover:bg-gray-300"
              : "bg-gray-600 text-white hover:bg-gray-400"
        }
      `}
    >
      {children}
    </button>
  )
}
