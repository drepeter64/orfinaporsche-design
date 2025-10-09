import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Full Screen Modal Component
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

const Reference7177DialNato = () => {
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
            <Link
              to="/references/7177/dial"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Dial Variations
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">NATO</span>
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
              NATO Dial
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Key Notes */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="space-y-5">
                    <SectionHeading 
                      title="Distinguishing Characteristics:" 
                      variant="elegant-dark" 
                    />
                    
                    <ul className="space-y-3 ">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg leading-relaxed">
                          <strong>Issued: </strong>
                          The 7177 NATO variant was reportedly issued to individuals at NATO headquarters in Brussels.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg leading-relaxed">
                          <strong>NATO Dial: </strong>
                          Features a Baseline dial, with the addition of "NATO" at 4 O'Clock.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg leading-relaxed">
                          <strong>Finish: </strong>
                          The NATO variant was always coated in Cadet Grey PVD and came on a matching grey BUND-style leather strap.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg leading-relaxed">
                          <strong>Day/Date Wheel: </strong>
                          The 7177 NATO Dial is believed to be the only variant of the 7177 reference to feature a factory white day/date wheel - a characteristic observed on select examples of this model.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Images Side by Side */}
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* 7177 NATO Dial Image (Top) */}
                    <div className="flex flex-col items-center">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Nato-Proper-BUNDcrop.jpg",
                            alt: "7177 NATO Dial",
                            title: "7177 NATO Dial",
                            subtitle: "Baseline with NATO at 4 O'Clock",
                          })
                        }
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <ImageWithLoader
                          src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Nato-Proper-BUNDcrop.jpg"
                          alt="7177 NATO Dial"
                          className="relative w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                        />
                        {/* Click indicator */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>
                      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                        7177 NATO Dial
                      </span>
                    </div>

                    {/* 7177 NATO Magazine Feature Image (Bottom) */}
                    <div className="flex flex-col items-center">
                      <div
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setFullScreenImage({
                            src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Nato-Magazinecrop.jpg",
                            alt: "7177 NATO Magazine Feature",
                            title: "7177 NATO Magazine Feature",
                            subtitle: "NATO Headquarters Brussels",
                          })
                        }
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                        <ImageWithLoader
                          src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Nato-Magazinecrop.jpg"
                          alt="7177 NATO Magazine Feature"
                          className="relative w-full h-80 sm:h-96 lg:h-[400px] object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-80 sm:h-96 lg:h-[400px] rounded-lg"
                        />
                        {/* Click indicator */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>
                      <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                        7177 NATO Magazine Feature
                      </span>
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
            to="/references/7177/dial"
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
            Back to Dial Variations
          </Link>
        </div>
      </div>

      {/* Full Screen Modal */}
      <FullScreenModal
        image={fullScreenImage}
        onClose={() => setFullScreenImage(null)}
      />
    </div>
  );
};

export default Reference7177DialNato;
