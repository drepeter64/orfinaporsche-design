import { DetailedHTMLProps, HTMLAttributes } from "react"

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

  const { introduction } = data

  return (
    <>
      {introduction && (
        <section
          ref={sectionRef}
          className={`py-16 md:py-24 bg-gradient-to-b from-white to-stone-50/50 w-full h-fit ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
        >
          <div className="px-8 sm:px-6 lg:px-20">
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
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-stone-200 text-stone-600 flex items-center justify-center text-sm font-medium">
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
                    <div
                      className="bg-stone-100 p-4 cursor-pointer group transition-shadow duration-300 shadow-sm hover:shadow-md border border-stone-200"
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
                      <div className="relative overflow-hidden">
                        <ImageWithLoader
                          src={introduction.image.src}
                          alt={introduction.image.alt}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          skeletonClassName="w-full h-80 sm:h-96 lg:h-[500px]"
                        />
                      </div>
                      <p className="text-lg text-stone-500 mt-4 text-center tracking-wide">
                        {introduction.image.title}
                      </p>
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
