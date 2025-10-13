"use client"

import { useState } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import SectionHeading from "@/components/SectionHeading"

export function MovementsPage() {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null)

  const handleImageClick = (imageSrc: string) => {
    setFullScreenImage(imageSrc)
  }

  const handleCloseFullScreen = () => {
    setFullScreenImage(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              Movements
            </h1>
          </div>

          {/* Chuck's Quote */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                "The best car analogy I can find is the Valjoux 7750 and the Lemania 5100 are the
                Chevy 350 and the Ford 351-C of watches. Both are tried and true designs, nigh
                bulletproof when treated with a modicum of care, with outstanding parts availability
                and as common as dirt."
              </blockquote>
              <cite className="block mt-4 text-right text-gray-600 font-medium not-italic">
                - Chuck
              </cite>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Valjoux 7750 Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Valjoux 7750"
                  variant="numbered"
                  number={1}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Notes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Unveiled on July 1, 1974, the Valjoux 7750 is one of the most iconic and
                        enduring automatic chronograph movements in Swiss watchmaking.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The original 1973 version of the movement had 17 Jewels, and it includes a
                        quick-set day and date mechanism.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Despite a promising start, production was halted just two years after launch
                        due to the quartz crisis, but saw a revival in the 1980s.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-12">
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.1.jpg",
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.1.jpg"
                        alt="Valjoux 7750 Rotor Mk. 1"
                        className="w-full h-full object-cover rounded-lg"
                        skeletonClassName="w-full aspect-square rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Valjoux 7750 Rotor Mk. 1
                    </h4>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.%201-1.jpg",
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.%201-1.jpg"
                        alt="Valjoux 7750 Rotor Mk. 2"
                        className="w-full h-full object-cover rounded-lg"
                        skeletonClassName="w-full aspect-square rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Valjoux 7750 Rotor Mk. 2
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Lemania 5100 Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Lemania 5100"
                  variant="numbered"
                  number={2}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Notes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Introduced in the late 1970s, the Lemania 5100 stands out as one of the most
                        utilitarian and function-driven automatic chronograph movements.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The movement featured 17 jewels and a 48-hour power reserve with central
                        chronograph minutes and seconds hands.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Famous for withstanding up to 7 Gs of force without its chronograph hand
                        halting, earning it a place in fighter jets and military-issue watches.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseFullScreen}
        >
          <div className="max-w-2xl max-h-2xl">
            <img
              src={fullScreenImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            onClick={handleCloseFullScreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
