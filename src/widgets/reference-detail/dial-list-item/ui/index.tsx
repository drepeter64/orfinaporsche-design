import { DetailedHTMLProps, HTMLAttributes, useState } from "react"
import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { DialDataListing } from "@/shared/types/reference-detail.interface"
import { useTranslations } from "next-intl"

export const DialItemListSection: React.FC<DialItemListSectionProps> = ({
  variation,
  referenceId,
}) => {
  const [hoveredCard, setHoveredCard] = useState<string>("")
  const tCommon = useTranslations("Common")

  return (
    <>
      <Link href={ClientRoutes.dial_type(referenceId, variation.route)}>
        <div
          className="bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group border border-stone-200 hover:border-stone-300"
          onMouseEnter={() => setHoveredCard(variation.route)}
          onMouseLeave={() => setHoveredCard("")}
        >
          <div className="relative">
            {/* Image container with larger height */}
            <div className="relative w-full h-80 sm:h-96 overflow-hidden">
              {variation.images && variation.images.length ? (
                variation.images.length > 1 ? (
                  variation.images.slice(0, 2).map((item, index) => (
                    <img
                      key={index}
                      src={item.src}
                      alt={item.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-600 ${
                        hoveredCard === variation.route
                          ? index === 0
                            ? "opacity-0 scale-105"
                            : "opacity-100 scale-100"
                          : index === 0
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                      }`}
                    />
                  ))
                ) : (
                  <img
                    src={
                      variation.images[0].src ||
                      "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
                    }
                    alt={variation.images[0].alt || tCommon("no-photo")}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-100 ${
                      hoveredCard === variation.route ? "scale-110" : "scale-100"
                    }`}
                  />
                )
              ) : (
                <img
                  src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/placeholder.png"
                  alt={tCommon("no-photo")}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-100 ${
                    hoveredCard === variation.route ? "scale-110" : "scale-100"
                  }`}
                />
              )}

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Hover indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* <div className="bg-black/80 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">View Details</div> */}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-black transition-colors">
                {variation.title}
              </h3>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

interface DialItemListSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variation: DialDataListing
  referenceId: string
}
