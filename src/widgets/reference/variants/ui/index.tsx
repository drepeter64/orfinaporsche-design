import { DetailedHTMLProps, HTMLAttributes } from "react"
import ReferenceVariantCard from "@/components/ReferenceVariantCard"
import { ImageInfo, ReferenceData } from "@/shared/types"
import AnimatedText from "@/components/AnimatedText"
import { useScrollAnimation, getScrollAnimationClasses } from "@/shared/hooks"

export const VariantsSection: React.FC<VariantsSectionProps> = ({ data, setFullScreenImage }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px",
  })

  const { generations, variantsTitle } = data

  return (
    <section
      ref={ref}
      className={`bg-white w-full ${getScrollAnimationClasses(isVisible, "duration-1000")}`}
    >
      {variantsTitle && (
        <div className="max-w-[1280px] mx-auto px-8 sm:px-6 lg:px-20 pt-16">
          <AnimatedText delay={0}>
            <p className="text-base lg:text-xl text-stone-600 leading-normal text-center">
              {variantsTitle}
            </p>
          </AnimatedText>
          <div className="w-full h-px bg-black/10 mt-[30px] md:mt-[40px] lg:mt-[50px]"></div>
        </div>
      )}
      {generations &&
        generations.map((generation, index) => (
          <div key={index}>
            <ReferenceVariantCard
              index={index + 1}
              title={generation.title}
              imageSrc={generation.image}
              imageOriginal={generation.original}
              imageAlt={generation.title}
              subtitle={generation.subtitle}
              note={generation.note}
              imageCaption={generation.imageCaption}
              specifications={generation.specifications || []}
              onImageClick={setFullScreenImage}
              animationDelay={index * 150}
            />
            {/* Divider between generations */}
            {index < generations.length - 1 && (
              <div className="flex justify-center">
                <div className="w-full max-w-[1280px] h-px bg-black/10"></div>
              </div>
            )}
          </div>
        ))}
    </section>
  )
}

interface VariantsSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
