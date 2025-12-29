"use client"

import { DetailedHTMLProps, HTMLAttributes } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { ImageInfo } from "@/shared/types"

export const PhotoCard: React.FC<PhotoCardProps> = ({
  image,
  caption,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#f9f6f4] flex flex-col gap-4 items-center p-4 cursor-pointer group transition-shadow duration-300 shadow-sm hover:shadow-md ${className}`}
      onClick={onClick}
    >
      <div className="aspect-[400/600] relative w-full overflow-hidden">
        <ImageWithLoader
          src={image.src}
          alt={image.alt || caption || "Watch image"}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      {caption && (
        <p className="text-base text-neutral-600 tracking-wide leading-5 text-center">{caption}</p>
      )}
    </div>
  )
}

interface PhotoCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: ImageInfo
  caption?: string
  onClick?: () => void
}
