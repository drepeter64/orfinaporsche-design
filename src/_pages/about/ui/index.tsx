"use client"

import { useEffect, useState } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { about_page } from "@/shared/data"
// import SectionOverview from "@/components/SectionOverview"

export function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        className={`relative flex flex-col items-center justify-center min-h-screen transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="w-full relative min-h-screen">
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

        {/*<div className="text-center px-4 sm:px-6 lg:px-8">*/}
        {/*  <h1*/}
        {/*    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-8 tracking-wider uppercase leading-tight"*/}
        {/*    dangerouslySetInnerHTML={{ __html: about_page.hero.title }}*/}
        {/*  ></h1>*/}
        {/*  <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">*/}
        {/*    <SectionOverview text={about_page.hero.subtitle} />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>

      <section
        className={`py-20 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="mb-16">
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
              This website was created by <b>Drew Peterson</b>, with the invaluable expertise and
              contributions of long-time Orfina Porsche Design collectors — Alan Fronshtein, David
              [Redacted], and Paul Hyde.
            </p>
          </div>
          <div>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
              We welcome fellow enthusiasts, researchers, and collectors to connect with us -
              whether to share discoveries, clarify references, or, importantly, share
              original-owner watches. Every verified example helps us refine production timelines
              and better understand the evolution of these references and dial variations.
            </p>
          </div>
        </div>
      </section>

      <section
        className={`py-20 bg-gray-50 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <p className="font-sans text-xl text-gray-700 mb-12 leading-relaxed">
            For a deeper look into Drew's collecting journey and his perspective on the Orfina
            Porsche Design legacy, watch his video with Hodinkee below:
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <iframe
              className="w-full"
              width="560"
              height="480"
              src="https://www.youtube.com/embed/A3MZGCOAWmc?si=8p1_tg4e9YqH8ix_"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section
        className={`py-20 bg-black transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <h2 className="font-sans text-3xl font-light text-white mb-8 uppercase tracking-wider">
            Get In Touch
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-12 leading-relaxed">
            You can reach out via the contact form below or message Drew directly on Instagram at
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.instagram.com/BFMOTORCLUB"
              target={"_blank"}
              className="bg-white text-black px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              @BFMOTORCLUB
            </a>
          </div>
        </div>
      </section>

      {/*
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-sans text-2xl font-normal text-black mb-8 uppercase tracking-wide">
              Our Vision
            </h2>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
              This collection represents more than just timepieces; it embodies the pursuit of
              perfection that defines both Porsche engineering and Swiss horological craftsmanship.
              Our mission is to document, preserve, and share the rich heritage of these remarkable
              instruments with enthusiasts worldwide.
            </p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
              Through meticulous research, detailed photography, and comprehensive documentation, we
              aim to create the definitive resource for collectors, historians, and anyone
              passionate about the intersection of automotive and horological excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-light text-black text-center mb-20 uppercase tracking-wider">
            Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-8"></div>
              <h3 className="font-sans text-xl font-normal text-black mb-2 uppercase tracking-wide">
                Marcus Weber
              </h3>
              <p className="font-sans text-gray-700 font-normal mb-6 text-sm uppercase tracking-wider">
                Chief Curator & Researcher
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                A lifelong Porsche enthusiast with over 20 years of experience in horological
                research and documentation. Marcus brings deep expertise in vintage timepiece
                authentication and historical context.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-8"></div>
              <h3 className="font-sans text-xl font-normal text-black mb-2 uppercase tracking-wide">
                Elena Rodriguez
              </h3>
              <p className="font-sans text-gray-700 font-normal mb-6 text-sm uppercase tracking-wider">
                Photography Director
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                Professional photographer specializing in luxury timepieces and automotive subjects.
                Elena's exceptional eye for detail captures the essence and craftsmanship of each
                piece in our collection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-8"></div>
              <h3 className="font-sans text-xl font-normal text-black mb-2 uppercase tracking-wide">
                Thomas Mitchell
              </h3>
              <p className="font-sans text-gray-700 font-normal mb-6 text-sm uppercase tracking-wider">
                Technical Specialist
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                Master watchmaker and movement specialist with extensive experience in vintage
                chronograph restoration. Thomas provides technical expertise and movement
                authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl font-normal text-black mb-8 uppercase tracking-wide">
            Collaboration & Credits
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-xl font-normal text-black mb-4 uppercase tracking-wide">
                Special Thanks
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                This project would not be possible without the generous support and expertise of
                collectors, historians, and enthusiasts worldwide. We extend our gratitude to:
              </p>
              <ul className="font-sans text-lg text-gray-700 space-y-3 ml-6">
                <li>• The Porsche Design Archives for historical documentation access</li>
                <li>• Private collectors who shared their rare pieces for documentation</li>
                <li>• Vintage watch specialists who provided technical expertise</li>
                <li>• Photography studios that facilitated our imaging sessions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xl font-normal text-black mb-4 uppercase tracking-wide">
                Contributors
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                We welcome contributions from fellow enthusiasts, collectors, and researchers. If
                you have additional information, rare pieces to document, or corrections to our
                existing documentation, please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-3xl font-light text-white mb-8 uppercase tracking-wider">
            Get In Touch
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-12 leading-relaxed">
            Have a piece to share? Questions about our research? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@porschewatchcollection.com"
              className="bg-white text-black px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="border border-white text-white px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              Follow Our Research
            </a>
          </div>
        </div>
      </section>
      */}
    </div>
  )
}
