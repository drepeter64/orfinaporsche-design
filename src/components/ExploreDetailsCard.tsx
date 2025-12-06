"use client"

import ImageWithLoader from "./ImageWithLoader"
import { Link } from "@/app/localization"
import { getReferenceRoute } from "@/shared/routes/client"
import { ReferenceExploreCard } from "@/shared/types"

const ExploreDetailsCard = ({
  title,
  imageSrc,
  imageAlt,
  route,
  referenceId,
}: ReferenceExploreCard) => {
  return (
    <Link
      href={getReferenceRoute(route, referenceId)}
      className="group cursor-pointer"
    >
      <div className="bg-stone-100 overflow-hidden transition-all duration-300 group-hover:-translate-y-2 p-4 flex flex-col gap-4 border-2 border-transparent group-hover:border-stone-200">
        {/* Image Container */}
        <div className="h-[240px] overflow-hidden relative flex items-center justify-center">
          <div className="w-[250px] h-[250px] relative">
            <ImageWithLoader
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              skeletonClassName="w-full h-full"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl text-black/70 group-hover:text-black text-center tracking-[-0.01em] leading-[1.2] transition-colors duration-300">
          {title}
        </h3>
      </div>
    </Link>
  )
}

export default ExploreDetailsCard
