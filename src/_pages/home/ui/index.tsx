"use client"

import { useTranslations } from "next-intl"
import ImageWithLoader from "@/components/ImageWithLoader"
import AnimatedImage from "@/components/AnimatedImage"
import AnimatedText from "@/components/AnimatedText"
import { Watch3DShowcase } from "@/components/Watch3DShowcase"
import { ClientRoutes } from "@/shared/routes"
import { home_page } from "@/shared/data"
import { Link } from "@/app/localization"

export const HomePage = () => {
  const tCommon = useTranslations("Common")
  const { hero, featured } = home_page

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Full Viewport with Background Image */}
      <section className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithLoader
            src={hero.image}
            alt={hero.image_alt}
            fill
            className="object-cover object-center"
            skeletonClassName="w-full h-full"
            width={3840}
            height={2160}
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/90 via-stone-950/60 via-40% to-transparent" />

        {/* Content Overlay - Bottom Left */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-20 pb-8 sm:pb-10 lg:pb-12 max-w-2xl">
          <AnimatedText
            as="h1"
            delay={0.2}
          >
            <span className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-50 leading-[1.2] tracking-wide block">
              Orfina Porsche Design
            </span>
          </AnimatedText>

          <AnimatedText
            as="p"
            delay={0.4}
          >
            <span className="text-base sm:text-lg font-light text-stone-50/90 mt-4 sm:mt-5 max-w-lg leading-relaxed tracking-wide block">
              {hero.description}
            </span>
          </AnimatedText>

          <AnimatedText
            as="div"
            delay={0.6}
          >
            <Link
              href={ClientRoutes.reference_guide}
              className="inline-block mt-6 sm:mt-8 text-sm sm:text-base font-normal text-stone-50 tracking-wider uppercase border-b border-stone-50 pb-1 hover:text-white hover:border-white transition-colors duration-300"
            >
              Explore
            </Link>
          </AnimatedText>
        </div>
      </section>

      {/* 3D Watch Showcase */}
      <Watch3DShowcase />

      {/* Featured References */}
      <section className="py-16 sm:py-24 lg:py-32 bg-stone-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">
          <AnimatedText
            className="text-center mb-6 sm:mb-8 lg:mb-10"
            delay={0}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 tracking-wide">
              {featured.title}
            </h2>
          </AnimatedText>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {featured.items.map(({ image, image_alt, title, link }, index) => (
              <AnimatedImage
                key={index}
                delay={0.1 + index * 0.15}
              >
                <Link
                  href={ClientRoutes.reference(link)}
                  className="group cursor-pointer block"
                >
                  <div className="bg-white p-4 overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow group-hover:-translate-y-2 border border-stone-200">
                    <div className="aspect-square relative overflow-hidden">
                      <ImageWithLoader
                        src={image}
                        alt={image_alt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        skeletonClassName="w-full h-full"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="pt-6 pb-2">
                      <h3 className="text-2xl font-normal text-black/70 group-hover:text-black mb-1.5 tracking-wide transition-colors duration-300 text-center">
                        {title}
                      </h3>
                      <span className="text-stone-400 font-normal text-sm tracking-wider group-hover:text-stone-700 transition-all duration-300 inline-flex items-center justify-center w-full uppercase">
                        {tCommon("explore-details")}
                        <svg
                          className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedImage>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
