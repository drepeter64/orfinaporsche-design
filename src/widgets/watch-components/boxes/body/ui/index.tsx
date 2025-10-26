import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData } from "@/shared/types"

export const BoxesBodySection: React.FC<BoxesBodySectionProps> = ({ data }) => {
  const { pageTitle } = data
  console.log(pageTitle)

  return (
    <>
      {/* BUND Boxes */}
      <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            1
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">BUND Boxes</h2>
        </div>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            BUND examples were issued in boxes that bore the initial NATO Stock Number (NSN)
            6645-12-182-1763, identifying them as official German Federal Defense Force equipment.
          </p>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              <strong>NSN:</strong> 6645-12-182-1763 - NATO classification for chronograph watches
            </p>
          </div>
        </div>
      </div>

      {/* Venezuelan MOD Boxes */}
      <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            2
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
            Venezuelan MOD Boxes
          </h2>
        </div>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Examples of Venezuelan Ministry of Defense variants were delivered with unique printed
            boxes, specially designed for the Venezuelan military contract and bearing appropriate
            ministry markings.
          </p>
        </div>
      </div>

      {/* Swiss Shield Set Boxes */}
      <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            3
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
            Swiss Shield Set Boxes
          </h2>
        </div>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            The Swiss Military variant came in a comprehensive set with a matching Green Leather
            Box, containing the watch alongside complementary accessories.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">Box Contents:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Swiss Shield dial chronograph</li>
                <li>• Green PVD BUND-style strap</li>
                <li>• Green PVD bracelet</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-black mb-2">Specifications:</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Green leather construction</li>
                <li>• Swiss military designation</li>
                <li>• Complete presentation set</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Collector Value */}
      <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
        <div className="bg-blue-50 p-8 sm:p-12 rounded-lg border-l-4 border-blue-400">
          <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6">
            Collector Significance
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-black mb-3">Authentication</h3>
              <p className="text-gray-700 leading-relaxed">
                Original boxes serve as important authentication tools for collectors, with specific
                NSN markings, military designations, and construction details helping to verify the
                provenance of individual watches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-black mb-3">Rarity</h3>
              <p className="text-gray-700 leading-relaxed">
                Complete sets with original boxes are exceptionally rare, as many military-issued
                watches were separated from their packaging during service. The survival of original
                boxes significantly enhances the historical and collector value of these timepieces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface BoxesBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
}
