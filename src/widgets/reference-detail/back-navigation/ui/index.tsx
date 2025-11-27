import { DetailedHTMLProps, HTMLAttributes } from "react"
import { Link } from "@/app/localization"

export const BackNavigationSection: React.FC<BackNavigationSectionProps> = ({ title, route }) => {
  return (
    <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <Link
          href={route}
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
          {title}
        </Link>
      </div>
    </div>
  )
}

interface BackNavigationSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  route: string
}
