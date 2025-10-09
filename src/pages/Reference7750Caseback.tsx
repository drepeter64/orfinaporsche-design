import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import ImageSlider from "../components/ImageSlider";
import { useState, useEffect } from "react";

const Reference7750Caseback = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  // Handle escape key for full screen modal
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
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link
              to="/references/7750"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7750
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Caseback</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7750
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Caseback
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are two caseback variations found throughout the entire
              production of the Orfina 7750.
            </p>
          </div>

          {/* Caseback Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* Caseback Mk. 1 */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <SectionHeading
                    title="Caseback Mk. 1"
                    variant="numbered"
                    number={1}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7750 Mk. 1 Case with Orfina
                      Dial (Generation 1)
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Caseback Markings:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Top Text:</strong> "* CHRONOGRAPH PORSCHE DESIGN 7750 *" in the top surrounding text. Followed by another line under it marked "WATERRESISTANT TESTED 10 ATM"
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Center Text:</strong> Orfina "Flame" logo over the ORFINA brand name. Above the logo the words "PORSCHE DESIGN" are curved around it.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Bottom Text:</strong> "INCABLOC AUTOMATIC ALL STAINLESS STEEL SWISS-MADE"
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Serial Numbers:</strong> Not present on these models.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <ImageSlider
                    images={[
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750Mk1Casebackcrop.jpg",
                        alt: "7750 Caseback Mk. 1",
                        title: "7750 Caseback Mk. 1",
                        subtitle: "Reference 7750",
                      },
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750%20Mk.%201%20Caseback%20Frame.jpg",
                        alt: "7750 Caseback Mk. 1 - View 2",
                        title: "7750 Caseback Mk. 1 - View 2",
                        subtitle: "Reference 7750",
                      },
                    ]}
                    onImageClick={setFullScreenImage}
                  />
                </div>
              </div>
            </div>

            {/* Caseback Mk. 2 */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <ImageSlider
                    images={[
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.2-Caseback-1.jpg",
                        alt: "7750 Caseback Mk. 2",
                        title: "7750 Caseback Mk. 2",
                        subtitle: "Reference 7750",
                      },
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.2-Caseback-3.jpg",
                        alt: "7750 Caseback Mk. 2 - View 2",
                        title: "7750 Caseback Mk. 2 - View 2",
                        subtitle: "Reference 7750",
                      },
                    ]}
                    onImageClick={setFullScreenImage}
                  />
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <SectionHeading
                    title="Caseback Mk. 2"
                    variant="numbered"
                    number={2}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> all 7750 Cases, but only those with a PD Dial
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Caseback Markings:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Perimeter Text:</strong> "7750 CHRONOGRAPH AUTOMATIC WATERRESISTANT TESTED 10 ATM INCABLOC ALL STAINLESS STEEL SWISS MADE" in the top surrounding text.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Center Text:</strong> The PD logo is accompanied by the words "PORSCHE DESIGN" curved around it above.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>Serial Numbers:</strong> Present on these models.
                        </span>
                      </li>
                    </ul>

                    <div className="mt-6 bg-blue-50 p-4 sm:p-6 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                        <strong>Note:</strong> The design language change of the caseback is significant and sets the tone for the caseback design language that would go on to be used in 7176, 7176 Military, 7176 D, and 7176 S.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/references/7750"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Reference 7750
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

export default Reference7750Caseback;
