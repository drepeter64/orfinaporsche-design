"use client"

import ImageWithLoader from "@/components/ImageWithLoader"
import AnimatedImage from "@/components/AnimatedImage"
import AnimatedText from "@/components/AnimatedText"
import AnimatedSection from "@/components/AnimatedSection"
import { about_page } from "@/shared/data"

export function AboutPage() {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section - Full width image with overlay text */}
      <section className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] lg:h-[calc(100vh-6rem)] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithLoader
            src={about_page.hero.original}
            alt={about_page.hero.alt}
            fill
            className="object-cover"
            skeletonClassName="w-full h-full"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-stone-950/90 via-stone-950/60 via-40% to-transparent" />

        {/* Content Overlay - Bottom Left */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-20 pb-8 sm:pb-10 lg:pb-12 max-w-2xl">
          <AnimatedText delay={0.2}>
            <p className="font-sans text-xs sm:text-sm tracking-[0.35em] text-white/90 uppercase mb-4">
              Behind the Collection
            </p>
          </AnimatedText>
          <AnimatedText delay={0.4}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-50 leading-[1.2] tracking-wide">
              About
            </h1>
          </AnimatedText>
        </div>
      </section>

      {/* Two-Column Content Section */}
      <section className="bg-stone-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 max-w-[1800px]">
          {/* Left Column - Large  headline */}
          <AnimatedText delay={0.1}>
            <h2 className="font-sans text-3xl sm:text-4xl text-stone-800 leading-tight ">
              A dedication to documenting
              <br className="hidden sm:block" /> Orfina Porsche Design history
            </h2>
          </AnimatedText>

          {/* Right Column - Body text */}
          <div className="space-y-6">
            <AnimatedText delay={0.2}>
              <p className="font-sans text-lg text-stone-700 leading-relaxed">
                <strong>This website was created by Drew Peterson</strong>, with the invaluable
                expertise and contributions of long-time Orfina Porsche Design collectors — Alan
                Fronshtein, David [Redacted], and Paul Hyde.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.3}>
              <p className="font-sans text-lg text-stone-700 leading-relaxed">
                We welcome fellow enthusiasts, researchers, and collectors to connect with us —
                whether to share discoveries, clarify references, or, importantly, share
                original-owner watches. Every verified example helps us refine production timelines
                and better understand the evolution of these references and dial variations.
              </p>
            </AnimatedText>
            <AnimatedText delay={0.4}>
              <p className="font-sans text-lg text-stone-700 leading-relaxed">
                As a collector, it is a pleasure and treat hearing about watches from their original
                owners and, if they are so inclined, being able to acquire them.
              </p>
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <AnimatedSection
        as="section"
        className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-20"
        animation="fade-in"
        delay={0}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center max-w-[1800px]">
          <AnimatedText delay={0.1}>
            <div>
              <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-stone-500 uppercase mb-4">
                Featured
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl text-stone-800 leading-tight  mb-6">
                A deeper look into the collecting journey
              </h2>
              <p className="font-sans text-lg text-stone-600 leading-relaxed">
                For more on Drew's perspective on the Orfina Porsche Design legacy, watch his video
                with Hodinkee.
              </p>
            </div>
          </AnimatedText>
          <AnimatedImage delay={0.2}>
            <div className="aspect-video bg-stone-200 overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/A3MZGCOAWmc?si=8p1_tg4e9YqH8ix_"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedImage>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection
        as="section"
        className="py-16 sm:py-20 bg-stone-50 px-4 sm:px-6 lg:px-20"
        animation="fade-in"
        delay={0}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 max-w-[1800px]">
          <AnimatedText delay={0.1}>
            <div>
              <p className="font-sans text-xs sm:text-sm tracking-[0.25em] text-stone-500 uppercase mb-4">
                Connect
              </p>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight ">
                Get in Touch
              </h2>
            </div>
          </AnimatedText>
          <div className="space-y-8">
            <AnimatedText delay={0.2}>
              <p className="font-sans text-lg text-stone-600 leading-relaxed mb-8">
                Reach out via email or message Drew directly on Instagram.
              </p>
            </AnimatedText>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-24">
              <AnimatedText delay={0.3}>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:drew.pbp@gmail.com"
                    className="font-sans text-xl text-stone-800 hover:text-stone-600 transition-colors underline underline-offset-4"
                  >
                    drew.pbp@gmail.com
                  </a>
                </div>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <div>
                  <p className="font-sans text-xs tracking-[0.2em] text-stone-400 uppercase mb-2">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/BFMOTORCLUB"
                    target="_blank"
                    className="font-sans text-xl text-stone-800 hover:text-stone-600 transition-colors underline underline-offset-4"
                  >
                    @BFMOTORCLUB
                  </a>
                </div>
              </AnimatedText>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
