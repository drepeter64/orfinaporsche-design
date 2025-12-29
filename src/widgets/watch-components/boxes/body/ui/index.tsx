import React, { DetailedHTMLProps, HTMLAttributes } from "react"
import { ComponentsTypeData } from "@/shared/types"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { Circle } from "lucide-react"

export const BoxesBodySection: React.FC<BoxesBodySectionProps> = () => {
  const boxSections = [
    {
      title: "BUND Boxes",
      description:
        "BUND examples were issued in boxes that bore the initial NATO Stock Number (NSN) 6645-12-182-1763, identifying them as official German Federal Defense Force equipment.",
      note: {
        label: "NSN",
        value: "6645-12-182-1763 - NATO classification for chronograph watches",
      },
    },
    {
      title: "Venezuelan MOD Boxes",
      description:
        "Examples of Venezuelan Ministry of Defense variants were delivered with unique printed boxes, specially designed for the Venezuelan military contract and bearing appropriate ministry markings.",
    },
    {
      title: "Swiss Shield Set Boxes",
      description:
        "The Swiss Military variant came in a comprehensive set with a matching Green Leather Box, containing the watch alongside complementary accessories.",
      details: [
        {
          title: "Box Contents",
          items: [
            "Swiss Shield dial chronograph",
            "Green PVD BUND-style strap",
            "Green PVD bracelet",
          ],
        },
        {
          title: "Specifications",
          items: [
            "Green leather construction",
            "Swiss military designation",
            "Complete presentation set",
          ],
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col gap-16">
      {boxSections.map((section, index) => (
        <AnimatedSection
          key={index}
          animation="fade-in"
          delay={0}
          className="flex flex-col gap-8"
        >
          {/* Section Header */}
          <div className="flex items-baseline gap-4">
            <span className="text-3xl font-light text-stone-400">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black tracking-wide">
              {section.title}
            </h2>
          </div>

          <AnimatedText delay={0.1}>
            <div className="bg-stone-50 border border-stone-200 px-6 py-5 space-y-4">
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
                {section.description}
              </p>
              {section.note && (
                <div className="bg-white px-4 py-3 border border-stone-200">
                  <p className="text-sm text-stone-600">
                    <span className="font-medium text-stone-700">{section.note.label}:</span>{" "}
                    {section.note.value}
                  </p>
                </div>
              )}
              {section.details && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {section.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="bg-white px-5 py-4 border border-stone-200"
                    >
                      <h4 className="font-medium text-stone-700 mb-3 uppercase tracking-wider text-sm">
                        {detail.title}
                      </h4>
                      <ul className="text-sm text-stone-600 space-y-2">
                        {detail.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start gap-2"
                          >
                            <Circle className="w-1.5 h-1.5 mt-1.5 flex-shrink-0 fill-stone-400 text-stone-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </AnimatedText>

          {/* Divider */}
          {index < boxSections.length - 1 && <div className="w-full h-px bg-stone-200 mt-4" />}
        </AnimatedSection>
      ))}

      {/* Collector Significance */}
      <AnimatedSection
        animation="fade-in"
        delay={0}
        className="flex flex-col gap-8"
      >
        <div className="flex items-baseline gap-4">
          <span className="text-3xl font-light text-stone-400">04</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black tracking-wide">
            Collector Significance
          </h2>
        </div>

        <div className="space-y-4">
          <AnimatedText delay={0.1}>
            <div className="bg-stone-50 border border-stone-200 px-6 py-5">
              <h3 className="text-base font-medium text-stone-700 mb-3 uppercase tracking-wider">
                Authentication
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Original boxes serve as important authentication tools for collectors, with specific
                NSN markings, military designations, and construction details helping to verify the
                provenance of individual watches.
              </p>
            </div>
          </AnimatedText>

          <AnimatedText delay={0.15}>
            <div className="bg-stone-50 border border-stone-200 px-6 py-5">
              <h3 className="text-base font-medium text-stone-700 mb-3 uppercase tracking-wider">
                Rarity
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Complete sets with original boxes are exceptionally rare, as many military-issued
                watches were separated from their packaging during service. The survival of original
                boxes significantly enhances the historical and collector value of these timepieces.
              </p>
            </div>
          </AnimatedText>
        </div>
      </AnimatedSection>
    </div>
  )
}

interface BoxesBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
}
