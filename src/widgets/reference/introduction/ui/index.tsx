import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ImageInfo, ReferenceData } from "@/shared/types"
import ImageWithLoader from "@/components/ImageWithLoader"
import AnimatedImage from "@/components/AnimatedImage"
import AnimatedText from "@/components/AnimatedText"
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
          className={`py-[60px] bg-white w-full h-fit ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
        >
          <div className="px-4 sm:px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto">
              {/* Conditionally render grid or centered layout */}
              {introduction.image ? (
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                  {/* Text Content */}
                  <div className="space-y-6">
                    {introduction.paragraphs.map((paragraph, index) => (
                      <AnimatedText
                        key={index}
                        delay={0.1 + index * 0.1}
                      >
                        <p className="text-lg text-gray-700 leading-relaxed">{paragraph}</p>
                      </AnimatedText>
                    ))}

                    {introduction.differences && (
                      <AnimatedText delay={0.3}>
                        <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 ml-4">
                          {introduction.differences.map((diff, index) => (
                            <li key={index}>{diff}</li>
                          ))}
                        </ol>
                      </AnimatedText>
                    )}
                  </div>

                  {/* Group Photo */}
                  <AnimatedImage delay={0.2}>
                    <div className="relative">
                      <div
                        className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
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
                          className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                          skeletonClassName="w-full h-80 sm:h-96 lg:h-[500px]"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                            {tCommon("click-zoom")}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 text-center">
                        <h3 className="text-lg sm:text-xl font-normal text-stone-800 mb-1">
                          {introduction.image.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600">
                          {introduction.image.subtitle}
                        </p>
                      </div>
                    </div>
                  </AnimatedImage>
                </div>
              ) : (
                /* Centered text without image (for 7176 style) */
                <div className="flex flex-col items-start gap-4">
                  <div className="py-4 max-w-[500px] w-full space-y-4 h-fit">
                    {introduction.paragraphs.map((paragraph, index) => (
                      <AnimatedText
                        key={index}
                        delay={0.1 + index * 0.1}
                      >
                        <p className="text-lg md:text-lg lg:text-xl text-black/60 leading-[1.4] tracking-[-0.01em] text-left">
                          {paragraph.replace(/\n/g, " ")}
                        </p>
                      </AnimatedText>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
