import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData } from "@/shared/types"

export const BoxesBodySection: React.FC<BoxesBodySectionProps> = () => {
  // Return null to hide all content - page will only show "To Be Updated..." note
  return null
}

interface BoxesBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
}
