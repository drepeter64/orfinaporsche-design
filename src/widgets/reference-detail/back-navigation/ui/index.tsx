import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"

export const BackNavigationSection: React.FC<BackNavigationSectionProps> = ({
  referenceId,
  referenceTitle,
}) => {
  const tCommon = useTranslations("Common")

  return (
    <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href={ClientRoutes.reference(referenceId)}
          className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
        >
          <svg
            className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {tCommon("back_to_refs")}&nbsp;{referenceTitle}
        </Link>
      </div>
    </div>
  )
}

interface BackNavigationSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  referenceId: string
  referenceTitle: string
}
