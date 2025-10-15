import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { ReferenceData } from "@/shared/types"

export const TechnicalSpecificationSection: React.FC<TechnicalSpecificationsProps> = ({ data }) => {
  const tCommon = useTranslations("Common")

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
          {tCommon("tech-specification")}
        </h2>

        <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-8 py-6 bg-gray-900">
            <h3 className="text-2xl font-light text-white">{data.technicalSpecs.title}</h3>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {data.technicalSpecs.specifications.map((spec, index) => (
                <div
                  key={index}
                  className="space-y-4"
                >
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">{spec.label}</span>
                    <span
                      className="text-gray-900"
                      dangerouslySetInnerHTML={{ __html: spec.value }}
                    ></span>
                  </div>
                </div>
              ))}
            </div>
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
