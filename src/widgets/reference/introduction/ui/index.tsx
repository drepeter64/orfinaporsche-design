import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ImageInfo, ReferenceData } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

export const IntroductionSection: React.FC<IntroductionSectionProps> = ({
  data,
  setFullScreenImage,
}) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const tCommon = useTranslations("Common")
  const { introduction } = data

  return (
    <>
      {introduction && (
        <section
          ref={sectionRef}
          className={`py-16 bg-background ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
        >
          <div className="mx-auto px-4 sm:px-6 lg:px-20">
            {/* Conditionally render grid or centered layout */}
            {introduction.image ? (
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Text Content */}
                <div className="space-y-6">
                  {introduction.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-gray-700 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {introduction.differences && (
                    <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 ml-4">
                      {introduction.differences.map((diff, index) => (
                        <li key={index}>{diff}</li>
                      ))}
                    </ol>
                  )}
                </div>

                {/* Group Photo */}
                <div className="relative">
                  <div
                    className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg"
                    onClick={() =>
                      setFullScreenImage({
                        src: introduction.image!.src,
                        original: introduction.image!.original,
                        alt: introduction.image!.alt,
                        title: introduction.image!.title,
                        subtitle: introduction.image!.subtitle,
                      })
                    }
                  >
                    <ImageWithLoader
                      src={introduction.image.src}
                      alt={introduction.image.alt}
                      className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                      skeletonClassName="w-full h-80 sm:h-96 lg:h-[500px] rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                        {tCommon("click-zoom")}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                      {introduction.image.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {introduction.image.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Centered text without image (for 7176 style) */
              <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-700 leading-relaxed text-center mb-10 mt-8 bg-blue-50 p-6 sm:p-8 rounded-lg border-l-4 border-blue-500">
                {introduction.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  )
}

interface IntroductionSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
  setFullScreenImage: (imageData: ImageInfo) => void
}
