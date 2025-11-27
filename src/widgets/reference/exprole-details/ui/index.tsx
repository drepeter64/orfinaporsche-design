import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"
import ExploreDetailsCard from "@/components/ExploreDetailsCard"

export const ExploreDetailsSection: React.FC<ExploreDetailssProps> = ({ data }) => {
  const tCommon = useTranslations("Common")

  return (
    <section className="w-full bg-white py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-20">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col gap-12 items-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-black tracking-[-0.01em] text-center">
            {tCommon("explore-details")}
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            {data.exploreCards.map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[280px]"
              >
                <ExploreDetailsCard
                  title={card.title}
                  referenceId={data.id}
                  imageSrc={card.imageSrc}
                  imageAlt={card.imageAlt}
                  route={card.route}
                />
              </div>
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
