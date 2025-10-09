import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import ExploreDetailsCard from "../components/ExploreDetailsCard";

const Reference7177 = () => {
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
            <span className="text-gray-900 font-medium">Reference 7177</span>
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
                <h1 className="font-light text-5xl md:text-7xl text-gray-900 mb-6 tracking-tight">
                  Reference{" "}
                  <span className="font-normal text-gray-700">7177</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Text Content */}
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The 7177 Military Chronograph was introduced in 1977 and was
                  likely produced until 1991, when Porsche Design ended its
                  partnership with Orfina. Subsequently, the "Prestige Watch
                  International" signed pieces emerged.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The 7177 was available for retail purchase over the counter as
                  well as issued directly through military organizations, as
                  evidenced by the multiple military variants. However, these
                  watches are often considered quasi-issued as the Baseline
                  military dial was made available to the public to capitalize
                  on the potential military affiliation.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  There are ten main 7177 or military variants. These variants
                  each feature the three dial elements noted on the Baseline
                  dial (having "MILITARY", "PORSCHE DESIGN", and the "circle-3H
                  logo" printed on the dial) but have additional dial printing,
                  and/or caseback engravings unique to each.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  The 7177 military variants were identical to the civilian
                  7176s variant, including the case, except in five main ways:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700 ml-4">
                  <li>Available Finishes</li>
                  <li>Caseback Engravings</li>
                  <li>
                    Central Chronograph-Minutes Hand and Hour Chronograph Hands
                  </li>
                  <li>Rehaut</li>
                  <li>Dial</li>
                </ol>
              </div>

              {/* Group Photo */}
              <div className="relative">
                <div
                  className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg"
                  onClick={() =>
                    setFullScreenImage({
                      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Group-1.jpg",
                      alt: "Reference 7177 Military Variants Group Photo",
                      title: "Reference 7177",
                      subtitle: "7177 Military Variants",
                    })
                  }
                >
                  <ImageWithLoader
                    src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Group-1.jpg"
                    alt="Reference 7177 Military Variants Group Photo"
                    className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    skeletonClassName="w-full h-80 sm:h-96 lg:h-[500px] rounded-lg"
                  />
                  {/* Click indicator */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                      Click to zoom
                    </div>
                  </div>
                </div>

                {/* Image Caption */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                    7177 Military Variants
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Pages Navigation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-gray-900 mb-12 uppercase tracking-wider">
                Explore Details
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ExploreDetailsCard
                title="Case & Finishes"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-ColorGroup-1.jpg"
                imageAlt="Case & Finishes"
                linkTo="/references/7177/case-finishes"
              />
              <ExploreDetailsCard
                title="Caseback"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Black-Casebackcrop.jpg"
                imageAlt="Caseback"
                linkTo="/references/7177/caseback"
              />
              <ExploreDetailsCard
                title="Rehaut Variations"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Crooked%20Seven%20Rehaut-Close-Up-.jpg"
                imageAlt="Rehaut Variations"
                linkTo="/references/7177/rehaut"
              />
              <ExploreDetailsCard
                title="Dial Variations"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-MilitaryGroup-2crop.jpg"
                imageAlt="Dial Variations"
                linkTo="/references/7177/dial"
              />
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
              Technical Specifications
            </h2>

            <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="px-8 py-6 bg-gray-900">
                <h3 className="text-2xl font-light text-white">
                  Reference 7177 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Reference Number
                      </span>
                      <span className="text-gray-900">7177</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Production Years
                      </span>
                      <span className="text-gray-900">1977-1991</span>
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
                      <span className="text-gray-900">Lemania 5100</span>
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
                      Hours, Minutes, Seconds, Chronograph, 
                      <br />24H Totalizer, Day, Date
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

export default Reference7177;
