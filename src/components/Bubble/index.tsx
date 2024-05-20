import React from "react"

interface BubbleProps {
  isOpen?: boolean
  children: React.ReactNode
}

export default function Bubble({ isOpen = false, children }: BubbleProps) {
  return (
    <div
      className={
        isOpen
          ? `absolute right-0 mt-[20px] p-3 z-[90]
             min-w-[150px] rounded-md shadow-lg text-sm
           bg-white text-black shadow-gray-300`
          : "hidden"
      }
    >
      <div
        className={`
          absolute -mt-[28px] right-[10px] mx-auto h-0 w-0 
          border-r-[8px] border-b-[25px] border-l-[8px] 
          border-solid border-r-transparent border-l-transparent border-b-white
        `}
      ></div>
      {children}
    </div>
  )
}
