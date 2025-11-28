"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"

export const CaseCard: React.FC<CaseCardProps> = ({
  title,
  subtitle,
  subtitle2,
  className = "",
}) => {
  return (
    <div
      className={`bg-stone-50 flex flex-col gap-2 items-start px-8 py-10 flex-1 min-w-0 ${className}`}
    >
      <p className="text-2xl text-stone-900 tracking-[-0.01em] leading-normal">{title}</p>
      {subtitle && <p className="text-base text-neutral-400 tracking-[-0.01em]">{subtitle}</p>}
      {subtitle2 && <p className="text-base text-neutral-400 tracking-[-0.01em]">{subtitle2}</p>}
    </div>
  )
}

interface CaseCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  subtitle?: string
  subtitle2?: string
}
