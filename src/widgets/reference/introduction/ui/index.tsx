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
          className={`py-16 md:py-24 bg-gradient-to-b from-white to-stone-50/50 w-full h-fit ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
        >
          <div className="px-4 sm:px-6 lg:px-20">
            <div className="max-w-[1280px] mx-auto">
              {/* Conditionally render grid or centered layout */}
              {introduction.image ? (
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                  {/* Text Content */}
                  <div className="space-y-8 lg:sticky lg:top-32">
                    <div className="space-y-6">
                      {introduction.paragraphs.map((paragraph, index) => (
                        <AnimatedText
                          key={index}
                          delay={0.1 + index * 0.1}
                        >
                          <p className="text-base md:text-lg text-stone-600 leading-[1.8] tracking-wide font-light">
                            {paragraph}
                          </p>
                        </AnimatedText>
                      ))}
                    </div>

                    {introduction.differences && (
                      <AnimatedText delay={0.3}>
                        <div className="pt-4 border-t border-stone-200">
                          <ol className="space-y-5">
                            {introduction.differences.map((diff, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-4 group"
                              >
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-400 text-white flex items-center justify-center text-sm font-medium transition-all duration-300 group-hover:bg-stone-500">
                                  {index + 1}
                                </span>
                                <span className="text-base md:text-lg text-stone-700 leading-relaxed font-medium tracking-wide">
                                  {diff}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </AnimatedText>
                    )}
                  </div>

                  {/* Group Photo */}
                  <AnimatedImage delay={0.2}>
                    <div className="relative group">
                      {/* Decorative background element */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-stone-100 to-stone-200/50 rounded-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div
                        className="relative overflow-hidden cursor-pointer transition-all duration-500"
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
                          className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                          skeletonClassName="w-full h-80 sm:h-96 lg:h-[500px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                          <div className="bg-white/95 backdrop-blur-sm text-stone-900 px-5 py-2.5 text-sm font-medium tracking-wider uppercase">
                            {tCommon("click-zoom")}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <h3 className="text-xl md:text-2xl font-normal text-stone-800 tracking-wide">
                          {introduction.image.title}
                        </h3>
                        {introduction.image.subtitle && (
                          <p className="text-sm text-stone-500 mt-1 tracking-wide">
                            {introduction.image.subtitle}
                          </p>
                        )}
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
