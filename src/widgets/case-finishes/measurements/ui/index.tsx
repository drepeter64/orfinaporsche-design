import { DetailedHTMLProps, HTMLAttributes } from "react"

import { useTranslations } from "next-intl"
import { Measurement } from "@/shared/types/reference-detail.interface"

export const MeasurementsSection: React.FC<MeasurementsSectionProps> = ({ data }) => {
  const tCommon = useTranslations("Common")
  const { measurements } = data

  return (
    <>
      {measurements && (
        <div className="mb-8 sm:mb-12">
          <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
            <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
              {tCommon("measurements")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
              {measurements.map((measurement, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="font-bold text-black">{measurement.value}</div>
                  <div className="text-gray-600">{measurement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

interface MeasurementsSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: {
    measurements?: Measurement[]
  }
}
