import React from "react"
import { ILayoutProps } from "./props"
import Image from "next/image"
import { header } from "@/shared/data"
import { useTranslations } from "next-intl"

export const LoginLayout: React.FC<ILayoutProps> = ({ children }) => {
  const tCommon = useTranslations("Common")
  const { pc_logo, logo_alt } = header
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-background border-b border-gray-200">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-black tracking-wide whitespace-nowrap">
              <span className="hidden sm:inline">{tCommon("store_name")}</span>
              <span className="sm:hidden">{tCommon("short_store_name")}</span>
            </div>

            {/* Desktop Logo */}
            <div className="hidden lg:block">
              <Image
                src={pc_logo}
                alt={logo_alt}
                width={80}
                height={80}
                className="w-16 h-16 xl:w-20 xl:h-20 object-contain transform translate-x-[-150%] translate-y-0"
                priority
              />
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
