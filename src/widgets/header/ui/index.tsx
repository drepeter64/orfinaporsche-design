"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { ClientRoutes, getRoute } from "@/shared/routes"
import { useTranslations } from "next-intl"
import { header } from "@/shared/data"
import { Link } from "@/app/localization"
import { getReferenceRoute } from "@/shared/routes/client"

export const Header = () => {
  const tCommon = useTranslations("Common")
  const { pc_logo, mobile_logo, logo_alt, components, references } = header

  const [referencesOpen, setReferencesOpen] = useState(false)
  const [componentsOpen, setComponentsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileReferencesOpen, setMobileReferencesOpen] = useState(false)
  const [mobileComponentsOpen, setMobileComponentsOpen] = useState(false)

  const subDropdownIds: number[] = references.map((item) => item.route)

  const initialState: Record<number, boolean> = subDropdownIds.reduce(
    (acc, id) => {
      acc[id] = false
      return acc
    },
    {} as Record<number, boolean>,
  )

  const [refOpen, setRefOpen] = useState<{ [key: number]: boolean }>(initialState)

  const refTimeoutRef = useRef<{ [key: number]: NodeJS.Timeout | null }>({})

  function handleSubDropdownEnter(id: number) {
    if (refTimeoutRef.current[id]) {
      clearTimeout(refTimeoutRef.current[id] || undefined)
      refTimeoutRef.current[id] = null
    }
    setRefOpen((prev) => ({ ...prev, [id]: true }))
  }

  function handleSubDropdownLeave(id: number) {
    refTimeoutRef.current[id] = setTimeout(() => {
      setRefOpen((prev) => ({ ...prev, [id]: false }))
    }, 200)
  }

  const pathname = usePathname()
  const referencesRef = useRef<HTMLDivElement>(null)
  const componentsRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (referencesRef.current && !referencesRef.current.contains(event.target as Node)) {
        setReferencesOpen(false)
        setRefOpen(subDropdownIds.reduce((acc, id) => ({ ...acc, [id]: false }), {}))
      }
      if (componentsRef.current && !componentsRef.current.contains(event.target as Node)) {
        setComponentsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  })

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setReferencesOpen(false)
    setComponentsOpen(false)
    setMobileReferencesOpen(false)
    setMobileComponentsOpen(false)
    setRefOpen(subDropdownIds.reduce((acc, id) => ({ ...acc, [id]: false }), {}))

    // Clear any pending timeouts in one loop
    subDropdownIds.forEach((id) => {
      if (refTimeoutRef.current[id]) clearTimeout(refTimeoutRef.current[id] || undefined)
    })
  }, [pathname])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setReferencesOpen(false)
    setComponentsOpen(false)
    setRefOpen(subDropdownIds.reduce((acc, id) => ({ ...acc, [id]: false }), {}))
  }

  const handleMobileReferencesToggle = () => {
    setMobileReferencesOpen(!mobileReferencesOpen)
  }

  const handleMobileComponentsToggle = () => {
    setMobileComponentsOpen(!mobileComponentsOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo */}
          {isActive(ClientRoutes.home) ? (
            <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-black tracking-wide whitespace-nowrap">
              <span className="hidden sm:inline">{tCommon("store_name")}</span>
              <span className="sm:hidden">{tCommon("short_store_name")}</span>
            </div>
          ) : (
            <Link href={ClientRoutes.home}>
              <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-black tracking-wide whitespace-nowrap cursor-pointer">
                <span className="hidden sm:inline">{tCommon("store_name")}</span>
                <span className="sm:hidden">{tCommon("short_store_name")}</span>
              </div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 xl:space-x-12">
            <Link
              href={ClientRoutes.story}
              className={`font-normal text-sm xl:text-base uppercase tracking-wider transition-colors hover:text-gray-600 cursor-pointer ${
                isActive(ClientRoutes.story) ? "text-black" : "text-gray-700"
              }`}
            >
              {tCommon("story")}
            </Link>

            <div
              className="relative"
              ref={referencesRef}
            >
              <button
                className="flex items-center font-normal text-sm xl:text-base uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
                onClick={() => setReferencesOpen((open) => !open)}
                aria-expanded={referencesOpen}
                aria-haspopup="true"
              >
                {tCommon("references")}
                <ChevronDown
                  className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                    referencesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {referencesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="py-2">
                    {references.map(({ title, route, dropdown }: IMenuReference, index) => (
                      <div
                        key={index}
                        className="relative"
                      >
                        <div
                          className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                          onMouseEnter={() => handleSubDropdownEnter(route)}
                          onMouseLeave={() => handleSubDropdownLeave(route)}
                        >
                          <Link
                            href={ClientRoutes.reference(route.toString())}
                            className="font-medium text-sm text-black hover:text-gray-600 transition-colors flex-1 cursor-pointer"
                          >
                            {title}
                          </Link>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                        {refOpen[route] && (
                          <div
                            className="absolute left-full top-0 ml-1 w-48 bg-white shadow-2xl border border-gray-200 rounded-lg z-[60] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                            onMouseEnter={() => handleSubDropdownEnter(route)}
                            onMouseLeave={() => handleSubDropdownLeave(route)}
                          >
                            <div className="py-2">
                              {dropdown &&
                                dropdown.map(({ title, type }, idx) => (
                                  <Link
                                    key={idx}
                                    href={getReferenceRoute(type, route.toString())}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                                  >
                                    {title}
                                  </Link>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              ref={componentsRef}
            >
              <button
                className="flex items-center font-normal text-sm xl:text-base uppercase tracking-wider text-gray-700 hover:text-black transition-colors"
                onClick={() => setComponentsOpen((open) => !open)}
                aria-expanded={componentsOpen}
                aria-haspopup="true"
              >
                {tCommon("components")}
                <ChevronDown
                  className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                    componentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {componentsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="py-4">
                    <div className="px-6 py-2 border-b border-gray-100">
                      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {tCommon("watch-components")}
                      </h3>
                    </div>

                    <div className="px-4 py-2">
                      {components.map(({ title, route }, index) => (
                        <Link
                          key={index}
                          className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                          href={getRoute(route)}
                        >
                          <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                          <span className="font-medium">{title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href={ClientRoutes.about}
              className={`font-normal text-sm xl:text-base uppercase tracking-wider transition-colors hover:text-black cursor-pointer ${
                isActive(ClientRoutes.about) ? "text-black" : "text-gray-700"
              }`}
            >
              {tCommon("about")}
            </Link>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:block">
            {isActive(ClientRoutes.home) ? (
              <Image
                src={pc_logo}
                alt={logo_alt}
                width={80}
                height={80}
                className="w-16 h-16 xl:w-20 xl:h-20 object-contain"
                priority
              />
            ) : (
              <Link href={ClientRoutes.home}>
                <Image
                  src={pc_logo}
                  alt={logo_alt}
                  width={80}
                  height={80}
                  className="w-16 h-16 xl:w-20 xl:h-20 object-contain cursor-pointer"
                  priority
                />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 transition-colors touch-manipulation"
            onClick={handleMobileMenuToggle}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="px-4 py-4 space-y-4">
            <Link
              href={ClientRoutes.story}
              className={`block py-3 px-4 text-base font-medium rounded-md transition-colors touch-manipulation cursor-pointer ${
                isActive(ClientRoutes.story)
                  ? "text-black bg-gray-100"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
            >
              {tCommon("story")}
            </Link>

            {/* Mobile References Section */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors touch-manipulation"
                onClick={handleMobileReferencesToggle}
                aria-expanded={mobileReferencesOpen}
                aria-label="Toggle references menu"
              >
                {tCommon("references")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileReferencesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileReferencesOpen && (
                <div className="pl-4 space-y-2 bg-gray-50 rounded-md py-3 animate-in slide-in-from-top-1 duration-200">
                  {references.map(({ title, route }, index) => (
                    <Link
                      key={index}
                      href={ClientRoutes.reference(route.toString())}
                      className="block py-3 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      {title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Components Section */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors touch-manipulation"
                onClick={handleMobileComponentsToggle}
                aria-expanded={mobileComponentsOpen}
                aria-label="Toggle components menu"
              >
                {tCommon("components")}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileComponentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileComponentsOpen && (
                <div className="pl-4 space-y-2 bg-gray-50 rounded-md py-3 animate-in slide-in-from-top-1 duration-200">
                  <div className="grid grid-cols-2 gap-2">
                    {components.map(({ title, route }, index) => (
                      <Link
                        key={index}
                        className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                        href={getRoute(route)}
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              href={ClientRoutes.about}
              className={`block py-3 px-4 text-base font-medium rounded-md transition-colors touch-manipulation cursor-pointer ${
                isActive(ClientRoutes.about)
                  ? "text-black bg-gray-100"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
            >
              {tCommon("about")}
            </Link>

            {/* Mobile Logo */}
            <div className="pt-4 border-t border-gray-200 flex justify-center">
              {isActive(ClientRoutes.home) ? (
                <Image
                  src={mobile_logo}
                  alt={logo_alt}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain cursor-pointer"
                />
              ) : (
                <Link href={ClientRoutes.home}>
                  <Image
                    src={mobile_logo}
                    alt={logo_alt}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header

interface IMenuReference {
  title: string
  route: number
  dropdown?: IMenuReferenceDropdown[]
}

interface IMenuReferenceDropdown {
  title: string
  type: string
}
