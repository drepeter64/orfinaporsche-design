"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { header } from "@/shared/data"

export const Footer = () => {
  const tCommon = useTranslations("Common")
  const { pc_logo, logo_alt, components = [], references = [] } = header

  const columns = [
    { heading: tCommon("story"), headingHref: ClientRoutes.story },
    {
      heading: tCommon("references"),
      items: references.map((reference) => ({
        label: reference.title,
        href: ClientRoutes.reference(String(reference.route)),
      })),
    },
    {
      heading: tCommon("components"),
      items: components.map((component) => ({
        label: component.title,
        href: ClientRoutes.components(component.route),
      })),
    },
    { heading: tCommon("about"), headingHref: ClientRoutes.about },
  ]

  return (
    <footer className="w-full bg-background border-t border-gray-100 mt-auto">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-8 lg:px-20 py-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:gap-12">
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-black tracking-widest whitespace-nowrap">
            {tCommon("store_name")}
          </h2>

          <div className="flex flex-col gap-10 lg:gap-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
              <Link
                href={ClientRoutes.home}
                className="flex-shrink-0"
              >
                <Image
                  src={pc_logo}
                  alt={logo_alt}
                  width={180}
                  height={180}
                  className="w-28 h-28 sm:w-32 sm:h-32 lg:w-[148px] lg:h-[148px] object-contain"
                />
              </Link>

              <nav
                aria-label="Footer navigation"
                className="w-full max-w-4xl flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-x-6 sm:gap-y-6 lg:gap-x-8"
              >
                {columns.map((column) => (
                  <FooterColumn
                    key={column.heading}
                    {...column}
                  />
                ))}
              </nav>
            </div>
          </div>

          <div className="border-t border-gray-200" />
        </div>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  heading: string
  headingHref?: string
  items?: { label: string; href?: string }[]
}

const FooterColumn = ({ heading, headingHref, items }: FooterColumnProps) => {
  const hasItems = items && items.length > 0

  return (
    <div className="flex flex-col gap-3 min-w-[140px]">
      {headingHref ? (
        <Link
          href={headingHref}
          className="w-fit text-sm font-medium uppercase tracking-[0.08em] text-black hover:text-neutral-900 transition-colors"
        >
          {heading}
        </Link>
      ) : (
        <span
          aria-disabled
          className="w-fit text-sm font-medium uppercase tracking-[0.08em] text-black"
        >
          {heading}
        </span>
      )}
      {hasItems && (
        <ul className="flex flex-col gap-2">
          {items!.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm text-[#7A716A] hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-sm text-[#7A716A]">{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Footer
