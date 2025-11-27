"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { header } from "@/shared/data"

export const Footer = () => {
  const tCommon = useTranslations("Common")
  const { pc_logo, logo_alt } = header

  const navLinks = [
    { href: ClientRoutes.story, label: tCommon("story") },
    { href: "/references", label: tCommon("references") },
    { href: "/components", label: tCommon("components") },
    { href: ClientRoutes.about, label: tCommon("about") },
  ]

  return (
    <footer className="w-full bg-background border-t border-gray-100 mt-auto">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
        {/* Title */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-black tracking-widest mb-8 lg:mb-12">
          {tCommon("store_name")}
        </h2>

        {/* Content Container */}
        <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-16">
          {/* Watch Image */}
          <div className="flex-shrink-0">
            <Link href={ClientRoutes.home}>
              <Image
                src={pc_logo}
                alt={logo_alt}
                width={180}
                height={180}
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 object-contain"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit text-sm lg:text-base font-normal text-gray-700 hover:text-black uppercase tracking-wider transition-all duration-300 cursor-pointer bg-gradient-to-r from-current to-current bg-no-repeat bg-bottom pt-0.5 pb-0.5 bg-[length:0%_1px] hover:bg-[length:100%_1px]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Divider */}
        <div className="mt-12 lg:mt-16 border-t border-neutral-200" />
      </div>
    </footer>
  )
}

export default Footer
