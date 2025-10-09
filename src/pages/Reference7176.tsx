import React, { useState, useEffect } from "react";
import { Clock, Calendar, Settings, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import ExploreDetailsCard from "../components/ExploreDetailsCard";
import ReferenceVariantCard from "../components/ReferenceVariantCard";

const Reference7176 = () => {
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

  const references = [
    {
      id: 1,
      title: "7176",
      years: "1976-On",
      finishes: "Black PVD, Silver/Sablé, and Polished",
      caseback: "7176 Mk. 1 Caseback",
      rehaut: "Yellow Triangle",
      dial: "Civilian Dial, and Civilian Dial - \"Short Lume\"",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/Alan-7176-1crop.jpg",
    },
    {
      id: 2,
      title: "7176 Military",
      years: "1976-On",
      finishes: "Silver/Sablé, Grey PVD, and Green PVD",
      caseback: "7176 Mk. 1 Caseback",
      rehaut: "Yellow Triangle",
      dial: "Military Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/Alan-7176-Militarycrop.jpg",
    },
    {
      id: 3,
      title: "7176 D",
      years: "1976-On",
      finishes: "Black PVD, Silver/Sablé, and Cadet Grey PVD",
      caseback: "7176 D Caseback",
      rehaut: "Tachymetre",
      dial: "Civilian Dial, and Blue by Orfina Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176D%20Front%20(wes)crop.jpg",
    },
    {
      id: 4,
      title: "7176 S",
      years: "1976-On",
      finishes: "Black PVD, Silver/Sablé, Cadet Grey PVD, and NTS PVD",
      caseback: "7176 S Caseback",
      rehaut: "Tachymetre, 1km, 1Mile",
      dial: "Civilian Dial, and Blue by Orfina Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176Scrop.jpg",
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
            <span className="text-gray-900 font-medium">Reference 7176</span>
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
                  <span className="font-normal text-gray-700">7176</span>
                </h1>
                <div className="w-24 h-1 bg-gray-900 mx-auto mb-8"></div>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  The reference 7176 entered production in circa 1976 and
                  continued onward. The new model (ref: 7176) came in a variety
                  of finishes including Black PVD, Silver/Sablé, Grey PVD and
                  Green PVD. The "upgraded" Lemania 5100 movement also featured
                  a 24-hour totalizer at 12 and a white central minutes hand
                  with a lollipop tip.
                </p> */}
              </div>
            </div>
          </div>
        </section>
        {/* Four Known References */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed text-center mb-10">
              <p>
                The reference 7176 entered production in circa 1976 and
                continued onward. The new model (ref: 7176) came in a variety of
                finishes, including Black PVD, Silver/Sablé, Polished, Grey PVD
                and Green PVD.
              </p>
              <p>
                The “upgraded” Lemania 5100 movement also featured a 24-hour
                totalizer at 12 and a white central minutes hand with a lollipop
                tip.
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                There Are Four Known References
              </h2>
              {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the four distinct references of the 7176, each with
                unique characteristics and specifications.
              </p> */}
            </div>

            {/* All References Displayed */}
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {references.map((ref, index) => (
                <ReferenceVariantCard
                  key={ref.id}
                  index={index + 1}
                  title={ref.title}
                  imageSrc={ref.image}
                  imageAlt={ref.title}
                  // subtitle="Reference 7176"
                  specifications={[
                    {
                      label: "Production Years",
                      value: ref.years,
                      icon: Calendar,
                    },
                    // { label: "Case", value: "7176", icon: Settings },
                    { label: "Finishes", value: ref.finishes, icon: Layers },
                    { label: "Caseback", value: ref.caseback, icon: Settings },
                    { label: "Rehaut", value: ref.rehaut, icon: Settings },
                    { label: "Dial", value: ref.dial, icon: Clock },
                  ]}
                  onImageClick={setFullScreenImage}
                />
              ))}
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ExploreDetailsCard
                title="Case & Finishes"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176s-PVD.jpg"
                imageAlt="Case & Finishes"
                linkTo="/references/7176/case-finishes"
              />

              <ExploreDetailsCard
                title="Caseback"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176Button-Caseback.jpg"
                imageAlt="Caseback"
                linkTo="/references/7176/caseback"
              />

              <ExploreDetailsCard
                title="Rehaut Variations"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/TACHYMETRE%20Rehaut%20-%20Close-Up.jpg"
                imageAlt="Rehaut Variations"
                linkTo="/references/7176/rehaut"
              />

              <ExploreDetailsCard
                title="Dial Variations"
                imageSrc="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176Button-Dial.jpg"
                imageAlt="Dial Variations"
                linkTo="/references/7176/dial"
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
                  Reference 7176 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Reference Number
                      </span>
                      <span className="text-gray-900">7176</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-700">
                        Production Years
                      </span>
                      <span className="text-gray-900">1976-1991</span>
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
                        <br />
                        24H Totalizer, Day, Date
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

export default Reference7176;
