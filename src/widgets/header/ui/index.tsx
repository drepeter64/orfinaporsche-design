"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { ClientRoutes } from "@/shared/routes"

export const Header = () => {
  const router = useRouter()

  const [referencesOpen, setReferencesOpen] = useState(false)
  const [componentsOpen, setComponentsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileReferencesOpen, setMobileReferencesOpen] = useState(false)
  const [mobileComponentsOpen, setMobileComponentsOpen] = useState(false)

  // Sub-dropdown states
  const [ref7750Open, setRef7750Open] = useState(false)
  const [ref7176Open, setRef7176Open] = useState(false)
  const [ref7177Open, setRef7177Open] = useState(false)

  // Timeout refs for delayed closing
  const ref7750TimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ref7176TimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const ref7177TimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const pathname = usePathname()
  const referencesRef = useRef<HTMLDivElement>(null)
  const componentsRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => pathname === path

  // Helper functions for sub-dropdown hover management
  const handleSubDropdownEnter = (
    setOpen: (open: boolean) => void,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setOpen(true)
  }

  const handleSubDropdownLeave = (
    setOpen: (open: boolean) => void,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
  ) => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
    }, 200)
  }

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (referencesRef.current && !referencesRef.current.contains(event.target as Node)) {
        setReferencesOpen(false)
        setRef7750Open(false)
        setRef7176Open(false)
        setRef7177Open(false)
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
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setReferencesOpen(false)
    setComponentsOpen(false)
    setMobileReferencesOpen(false)
    setMobileComponentsOpen(false)
    setRef7750Open(false)
    setRef7176Open(false)
    setRef7177Open(false)

    // Clear any pending timeouts
    if (ref7750TimeoutRef.current) clearTimeout(ref7750TimeoutRef.current)
    if (ref7176TimeoutRef.current) clearTimeout(ref7176TimeoutRef.current)
    if (ref7177TimeoutRef.current) clearTimeout(ref7177TimeoutRef.current)
  }, [pathname])

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Close desktop dropdowns when opening mobile menu
    setReferencesOpen(false)
    setComponentsOpen(false)
    setRef7750Open(false)
    setRef7176Open(false)
    setRef7177Open(false)
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
          <div
            onClick={() => router.push(ClientRoutes.home)}
            className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-black tracking-wide whitespace-nowrap cursor-pointer"
          >
            <span className="hidden sm:inline">ORFINA PORSCHE DESIGN</span>
            <span className="sm:hidden">OPD</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8 xl:space-x-12">
            <div
              onClick={() => router.push(ClientRoutes.story)}
              className={`font-normal text-sm xl:text-base uppercase tracking-wider transition-colors hover:text-gray-600 cursor-pointer ${
                isActive(ClientRoutes.story) ? "text-black" : "text-gray-700"
              }`}
            >
              Story
            </div>

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
                References
                <ChevronDown
                  className={`ml-1 w-3 h-3 transition-transform duration-300 ${
                    referencesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {referencesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-gray-200 rounded-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <div className="py-2">
                    {/* Reference 7750 */}
                    <div className="relative">
                      <div
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        onMouseEnter={() =>
                          handleSubDropdownEnter(setRef7750Open, ref7750TimeoutRef)
                        }
                        onMouseLeave={() =>
                          handleSubDropdownLeave(setRef7750Open, ref7750TimeoutRef)
                        }
                      >
                        <div
                          onClick={() => router.push(ClientRoutes.references.ref7750.main)}
                          className="font-medium text-sm text-black hover:text-gray-600 transition-colors flex-1 cursor-pointer"
                        >
                          Reference 7750
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>

                      {ref7750Open && (
                        <div
                          className="absolute left-full top-0 ml-1 w-48 bg-white shadow-2xl border border-gray-200 rounded-lg z-[60] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                          onMouseEnter={() =>
                            handleSubDropdownEnter(setRef7750Open, ref7750TimeoutRef)
                          }
                          onMouseLeave={() =>
                            handleSubDropdownLeave(setRef7750Open, ref7750TimeoutRef)
                          }
                        >
                          <div className="py-2">
                            <div
                              onClick={() =>
                                router.push(ClientRoutes.references.ref7750.caseFinishes)
                              }
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Case & Finishes
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7750.caseback)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Caseback
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7750.rehaut)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Rehaut Variations
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7750.dial)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Dial Variations
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Reference 7176 */}
                    <div className="relative">
                      <div
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        onMouseEnter={() =>
                          handleSubDropdownEnter(setRef7176Open, ref7176TimeoutRef)
                        }
                        onMouseLeave={() =>
                          handleSubDropdownLeave(setRef7176Open, ref7176TimeoutRef)
                        }
                      >
                        <div
                          onClick={() => router.push(ClientRoutes.references.ref7176.main)}
                          className="font-medium text-sm text-black hover:text-gray-600 transition-colors flex-1 cursor-pointer"
                        >
                          Reference 7176
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>

                      {ref7176Open && (
                        <div
                          className="absolute left-full top-0 ml-1 w-48 bg-white shadow-2xl border border-gray-200 rounded-lg z-[60] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                          onMouseEnter={() =>
                            handleSubDropdownEnter(setRef7176Open, ref7176TimeoutRef)
                          }
                          onMouseLeave={() =>
                            handleSubDropdownLeave(setRef7176Open, ref7176TimeoutRef)
                          }
                        >
                          <div className="py-2">
                            <div
                              onClick={() =>
                                router.push(ClientRoutes.references.ref7176.caseFinishes)
                              }
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Case & Finishes
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7176.caseback)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Caseback
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7176.rehaut)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Rehaut Variations
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7176.dial)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Dial Variations
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Reference 7177 */}
                    <div className="relative">
                      <div
                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        onMouseEnter={() =>
                          handleSubDropdownEnter(setRef7177Open, ref7177TimeoutRef)
                        }
                        onMouseLeave={() =>
                          handleSubDropdownLeave(setRef7177Open, ref7177TimeoutRef)
                        }
                      >
                        <div
                          onClick={() => router.push(ClientRoutes.references.ref7177.main)}
                          className="font-medium text-sm text-black hover:text-gray-600 transition-colors flex-1 cursor-pointer"
                        >
                          Reference 7177
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>

                      {ref7177Open && (
                        <div
                          className="absolute left-full top-0 ml-1 w-48 bg-white shadow-2xl border border-gray-200 rounded-lg z-[60] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-200"
                          onMouseEnter={() =>
                            handleSubDropdownEnter(setRef7177Open, ref7177TimeoutRef)
                          }
                          onMouseLeave={() =>
                            handleSubDropdownLeave(setRef7177Open, ref7177TimeoutRef)
                          }
                        >
                          <div className="py-2">
                            <div
                              onClick={() =>
                                router.push(ClientRoutes.references.ref7177.caseFinishes)
                              }
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Case & Finishes
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7177.caseback)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Caseback
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7177.rehaut)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Rehaut Variations
                            </div>
                            <div
                              onClick={() => router.push(ClientRoutes.references.ref7177.dial)}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              Dial Variations
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
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
                Components
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
                        Watch Components
                      </h3>
                    </div>

                    <div className="px-4 py-2">
                      <div
                        onClick={() => router.push(ClientRoutes.components.bracelets)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Bracelets</span>
                      </div>

                      <div
                        onClick={() => router.push(ClientRoutes.components.straps)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Bund Straps</span>
                      </div>

                      <div
                        onClick={() => router.push(ClientRoutes.components.hands)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Hands</span>
                      </div>

                      <div
                        onClick={() => router.push(ClientRoutes.components.crowns)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Crowns</span>
                      </div>

                      <div
                        onClick={() => router.push(ClientRoutes.components.movements)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Movements</span>
                      </div>

                      <div
                        onClick={() => router.push(ClientRoutes.components.dateWheels)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Date Wheels</span>
                      </div>

                      <div
                        onClick={() => router.push(ClientRoutes.components.boxes)}
                        className="group flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black rounded-md transition-all duration-200 cursor-pointer"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="font-medium">Boxes</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => router.push(ClientRoutes.about)}
              className={`font-normal text-sm xl:text-base uppercase tracking-wider transition-colors hover:text-black cursor-pointer ${
                isActive(ClientRoutes.about) ? "text-black" : "text-gray-700"
              }`}
            >
              About
            </div>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:block">
            <Image
              onClick={() => router.push(ClientRoutes.home)}
              src="/lovable-uploads/opd-watch.png"
              alt="OPD Watch Logo"
              width={80}
              height={80}
              className="w-16 h-16 xl:w-20 xl:h-20 object-contain cursor-pointer"
              priority
            />
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
            <div
              onClick={() => router.push(ClientRoutes.story)}
              className={`block py-3 px-4 text-base font-medium rounded-md transition-colors touch-manipulation cursor-pointer ${
                isActive(ClientRoutes.story)
                  ? "text-black bg-gray-100"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
            >
              Story
            </div>

            {/* Mobile References Section */}
            <div className="space-y-2">
              <button
                className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md transition-colors touch-manipulation"
                onClick={handleMobileReferencesToggle}
                aria-expanded={mobileReferencesOpen}
                aria-label="Toggle references menu"
              >
                References
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileReferencesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileReferencesOpen && (
                <div className="pl-4 space-y-2 bg-gray-50 rounded-md py-3 animate-in slide-in-from-top-1 duration-200">
                  <div
                    onClick={() => router.push(ClientRoutes.references.ref7750.main)}
                    className="block py-3 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                  >
                    Reference 7750
                  </div>

                  <div
                    onClick={() => router.push(ClientRoutes.references.ref7176.main)}
                    className="block py-3 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                  >
                    Reference 7176
                  </div>

                  <div
                    onClick={() => router.push(ClientRoutes.references.ref7177.main)}
                    className="block py-3 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                  >
                    Reference 7177
                  </div>

                  <div
                    onClick={() => router.push("/references/prototypes")}
                    className="block py-3 px-3 text-sm font-medium text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                  >
                    Prototypes
                  </div>
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
                Components
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    mobileComponentsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileComponentsOpen && (
                <div className="pl-4 space-y-2 bg-gray-50 rounded-md py-3 animate-in slide-in-from-top-1 duration-200">
                  <div className="grid grid-cols-2 gap-2">
                    <div
                      onClick={() => router.push(ClientRoutes.components.bracelets)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Bracelets
                    </div>
                    <div
                      onClick={() => router.push(ClientRoutes.components.straps)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Bund Straps
                    </div>
                    <div
                      onClick={() => router.push(ClientRoutes.components.hands)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Hands
                    </div>
                    <div
                      onClick={() => router.push(ClientRoutes.components.crowns)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Crowns
                    </div>
                    <div
                      onClick={() => router.push(ClientRoutes.components.movements)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Movements
                    </div>
                    <div
                      onClick={() => router.push(ClientRoutes.components.dateWheels)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Date Wheels
                    </div>
                    <div
                      onClick={() => router.push(ClientRoutes.components.boxes)}
                      className="block py-3 px-3 text-sm text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-colors touch-manipulation cursor-pointer"
                    >
                      Boxes
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              onClick={() => router.push(ClientRoutes.about)}
              className={`block py-3 px-4 text-base font-medium rounded-md transition-colors touch-manipulation cursor-pointer ${
                isActive(ClientRoutes.about)
                  ? "text-black bg-gray-100"
                  : "text-gray-700 hover:text-black hover:bg-gray-50"
              }`}
            >
              About
            </div>

            {/* Mobile Logo */}
            <div className="pt-4 border-t border-gray-200 flex justify-center">
              <Image
                onClick={() => router.push(ClientRoutes.home)}
                src="/lovable-uploads/opd-watch.png"
                alt="OPD Watch Logo"
                width={64}
                height={64}
                className="w-16 h-16 object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Header
