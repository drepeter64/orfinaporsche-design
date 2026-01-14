import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"
import AnimatedText from "@/components/AnimatedText"
import AnimatedImage from "@/components/AnimatedImage"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

export const ExploreDetailsSection: React.FC<ExploreDetailssProps> = ({ data }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  })

  const tCommon = useTranslations("Common")

  return (
    <section
      ref={ref}
      className={`w-full bg-white py-[60px] md:py-[80px] lg:py-[100px] px-8 sm:px-6 lg:px-20 ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
    >
      <div className="max-w-full mx-auto">
        <div className="flex flex-col gap-12 items-center">
          <AnimatedText delay={0}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-black tracking-wide text-center">
              {tCommon("explore-details")}
            </h2>
          </AnimatedText>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-start">
            {data.exploreCards.map((card, index) => (
              <AnimatedImage
                key={index}
                delay={0.1 + index * 0.1}
                className="w-full max-w-[280px]"
              >
                <ExploreDetailsCard
                  title={card.title}
                  referenceId={data.id}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  route={card.route}
                />
              </AnimatedImage>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface ExploreDetailssProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
}
