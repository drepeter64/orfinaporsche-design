import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ links }) => {
  const tCommon = useTranslations("Common")

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
          {links.map((item, index) => (
            <span key={index}>
              <span className="mx-2 text-gray-400">/</span>
              {item.link ? (
                <Link
                  href={item.link}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {item.text}
                </Link>
              ) : (
                <span className="text-black font-medium">{item.text}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  )
}

interface BreadcrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  links: ItemLink[]
}

interface ItemLink {
  text: string
  link?: string
}
