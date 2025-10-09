import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SectionHeading from "../components/SectionHeading";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

const FullScreenModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <X size={24} />
      </button>

      {/* Image container */}
      <div className="relative max-w-full max-h-full flex flex-col items-center">
        <img
          src={image.src}
          alt={image.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
        />

        {/* Image info */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold mb-1">{image.title}</h3>
          {image.subtitle && <p className="text-gray-300">{image.subtitle}</p>}
        </div>
      </div>

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

const Reference7177CaseFinishes = () => {
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
              to="/references/7177"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7177
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Case & Finishes</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7177
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Case & Finishes
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The 7177's case is identical to that of the 7176's case, but
              differed in the available finishes with five distinct variations.
            </p>
          </div>

          {/* Measurements */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400 mb-20 sm:mb-24 lg:mb-32">
            <SectionHeading 
              title="Measurements" 
              variant="numbered" 
              number={1} 
            />

            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base">
                    <div className="text-center">
                      <div className="font-bold text-black">40.6mm</div>
                      <div className="text-gray-600">Diameter</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">44.2mm</div>
                      <div className="text-gray-600">Lug-To-Lug</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">15.3mm</div>
                      <div className="text-gray-600">Height</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Finishes */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
            <SectionHeading 
              title="Five Produced Finishes" 
              variant="numbered" 
              number={2} 
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Callouts on the left */}
              <div className="space-y-6">
                {/* Black PVD */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Black PVD
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Identical to the 7176 Finish
                    </p>
                  </div>
                </div>

                {/* Non-PVD Silver/Sablé */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Non-PVD Silver/Sablé
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Identical to the 7176 Finish
                    </p>
                  </div>
                </div>

                {/* Cadet Grey PVD */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Cadet Grey PVD
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Only Available on the 7177
                    </p>
                  </div>
                </div>

                {/* Olive Green PVD */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Olive Green PVD
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Identical to the 7176 Military Finish
                    </p>
                  </div>
                </div>

                {/* NTS PVD */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      NTS PVD
                    </h3>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-black">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Only Available on the 7177
                    </p>
                  </div>
                </div>
              </div>

              {/* Photo on the right */}
              <div className="flex flex-col items-center justify-center">
                <div
                  className="relative group cursor-pointer"
                  onClick={() =>
                    setFullScreenImage({
                      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-ColorGroup-2.jpg",
                      alt: "All 7177 Finishes",
                      title: "All 7177 Finishes",
                      subtitle:
                        "Left To Right: Black PVD, Non-PVD Silver/Sablé, Cadet Grey PVD, Olive Green PVD, NTS PVD",
                    })
                  }
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                  <img
                    src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-ColorGroup-2.jpg"
                    alt="All 7177 Finishes"
                    className="relative w-full max-w-lg h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                  />
                  {/* Click indicator */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                      Click to zoom
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-base sm:text-lg text-black font-semibold mb-1">
                    All 7177 Finishes
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Left To Right: Black PVD, Non-PVD Silver/Sablé, Cadet Grey
                    PVD, Olive Green PVD, NTS PVD
                  </p>
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
            to="/references/7177"
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
            Back to Reference 7177
          </Link>
        </div>
      </div>

      {/* Full Screen Modal - This was missing in your original code! */}
      <FullScreenModal
        image={fullScreenImage}
        onClose={() => setFullScreenImage(null)}
      />
    </div>
  );
};

export default Reference7177CaseFinishes;
