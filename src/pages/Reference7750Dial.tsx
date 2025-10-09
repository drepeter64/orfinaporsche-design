import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SectionHeading from "../components/SectionHeading";
import { useState, useEffect } from "react";

const Reference7750Dial = () => {
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
            <span className="text-black font-medium">Dial</span>
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
              Dial
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are two dial variations found on the Reference 7750.
            </p>
          </div>

          {/* Dial Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* Orfina Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <SectionHeading
                    title="Orfina Dial"
                    variant="numbered"
                    number={1}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-6">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <b>Found On:</b> Mk. 1 Case with Mk. 1 caseback
                    </p>
                  </div>

                  <div className="prose prose-gray max-w-none space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      The First is the Orfina Dial, the dial that started it all.
                      "ORFINA" is printed above the Day/Date windows, and "PORSCHE
                      DESIGN" is printed below the windows.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      It is solely found on the Mk. 1 Case with a Mk. 1 Caseback
                      and either rehaut.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg",
                        alt: "7750 Orfina Dial",
                        title: "Orfina Dial",
                        subtitle: "Reference 7750",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <img
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg"
                      alt="7750 Orfina Dial"
                      className="relative w-full max-w-sm h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7750 Orfina Dial
                  </span>
                </div>
              </div>
            </div>

            {/* PD Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-PD-Thin.jpg",
                        alt: "7750 PD Dial",
                        title: "PD Dial",
                        subtitle: "Reference 7750",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <img
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-PD-Thin.jpg"
                      alt="7750 PD Dial"
                      className="relative w-full max-w-sm h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                    />

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7750 PD Dial
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <SectionHeading
                    title="PD Dial (Found across all case marks and Mk. 2 Casebacks)"
                    variant="numbered"
                    number={2}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-6">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <b>Found On:</b> All case marks and Mk. 2 caseback
                    </p>
                  </div>

                  <div className="prose prose-gray max-w-none space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      “PD” is printed above the Day/Date windows and “PORSCHE
                      DESIGN” is printed below the windows.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      This dial can be found on any 7750 case, caseback or
                      rehaut variation except for the original Mk. 1 Caseback
                      found exclusively paired with an Orfina dial.
                    </p>
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

export default Reference7750Dial;
