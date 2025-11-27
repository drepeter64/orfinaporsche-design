import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"

export const ExploreDetailsSection: React.FC<ExploreDetailssProps> = ({ data }) => {
  const tCommon = useTranslations("Common")

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
            {tCommon("explore-details")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.exploreCards.map((card, index) => (
            <ExploreDetailsCard
              key={index}
              title={card.title}
              referenceId={data.id}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              route={card.route}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ExploreDetailssProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ReferenceData
}
