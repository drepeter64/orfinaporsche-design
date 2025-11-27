import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { ReferenceData } from "@/shared/types"

export const BreadcrumbSection: React.FC<BreadcrumbsProps> = ({ data }) => {
  const tCommon = useTranslations("Common")
  const { referenceNumber } = data

  return (
    <div className="bg-gray-50 py-4 border-b border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <nav className="text-sm">
          <Link
            href={ClientRoutes.home}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            {tCommon("home")}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-600">{tCommon("references")}</span>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-900 font-medium">
            {tCommon("reference")} {referenceNumber}
          </span>
        </nav>
      </div>
    </div>
  )
}

interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
}
