import React, { useState, useEffect } from "react";
import { Clock, Calendar, Settings, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import ExploreDetailsCard from "../components/ExploreDetailsCard";
import ReferenceVariantCard from "../components/ReferenceVariantCard";
import SectionHeading from "../components/SectionHeading";

const Reference7750 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setFullScreenImage(null);
      }
    };

    if (fullScreenImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [fullScreenImage]);

  const generations = [
    {
      id: 1,
      title: "Generation 1",
      subtitle: "The Original Pioneer",
      years: "1973-1974",
      case: "Mk. 1",
      finishes: "Powder Coat Black, Silver/Sablé",
      caseback: "Mk. 1",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "Orfina Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg",
      description:
        "The inaugural generation that established the legendary 7750 lineage.",
      imageCaption: '7750 Generation 1 "Orfina"',
    },
    {
      id: 2,
      title: "Generation 2",
      subtitle: "The First Evolution",
      years: "1974-1974",
      case: "Mk. 1",
      finishes: "Powder Coat Black, Silver/Sablé",
      caseback: "Mk. 2",
      rehaut: "1Mile, 1KM",
      dial: "PD Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Flat-PD.jpg",
      description:
        "The first evolution of the 7750 generation and the first emergence of the PD dial.",
      imageCaption: '7750 Generation 2 "Flat PD Dial"',
    },
    {
      id: 3,
      title: "Generation 3",
      subtitle: "The Top Gun Watch",
      years: "1975-1976",
      case: "Mk. 2",
      finishes: "Black PVD, Silver/Sablé",
      caseback: "Mk. 2",
      rehaut: "1Mile, 1KM",
      dial: "PD Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-PD-Thin.jpg",
      description:
        "The Top Gun Watch.",
      imageCaption: '7750 Generation 3 "Round PD Dial"',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">References</span>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Reference 7750</span>
          </nav>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-black/5"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center mb-8">
                <h1 className="font-light text-6xl md:text-8xl text-gray-900 mb-6 tracking-tight">
                  Reference{" "}
                  <span className="font-normal text-gray-700">7750</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Discover the legendary chronograph that defined an era. Three
                  distinct generations of horological excellence, each
                  representing a milestone in precision timekeeping.
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Generations Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Three Generations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                There are three “hero” generations of the Reference 7750. We
                will outline a brief overview below, before going into deeper
                variations across all generations
              </p>
            </div>

            {/* All Generations Displayed */}
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {generations.map((gen, index) => (
                <ReferenceVariantCard
                  key={gen.id}
                  index={index + 1}
                  title={gen.title}
                  imageSrc={gen.image}
                  imageAlt={gen.title}
                  subtitle={gen.description}
                  imageCaption={gen.imageCaption}
                  specifications={[
                    {
                      label: "Production Years",
                      value: gen.years,
                      icon: Calendar,
                    },
                    { label: "Case", value: gen.case, icon: Settings },
                    { label: "Finishes", value: gen.finishes, icon: Layers },
                    { label: "Caseback", value: gen.caseback, icon: Settings },
                    { label: "Rehaut", value: gen.rehaut, icon: Settings },
                    { label: "Dial", value: gen.dial, icon: Clock },
                  ]}
                  onImageClick={setFullScreenImage}
                />
              ))}
            </div>

            {/* Note Section */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                <h3 className="text-lg font-semibold text-black mb-4">Note:</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  This case and dial are the exact Top Gun watch. While it's unclear whether the movie prop used a 1Mile or 1KM Rehaut, we suspect it was a 1Mile version given the filming's geographic setting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Pages Navigation */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Explore Details
              </h2>
              {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the intricate details and variations of the Reference
                7750
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ExploreDetailsCard
                title="Case & Finishes"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Flat-PD.jpg"
                imageAlt="Case & Finishes"
                linkTo="/references/7750/case-finishes"
              />

              <ExploreDetailsCard
                title="Caseback"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.2-Caseback-1.jpg"
                imageAlt="Caseback"
                linkTo="/references/7750/caseback"
              />

              <ExploreDetailsCard
                title="Rehaut Variations"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Rehaut-1mile.jpg"
                imageAlt="Rehaut Variations"
                linkTo="/references/7750/rehaut"
              />

              <ExploreDetailsCard
                title="Dial Variations"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg"
                imageAlt="Dial Variations"
                linkTo="/references/7750/dial"
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">Legacy Timeline</h2>
              <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                Trace the evolution of the Reference 7750 through its defining
                moments
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              {generations.map((gen, index) => (
                <div
                  key={gen.id}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        {gen.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{gen.years}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {gen.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 bg-gray-900">
                <h3 className="text-2xl font-light text-white">
                  Reference 7750 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Reference Number
                      </span>
                      <span className="text-gray-900">7750</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Production Years
                      </span>
                      <span className="text-gray-900">1973-1976</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Case Material
                      </span>
                      <span className="text-gray-900">Stainless Steel</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Water Resistance
                      </span>
                      <span className="text-gray-900">100m</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Movement
                      </span>
                      <span className="text-gray-900">Valjoux 7750</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">Jewels</span>
                      <span className="text-gray-900">17</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Functions
                      </span>
                      <span className="text-gray-900">
                        Hours, Minutes, Seconds, Chronograph, Day, Date
                      </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Serial Range
                      </span>
                      <span className="text-gray-900">X-X (approx.)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
      </div>

      {/* Back to References */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to References
          </Link>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
          onClick={() => setFullScreenImage(null)}
        >
          <div className="relative max-w-full max-h-full flex flex-col items-center">
            {/* Close Button */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <img
              src={fullScreenImage.src}
              alt={fullScreenImage.alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-light mb-1">
                {fullScreenImage.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {fullScreenImage.subtitle}
              </p>
            </div>

            {/* Instructions */}
            <div className="mt-8 text-white text-sm opacity-75 text-center">
              Press ESC or click outside to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reference7750;
