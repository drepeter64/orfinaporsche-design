"use client"

import { useState } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import SectionHeading from "@/components/SectionHeading"

export function CrownsPage() {
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
              Crowns
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              There are a variety of crowns found across the Orfina Porsche Design references
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* 7750 Crown Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="7750 Crown"
                  variant="numbered"
                  number={1}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Notes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The 7750 is 5.4mm in diameter.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Exists in two versions, with different counts of teeth.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crown is marked with the Orfina Flame logo or PD logo.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crowns on 7750 units are not screw-downs, their ability to maintain
                        water resistance comes from an integrated gasket built into the crown
                        creating a seal. These gaskets deteriorate over time, requiring replacement.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-12">
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                    <div
                      className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 overflow-hidden"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Crown/7750-OrfinaCrown.jpg",
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Crown/7750-OrfinaCrown.jpg"
                        alt="Orfina Crown"
                        className="w-full h-full object-cover rounded-lg"
                        skeletonClassName="w-full h-64 rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Orfina Crown (Found on Gen. 1 7750s)
                    </h4>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                    <div
                      className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Crown/7750%20Crown.jpg",
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Crown/7750%20Crown.jpg"
                        alt="PD Crown"
                        className="w-full h-full object-cover rounded-lg"
                        skeletonClassName="w-full aspect-video rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      PD Crown (Found on Gen. 2 & 3 7750s)
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* 7176 Non Screw-Down Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="7176 Non Screw-Down"
                  variant="numbered"
                  number={2}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Notes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">Found on: 7176</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crown is marked with the PD Logo.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Finished to match the case.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                  <div className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-gray-500 text-center">
                      Picture
                      <br />
                      To Be Updated
                    </span>
                  </div>
                  <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                    7176 Non Screw-Down Crown
                  </h4>
                </div>
              </div>
            </div>

            {/* 7176 & 7177 Screw-Down Crown Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="7176 & 7177 Screw-Down Crown"
                  variant="numbered"
                  number={3}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Notes:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Found on: 7176, 7176 Military, 7176 D, 7176 S, 7177
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Water-resistant screw down crown.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The crown is marked with the PD Logo or Orfina Logo and is finished to match
                        the case.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-lg w-full group">
                  <div
                    className="w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                    onClick={() =>
                      handleImageClick(
                        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Crown/7177-SilverCase-2crop.jpg",
                      )
                    }
                  >
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Crown/7177-SilverCase-2crop.jpg"
                      alt="7176 & 7177 Screw-Down Crown"
                      className="w-full h-full object-cover rounded-lg"
                      skeletonClassName="w-full aspect-video rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                    7176 & 7177 Screw-Down Crown
                  </h4>
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
