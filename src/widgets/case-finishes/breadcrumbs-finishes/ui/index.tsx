import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { CaseFinishesData } from "@/shared/types"

export const BreadcrumbFinishesSection: React.FC<BreadcrumbFinishesSectionProps> = ({ data }) => {
  const tCommon = useTranslations("Common")
  const { referenceId } = data

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-sm">
          <Link
            href={ClientRoutes.home}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {tCommon("home")}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link
            href={ClientRoutes.reference(referenceId)}
            className="text-gray-600 hover:text-black transition-colors"
          >
            {tCommon("reference")} {referenceId}
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-black font-medium">{tCommon("case-finishes")}</span>
        </nav>
      </div>
    </div>
  )
}

interface BreadcrumbFinishesSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: CaseFinishesData
}
