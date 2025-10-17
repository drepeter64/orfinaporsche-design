import { DetailedHTMLProps, HTMLAttributes } from "react"
import ReferenceVariantCard from "@/components/ReferenceVariantCard"
import { ImageInfo, ReferenceData } from "@/shared/types"

export const VariantsSection: React.FC<VariantsSectionProps> = ({ data, setFullScreenImage }) => {
  const { generations, variantsTitle, variantsSubtitle } = data

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(variantsTitle || variantsSubtitle) && (
          <div className="text-center mb-16">
            {variantsTitle && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                {variantsTitle}
              </h2>
            )}
            {variantsSubtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{variantsSubtitle}</p>
            )}
          </div>
        )}

        <div className="space-y-24 sm:space-y-32 lg:space-y-40">
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
