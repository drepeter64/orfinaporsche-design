"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/shared/lib/utils"

interface ImageWithLoaderProps {
  src: string
  alt: string
  className?: string
  skeletonClassName?: string
  fallbackSrc?: string
  priority?: boolean
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className = "",
  skeletonClassName = "",
  fallbackSrc = "/placeholder.svg",
  priority = false,
  fill = false,
  width = 800,
  height = 600,
  sizes,
}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [imageSrc, setImageSrc] = useState<string>(src)

  useEffect(() => {
    setIsLoading(true)
    setImageSrc(src)
  }, [src])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setImageSrc(fallbackSrc)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && !priority && (
        <Skeleton
          className={cn(
            "absolute inset-0 w-full h-full bg-gray-200 animate-pulse",
            skeletonClassName,
          )}
        />
      )}
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoadingComplete}
        onError={handleError}
        className={cn(
          "transition-opacity duration-300 ease-in-out",
          isLoading ? "opacity-0" : "opacity-100",
          className,
        )}
      />
    </>
  )
}

export default ImageWithLoader
