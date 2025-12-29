"use client"

import { Link } from "@/app/localization"
import { ClientRoutes } from "@/shared/routes"
import { reference_guide } from "@/shared/data"
import AnimatedText from "@/components/AnimatedText"
import AnimatedSection from "@/components/AnimatedSection"
import { HeroSection } from "@/widgets/reference/hero"
import { ArrowRight, Circle } from "lucide-react"
import Image from "next/image"
import ImageWithLoader from "@/components/ImageWithLoader"

// Images for the "How to Use" cards
const howToUseImages = [
  "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/button-photos/preview-800x-7750-series-v4-black-flat-top-case-pd-dial-1mile-rehaut.jpg",
  "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/button-photos/preview-800x-7750-series-v4-black-round-top-case-pd-dial-1mile-rehaut-caseback-option-1.jpg",
  "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/button-photos/preview-800x-7750-rehaut-1km.jpg",
  "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/img/7750/7750-main-page/button-photos/preview-800x-7750-series-v4-black-flat-top-case-orfina-dial-1km-rehaut.jpg",
]

export function ReferenceGuidePage() {
  const { heroTitle, heroSubtitle, introduction, howToUse, references } = reference_guide

  // Create data object for HeroSection
  const heroData = {
    heroTitle,
    variantsSubtitle: heroSubtitle,
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <HeroSection
        data={heroData}
        showReferencePrefix={false}
        backgroundColor="bg-stone-100"
      />

      {/* Introduction Section - Two-column layout */}
      <AnimatedSection
        as="section"
        className="py-20 md:py-28 lg:py-32 bg-white px-4 sm:px-6 lg:px-20"
        animation="fade-in"
        delay={0}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Left: Title - fixed width on desktop */}
            <div className="md:w-[48%] lg:w-[45%] flex-shrink-0 mb-10 md:mb-0">
              <AnimatedText delay={0.1}>
                <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-black tracking-wide leading-[1.15]">
                  {introduction.title}
                </h2>
              </AnimatedText>
            </div>

            {/* Right: Paragraphs - fixed width, right aligned */}
            <div className="md:w-[45%] lg:w-[42%] space-y-6">
              {introduction.paragraphs.map((paragraph, index) => (
                <AnimatedText
                  key={index}
                  delay={0.15 + index * 0.1}
                >
                  <p className="font-sans text-stone-600 leading-[1.85] text-base md:text-[1.0625rem] lg:text-lg tracking-wide">
                    {paragraph}
                  </p>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How to Use Section */}
      <AnimatedSection
        as="section"
        className="w-full bg-stone-50 px-4 sm:px-6 lg:px-20 py-16 lg:py-[100px]"
        animation="fade-in"
        delay={0}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
          <div className="text-center">
            <AnimatedText delay={0.1}>
              <h2 className="font-sans text-2xl md:text-3xl lg:text-[44px] text-black tracking-wide leading-[1.1]">
                {howToUse.title}
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <p className="font-sans text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed mt-6 tracking-wide">
                {howToUse.description}
              </p>
            </AnimatedText>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center items-stretch">
            {howToUse.items.map((item, index) => (
              <div
                key={index}
                className="w-full max-w-[280px] h-full"
              >
                <AnimatedText
                  delay={0.2 + index * 0.1}
                  className="h-full"
                >
                  <div className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group p-4 flex flex-col items-center gap-4 border border-stone-200 h-full">
                    {/* Image Container - Square aspect ratio */}
                    <div className="w-full aspect-square overflow-hidden relative">
                      <Image
                        src={howToUseImages[index]}
                        alt={item.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                      />
                    </div>

                    {/* Content */}
                    <div className="w-full text-center">
                      <h3 className="font-sans text-lg md:text-xl font-normal text-black mb-2 tracking-wide leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-stone-600 leading-relaxed tracking-wide">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Reference Cards Section */}
      <section className="bg-white w-full">
        {references.map((ref, index) => (
          <div key={ref.id}>
            <AnimatedSection
              as="div"
              className="bg-white py-[60px] md:py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-20"
              animation="fade-in"
              delay={0}
            >
              <div className="max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[72px] items-center">
                  {/* Image Section */}
                  <AnimatedText delay={0.1 + index * 0.1}>
                    <Link
                      href={ClientRoutes.reference(ref.link)}
                      className="block group"
                    >
                      <div className="w-2/3 mx-auto lg:mx-0 lg:w-[400px] flex-shrink-0">
                        <div className="bg-stone-100 p-4 transition-shadow duration-300 shadow-sm group-hover:shadow-md border border-stone-200">
                          <div className="aspect-[400/600] relative overflow-hidden">
                            <ImageWithLoader
                              src={ref.image}
                              alt={ref.title}
                              fill
                              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                              skeletonClassName="w-full h-full"
                              sizes="(max-width: 1024px) 66vw, 400px"
                            />
                          </div>
                          <p className="text-lg text-stone-500 mt-4 text-center">
                            {ref.imageCaption || ref.title}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </AnimatedText>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col gap-12">
                    {/* Title and Subtitle */}
                    <AnimatedText delay={0.2 + index * 0.1}>
                      <div className="flex flex-col gap-3">
                        <span className="text-base font-medium text-stone-500 uppercase tracking-wider">
                          {ref.subtitle}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-black leading-[1.15] tracking-wide">
                          {ref.title}
                        </h2>
                      </div>
                    </AnimatedText>

                    {/* Description */}
                    <AnimatedText delay={0.25 + index * 0.1}>
                      <p className="font-sans text-stone-600 leading-[1.85] text-base md:text-[1.0625rem] tracking-wide">
                        {ref.description}
                      </p>
                    </AnimatedText>

                    <AnimatedText delay={0.3 + index * 0.1}>
                      <p className="font-sans text-stone-500 leading-[1.85] text-sm md:text-[0.9375rem] tracking-wide">
                        {ref.details}
                      </p>
                    </AnimatedText>

                    {/* Specifications Table */}
                    <AnimatedText delay={0.35 + index * 0.1}>
                      <div className="flex flex-col w-full">
                        <div className="bg-white border border-stone-200 p-5">
                          <h4 className="font-sans text-sm font-medium text-black uppercase tracking-wider mb-4">
                            At a Glance
                          </h4>
                          <div className="space-y-3">
                            {Object.entries(ref.specs).map(([key, value]) => (
                              <div
                                key={key}
                                className="flex items-start gap-2"
                              >
                                <Circle className="w-1.5 h-1.5 mt-2 flex-shrink-0 fill-stone-400 text-stone-400" />
                                <span className="font-sans text-sm text-stone-600">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AnimatedText>

                    {/* CTA */}
                    <AnimatedText delay={0.4 + index * 0.1}>
                      <Link
                        href={ClientRoutes.reference(ref.link)}
                        className="inline-flex items-center text-black hover:text-stone-600 transition-colors group/cta"
                      >
                        <span className="font-sans text-sm uppercase tracking-wider mr-2">
                          Explore Reference
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                      </Link>
                    </AnimatedText>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Divider between references */}
            {index < references.length - 1 && (
              <div className="flex justify-center">
                <div className="w-full max-w-[1280px] h-px bg-black/10 mx-4 sm:mx-6 lg:mx-20"></div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Timeline Section */}
      <AnimatedSection
        as="section"
        className="py-16 md:py-20 bg-stone-50"
        animation="fade-in"
        delay={0}
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-20">
          <div className="text-center mb-12">
            <AnimatedText delay={0.1}>
              <h2 className="font-sans text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-stone-900 tracking-wide leading-[1.15]">
                Production Timeline
              </h2>
            </AnimatedText>
            <AnimatedText delay={0.15}>
              <p className="font-sans text-lg text-stone-500 mt-6 tracking-wide">
                Nearly two decades of horological excellence
              </p>
            </AnimatedText>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-stone-300" />

            {/* Timeline items */}
            <div className="space-y-12">
              <AnimatedText delay={0.2}>
                <div className="flex items-center justify-center">
                  <div className="bg-white border border-stone-200 px-8 py-6 text-center relative z-10 w-full max-w-md">
                    <span className="font-sans text-stone-500 block tracking-wide">1972-1976</span>
                    <p className="font-sans text-2xl font-light text-stone-900 tracking-wide mt-2">
                      Reference 7750 Era
                    </p>
                    <p className="font-sans text-stone-400 text-sm mt-1 tracking-wide">
                      Valjoux 7750 Movement
                    </p>
                  </div>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.3}>
                <div className="flex items-center justify-center">
                  <div className="bg-white border border-stone-200 px-8 py-6 text-center relative z-10 w-full max-w-md">
                    <span className="font-sans text-stone-500 block tracking-wide">1976-1991</span>
                    <p className="font-sans text-2xl font-light text-stone-900 tracking-wide mt-2">
                      Reference 7176 & 7177 Era
                    </p>
                    <p className="font-sans text-stone-400 text-sm mt-1 tracking-wide">
                      Lemania 5100 Movement
                    </p>
                  </div>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.4}>
                <div className="flex items-center justify-center">
                  <div className="bg-white border border-stone-200 px-8 py-6 text-center relative z-10 w-full max-w-md">
                    <span className="font-sans text-stone-500 block tracking-wide">1991</span>
                    <p className="font-sans text-2xl font-light text-stone-900 tracking-wide mt-2">
                      Partnership Ends
                    </p>
                    <p className="font-sans text-stone-400 text-sm mt-1 tracking-wide">
                      End of Porsche Design × Orfina
                    </p>
                  </div>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
