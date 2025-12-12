"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"

// Helper function to bold "Mk. X" patterns in text
const formatMkText = (text: string) => {
  const parts = text.split(/(Mk\.\s*\d+)/g)
  return parts.map((part, index) => {
    if (/Mk\.\s*\d+/.test(part)) {
      return (
        <span
          key={index}
          className="font-semibold text-stone-500"
        >
          {part}
        </span>
      )
    }
    return part
  })
}

export const CaseCard: React.FC<CaseCardProps> = ({
  title,
  subtitle,
  subtitle2,
  className = "",
}) => {
  return (
    <div
      className={`bg-stone-50 flex rounded-none border border-stone-100 flex-col gap-2 items-start px-10 py-12 flex-1 min-w-0 ${className}`}
    >
      <p className="text-2xl text-stone-900 leading-normal">{title}</p>
      {subtitle && <p className="text-base text-stone-500">{formatMkText(subtitle)}</p>}
      {subtitle2 && <p className="text-base text-stone-500">{formatMkText(subtitle2)}</p>}
    </div>
  )
}

interface CaseCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  subtitle?: string
  subtitle2?: string
}
