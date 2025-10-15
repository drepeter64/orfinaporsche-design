import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { FinishItem } from "@/shared/types/reference-detail.interface"

export const FinishItemSection: React.FC<FinishItemSectionProps> = ({ data }) => {
  const tCommon = useTranslations("Common")
  const { title, description, color, year } = data

  return (
    <div className="space-y-6 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-black">{title}</h3>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{description}</p>
        {year && (
          <p className="text-sm text-gray-600">
            <strong>{tCommon("production-year")}</strong> {year}
          </p>
        )}
      </div>
    </div>
  )
}

interface FinishItemSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: FinishItem
}
