import { DetailedHTMLProps, HTMLAttributes } from "react"
import ReferenceVariantCard from "@/components/ReferenceVariantCard"
import { ImageInfo, ReferenceData } from "@/shared/types"
import SectionOverview from "@/components/SectionOverview"

export const VariantsSection: React.FC<VariantsSectionProps> = ({ data, setFullScreenImage }) => {
  const { generations, variantsTitle, variantsSubtitle } = data

  return (
    <section className="py-12 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        {(variantsTitle || variantsSubtitle) && (
          <div className="text-center mb-16">
            {variantsTitle && (
              <SectionOverview
                text={variantsTitle}
                className={"uppercase text-2xl sm:text-3xl lg:text-4xl"}
              />
              //   <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black mb-4 uppercase tracking-wider">
              //     {variantsTitle}
              //   </h2>
            )}
            {variantsSubtitle && <SectionOverview text={variantsSubtitle} />}
          </div>
        )}

        <div className="space-y-20 sm:space-y-24 lg:space-y-32">
          {generations &&
            generations.map((generation, index) => (
              <ReferenceVariantCard
                key={index}
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
              />
            ))}
        </div>
      </div>
    </section>
  )
}

interface VariantsSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
