import { DetailedHTMLProps, HTMLAttributes } from "react"
import { useTranslations } from "next-intl"

export const PlaceholderImageSection: React.FC<BreadcrumbFinishesSectionProps> = ({ title }) => {
  const tCommon = useTranslations("Common")

  return (
    <div className="flex justify-center">
      <div className="max-w-xs w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1"></div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-500 p-6">
              <div className="text-sm font-medium mb-2">{tCommon("photo-coming-soon")}</div>
              <div className="text-xs">{title || ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface BreadcrumbFinishesSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
}
