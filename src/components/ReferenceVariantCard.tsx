import React from "react"
import ImageWithLoader from "./ImageWithLoader"
import SectionHeading from "./SectionHeading"
import { useTranslations } from "next-intl"
import { Calendar, Clock, Layers, Settings } from "lucide-react"
import { ReferenceSpecificationRow } from "@/shared/types/reference.interface"
import { ImageInfo } from "@/shared/types"

interface ReferenceVariantCardProps {
  index: number
  title: string
  imageSrc: string
  imageAlt: string
  imageOriginal: string
  specifications: ReferenceSpecificationRow[]
  onImageClick: (imageData: ImageInfo) => void
  subtitle?: string
  note?: string
  imageCaption?: string
}

const ReferenceVariantCard = ({
  index,
  title,
  imageSrc,
  imageAlt,
  imageOriginal,
  specifications,
  onImageClick,
  subtitle = "",
  note,
  imageCaption,
}: ReferenceVariantCardProps) => {
  const tCommon = useTranslations("Common")
  const lucideIcons = {
    calendar: Calendar,
    clock: Clock,
    layers: Layers,
    settings: Settings,
  }

  const getIconComponent = (iconName: React.ComponentType<{ className?: string }>) => {
    return lucideIcons[iconName as unknown as keyof typeof lucideIcons] || null
  }

  return (
    <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
      <SectionHeading
        title={title}
        variant="numbered"
        number={index}
        // variant="solid"
        subtitle={subtitle}
      />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-12 items-center lg:items-start">
        {/* Image Section */}
        <div className="relative group lg:w-auto lg:flex-shrink-0">
          <div
            className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
            onClick={() =>
              onImageClick({
                src: imageSrc,
                original: imageOriginal,
                alt: imageAlt,
                title: title,
                subtitle: subtitle,
              })
            }
          >
            <div className="max-w-md mx-auto lg:mx-0 w-[460px]">
              <ImageWithLoader
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                skeletonClassName="w-full max-w-md h-80 sm:h-96 lg:h-[450px] rounded-lg"
              />
            </div>
            {/* Click indicator */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
              <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                {tCommon("click-zoom")}
              </div>
            </div>
          </div>

          {/* Image Title Below */}
          <div className="mt-4 text-center">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
              {imageCaption || title}
            </h3>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8 lg:flex-1">
          {/* Specifications Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                {specifications.map((spec, idx) => {
                  const IconComponent = getIconComponent(spec.icon)
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 text-gray-600 mr-3" />
                          <span className="font-medium text-gray-900">
                            {tCommon(`generation-${spec.label}`)}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 text-right">{spec.value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          {/* Note Section */}
          {note && (
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                <h3 className="text-lg font-semibold text-black mb-4">{tCommon("note")}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: note }}
                  className="text-sm sm:text-base text-gray-700 leading-relaxed"
                ></p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReferenceVariantCard
