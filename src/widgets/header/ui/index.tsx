"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { ClientRoutes } from "@/shared/routes"
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

  const subDropdownIds: number[] = useMemo(() => references.map((item) => item.route), [references])

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
  const isReferencesActive = pathname?.includes("/references")
  const isComponentsActive = pathname?.includes("/components")

  // Check if on home page (pathname is "/" or just the locale like "/en")
  const isHomePage = pathname === "/" || /^\/[a-z]{2}(-[A-Z]{2})?\/?$/.test(pathname || "")

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
  }, [pathname, subDropdownIds])

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
    <nav className={`sticky top-0 z-50 bg-stone-100 ${isHomePage ? "shadow-md" : ""}`}>
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Logo with Watch Image */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Watch Image - Left of Text (visible on all screen sizes) */}
            <Link href={ClientRoutes.home}>
              <Image
                src={pc_logo}
                alt={logo_alt}
                width={80}
                height={80}
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 object-contain cursor-pointer"
                priority
              />
            </Link>

            {/* Text Logo */}
            <Link href={ClientRoutes.home}>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl text-black tracking-widest whitespace-nowrap cursor-pointer">
                <span className="hidden sm:inline">{tCommon("store_name")}</span>
                <span className="sm:hidden">{tCommon("short_store_name")}</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-left items-center px-12 space-x-8 xl:space-x-12">
            <Link
              href={ClientRoutes.story}
              className={`group py-2 px-1 font-normal text-sm xl:text-base uppercase tracking-wider transition-all duration-300 hover:text-gray-600 cursor-pointer ${
                isActive(ClientRoutes.story) ? "text-black" : "text-gray-700"
              }`}
            >
              <span
                className={`bg-gradient-to-r from-current to-current bg-no-repeat bg-bottom transition-all duration-300 ${
                  isActive(ClientRoutes.story)
                    ? "bg-[length:100%_1px]"
                    : "bg-[length:0%_1px] group-hover:bg-[length:100%_1px]"
                }`}
              >
                {tCommon("story")}
              </span>
            </Link>

            <div
              className="relative"
              ref={referencesRef}
            >
              <Link
                href={ClientRoutes.reference_guide}
                className={`flex items-center py-2 px-1 font-normal text-sm xl:text-base uppercase tracking-wider hover:text-black transition-all duration-200 group ${
                  isReferencesActive ? "text-black" : "text-gray-700"
                }`}
                onClick={(e) => {
                  setReferencesOpen((open) => !open)
                  // If already on references page, prevent navigation to keep dropdown visible
                  if (isReferencesActive) {
                    e.preventDefault()
                  }
                }}
              >
                <span
                  className={`transition-all duration-300 bg-gradient-to-r from-current to-current bg-no-repeat bg-bottom ${
                    isReferencesActive
                      ? "bg-[length:100%_1px]"
                      : "bg-[length:0%_1px] group-hover:bg-[length:100%_1px]"
                  }`}
                >
                  {tCommon("references")}
                </span>
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    referencesOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {referencesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-stone-50 shadow-2xl border border-gray-200 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <div>
                    <Link
                      href={ClientRoutes.reference_guide}
                      className="block px-4 py-3 font-medium text-sm text-stone-600 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer border-b border-gray-200"
                    >
                      {tCommon("reference_guide")}
                    </Link>
                    {references.map(({ title, route, dropdown }: IMenuReference, index) => (
                      <div
                        key={index}
                        className="relative"
                        onMouseEnter={() => handleSubDropdownEnter(route)}
                        onMouseLeave={() => handleSubDropdownLeave(route)}
                      >
                        <Link
                          href={ClientRoutes.reference(route.toString())}
                          className="flex items-center justify-between px-4 py-3 hover:bg-stone-100 transition-colors duration-200 font-medium text-sm text-stone-600 hover:text-stone-800 cursor-pointer"
                        >
                          <span>{title}</span>
                          <ChevronRight className="w-4 h-4 text-stone-400" />
                        </Link>
                        {refOpen[route] && (
                          <div
                            className="absolute left-full top-0 ml-1 w-48 bg-stone-50 shadow-2xl border border-gray-200 z-[60] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                            onMouseEnter={() => handleSubDropdownEnter(route)}
                            onMouseLeave={() => handleSubDropdownLeave(route)}
                          >
                            <div>
                              {dropdown &&
                                dropdown.map(({ title, type }, idx) => (
                                  <Link
                                    key={idx}
                                    href={getReferenceRoute(type, route.toString())}
                                    className="block px-4 py-3 text-sm text-gray-600 hover:text-black hover:bg-stone-100 transition-colors cursor-pointer"
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
                className={`flex items-center py-2 px-1 font-normal text-sm xl:text-base uppercase tracking-wider hover:text-black transition-all duration-200 group ${
                  isComponentsActive ? "text-black" : "text-gray-700"
                }`}
                onClick={() => setComponentsOpen((open) => !open)}
                aria-expanded={componentsOpen}
                aria-haspopup="true"
              >
                <span
                  className={`transition-all duration-300 bg-gradient-to-r from-current to-current bg-no-repeat bg-bottom ${
                    isComponentsActive
                      ? "bg-[length:100%_1px]"
                      : "bg-[length:0%_1px] group-hover:bg-[length:100%_1px]"
                  }`}
                >
                  {tCommon("components")}
                </span>
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    componentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {componentsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-stone-50 shadow-2xl border border-gray-200 z-50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200">
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
                          className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-stone-100 hover:text-black transition-all duration-200 cursor-pointer"
                          href={ClientRoutes.components(route)}
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
              className={`group py-2 px-1 font-normal text-sm xl:text-base uppercase tracking-wider transition-all duration-300 hover:text-black cursor-pointer ${
                isActive(ClientRoutes.about) ? "text-black" : "text-gray-700"
              }`}
            >
              <span
                className={`bg-gradient-to-r from-current to-current bg-no-repeat bg-bottom transition-all duration-300 ${
                  isActive(ClientRoutes.about)
                    ? "bg-[length:100%_1px]"
                    : "bg-[length:0%_1px] group-hover:bg-[length:100%_1px]"
                }`}
              >
                {tCommon("about")}
              </span>
            </Link>
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
        <div className="lg:hidden bg-stone-100 border-t border-gray-200 shadow-lg animate-in slide-in-from-top-2 duration-200">
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
              <div className="flex items-center justify-between">
                <Link
                  href={ClientRoutes.reference_guide}
                  className="flex-1 py-3 px-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors touch-manipulation rounded-l-md"
                >
                  {tCommon("references")}
                </Link>
                <button
                  className="py-3 px-4 text-gray-700 hover:text-black hover:bg-gray-50 rounded-r-md transition-colors touch-manipulation"
                  onClick={handleMobileReferencesToggle}
                  aria-expanded={mobileReferencesOpen}
                  aria-label="Toggle references menu"
                >
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      mobileReferencesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

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
                        href={ClientRoutes.components(route)}
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
              <Link href={ClientRoutes.home}>
                <Image
                  src={mobile_logo}
                  alt={logo_alt}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain cursor-pointer"
                />
              </Link>
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
