"use client"

import { useState, useEffect } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { X } from "lucide-react"

interface FullScreenImageData {
  src: string
  alt: string
  title: string
  subtitle?: string
}

const FullScreenModal = ({
  image,
  onClose,
}: {
  image: FullScreenImageData | null
  onClose: () => void
}) => {
  if (!image) return null

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <X size={24} />
      </button>

      <div className="relative max-w-full max-h-full flex flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />

        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
          {image.subtitle && <p className="text-gray-300">{image.subtitle}</p>}
        </div>
      </div>

      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      ></div>
    </div>
  )
}

export function DateWheelsPage() {
  const [fullScreenImage, setFullScreenImage] = useState<FullScreenImageData | null>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFullScreenImage(null)
      }
    }

    if (fullScreenImage) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [fullScreenImage])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              Date Wheels
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
              Three Known Sets Across All References
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              There are three known sets of date wheels across all 7750, 7176, and 7177s, each with
              distinct characteristics and found on specific reference models.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Type 1 - Straight Down Leg Hooked 7 */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Type 1 - Straight Down Leg Hooked 7
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <div className="space-y-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> All 7750s
                      </p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        This date wheel features a distinctive straight vertical leg on the number 7
                        with a hook at the top, making it easily identifiable on 7750 references.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/Date Wheels/7750-7-Type1.jpg",
                        alt: "Type 1 - Straight Down Leg Hooked 7",
                        title: "Type 1 - Straight Down Leg Hooked 7",
                        subtitle: "Found on All 7750s",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="/images/Date Wheels/7750-7-Type1.jpg"
                      alt="Type 1 - Straight Down Leg Hooked 7"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full max-w-sm h-80 rounded-lg"
                    />
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    Type 1 - Straight Down Leg Hooked 7
                  </span>
                </div>
              </div>
            </div>

            {/* Type 2 - Curve Hooked 7 */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/Date Wheels/7177-7-Type2.jpg",
                        alt: "Type 2 - Curve Hooked 7",
                        title: "Type 2 - Curve Hooked 7",
                        subtitle: "Found on 7176 and 7177 References",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="/images/Date Wheels/7177-7-Type2.jpg"
                      alt="Type 2 - Curve Hooked 7"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full max-w-sm h-80 rounded-lg"
                    />
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    Type 2 - Curve Hooked 7
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Type 2 - Curve Hooked 7
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <div className="space-y-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> Across 7176 References, 7177
                      </p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        This variation features a curved leg on the number 7 with a hook,
                        distinguishing it from the straight-leg Type 1 version.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Type 3 - Curve Non-hooked 7 */}
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                      Type 3 - Curve Non-hooked 7
                    </h2>
                  </div>

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <div className="space-y-4">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> Across 7176 References, 7177
                      </p>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        The final evolution features a curved leg on the number 7 without the hook,
                        creating a smoother, more modern appearance.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "/images/Date Wheels/7177-7-Type3.jpg",
                        alt: "Type 3 - Curve Non-hooked 7",
                        title: "Type 3 - Curve Non-hooked 7",
                        subtitle: "Found on 7176 and 7177 References",
                      })
                    }
                  >
                    <ImageWithLoader
                      src="/images/Date Wheels/7177-7-Type3.jpg"
                      alt="Type 3 - Curve Non-hooked 7"
                      className="relative w-full max-w-sm h-80 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="w-full max-w-sm h-80 rounded-lg"
                    />
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    Type 3 - Curve Non-hooked 7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FullScreenModal
        image={fullScreenImage}
        onClose={() => setFullScreenImage(null)}
      />
    </div>
  )
}
