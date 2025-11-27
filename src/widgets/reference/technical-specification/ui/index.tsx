import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"

export const TechnicalSpecificationSection: React.FC<TechnicalSpecificationsProps> = ({ data }) => {
  const tCommon = useTranslations("Common")

  // Split specifications into two columns
  const specs = data.technicalSpecs.specifications
  const midpoint = Math.ceil(specs.length / 2)
  const leftColumnSpecs = specs.slice(0, midpoint)
  const rightColumnSpecs = specs.slice(midpoint)

  const SpecRow = ({
    label,
    value,
    isLast,
  }: {
    label: string
    value: string
    isLast?: boolean
  }) => (
    <div>
      <div className="h-px bg-neutral-300 w-full"></div>
      <div className="flex items-center gap-[37px] py-4 text-lg md:text-xl tracking-[-0.01em]">
        <span className="text-black w-[120px] md:w-[160px] flex-shrink-0">{label}</span>
        <span
          className="text-black/50"
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </div>
      {isLast && <div className="h-px bg-neutral-300 w-full"></div>}
    </div>
  )

  return (
    <section className="py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col gap-12 items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black text-center">
          {tCommon("tech-specification")}
        </h2>

        <div className="w-full grid md:grid-cols-2 gap-x-12">
          {/* Left Column */}
          <div className="flex flex-col">
            {leftColumnSpecs.map((spec, index) => (
              <SpecRow
                key={index}
                label={spec.label}
                value={spec.value}
                isLast={index === leftColumnSpecs.length - 1}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {rightColumnSpecs.map((spec, index) => (
              <SpecRow
                key={index}
                label={spec.label}
                value={spec.value}
                isLast={index === rightColumnSpecs.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TechnicalSpecificationsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
}
