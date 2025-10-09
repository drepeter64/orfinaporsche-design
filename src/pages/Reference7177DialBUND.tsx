import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import ImageSlider from "../components/ImageSlider";
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

const Reference7177DialBUND = () => {
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
            <span className="text-black font-medium">BUND</span>
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
              BUND Dial
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* General Notes */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="space-y-8">
                <SectionHeading 
                  title="General Notes:" 
                  variant="elegant-dark" 
                />
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      The BUND variant is short for "Bundeswehr", the German Federal Defense Force to whom they were issued.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      BUND examples are seen in a variety of finishes and were always issued on a BUND-style strap.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caseback Markings */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="space-y-8">
                <SectionHeading 
                  title="Caseback Markings:" 
                  variant="elegant-dark" 
                />
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      On these examples, the caseback does have "BUND" and an appropriate NSN engraving.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      Two known NSNs are found on the BUND variant: the initial NSN is 6645-12-182-1763, and the second is 6645-12-194-8642.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      Some BUND examples are "double-struck," meaning the initial NSN is crossed out, and the second NSN is added. This was presumably done at some maintenance event during the watch's lifetime. BUND variants also do not have the "7177" ref# engraving on the caseback.
                    </span>
                  </li>
                </ul>

                {/* Caseback Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177%20BUND%20Singe-Struck%20Caseback.jpg",
                          alt: "BUND Single-Struck Caseback",
                          title: "BUND Single-Struck Caseback",
                          subtitle: "Initial NSN 6645-12-182-1763",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177%20BUND%20Singe-Struck%20Caseback.jpg"
                        alt="BUND Single-Struck Caseback"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      BUND Single-Struck Caseback
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177 BUND Singe-Struck Caseback Frame.jpg",
                          alt: "BUND Single-Struck Caseback Frame",
                          title: "BUND Single-Struck Caseback Frame",
                          subtitle: "Initial NSN 6645-12-182-1763",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177 BUND Singe-Struck Caseback Frame.jpg"
                        alt="BUND Single-Struck Caseback Frame"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      BUND Single-Struck Caseback Frame
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Double-Strike-Bundcrop.jpg",
                          alt: "BUND Double-Struck Caseback",
                          title: "BUND Double-Struck Caseback",
                          subtitle: "Original NSN Crossed Out, New NSN Added",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Double-Strike-Bundcrop.jpg"
                        alt="BUND Double-Struck Caseback"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      BUND Double-Struck Caseback
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dial Variations */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="space-y-8">
                <SectionHeading 
                  title="Dial Variations:" 
                  variant="elegant-dark" 
                />
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      BUND examples have been found to be produced with both the Baseline Mk. 1 Dial and Baseline Mk. 2 Dials
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      <strong>Baseline Mk. 2 Dial:</strong> Lacked "Porsche Design" text, which was replaced with "CHRONOGRAPH" text.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      <strong>Service Dial:</strong> Some BUND examples sent in for service, had their dials replaced with Service Dials. These used early Luminova and lacked "Porsche Design" text, again replaced by "CHRONOGRAPH" text, but also lacked the "3H" marking because the dials did not use tritium. Luminova dial examples will also bear double-struck casebacks.
                    </span>
                  </li>
                </ul>

                {/* Dial Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-BUNDcrop.jpg",
                          alt: "7177 BUND - Baseline Mk. 1 Dial",
                          title: "7177 BUND - Baseline Mk. 1 Dial",
                          subtitle: "Original Configuration",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-BUNDcrop.jpg"
                        alt="7177 BUND - Baseline Mk. 1 Dial"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7177 BUND - Baseline Mk. 1 Dial
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-VMODcrop.jpg",
                          alt: "7177 BUND - Baseline Mk. 2 Dial",
                          title: "7177 BUND - Baseline Mk. 2 Dial",
                          subtitle: "Porsche Design Replaced with CHRONOGRAPH",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-VMODcrop.jpg"
                        alt="7177 BUND - Baseline Mk. 2 Dial"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7177 BUND - Baseline Mk. 2 Dial
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-MK2-ServiceDialcrop.jpg",
                          alt: "7177 BUND - Service Dial",
                          title: "7177 BUND - Service Dial",
                          subtitle: "Luminova, No 3H Marking",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-MK2-ServiceDialcrop.jpg"
                        alt="7177 BUND - Service Dial"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7177 BUND - Service Dial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="space-y-8">
                <SectionHeading 
                  title="Accessories:" 
                  variant="elegant-dark" 
                />
                
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      The BUND examples were also issued in a box that bore the initial NSN 6645-12-182-1763.
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm sm:text-lg leading-relaxed">
                      There are also a variety of BUND straps found across examples. Please refer to the Components - BUND page for more information on these straps.
                    </span>
                  </li>
                </ul>

                {/* Box Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Bund-Box-2crop.jpg",
                          alt: "7177 BUND Box 1",
                          title: "7177 BUND Box 1",
                          subtitle: "NSN 6645-12-182-1763",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Bund-Box-2crop.jpg"
                        alt="7177 BUND Box 1"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7177 BUND Box 1
                    </span>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Bund-Box-3crop.jpg",
                          alt: "7177 BUND Box 2",
                          title: "7177 BUND Box 2",
                          subtitle: "Military Issue Packaging",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-Bund-Box-3crop.jpg"
                        alt="7177 BUND Box 2"
                        className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="w-full h-64 sm:h-80 lg:h-96 rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7177 BUND Box 2
                    </span>
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

export default Reference7177DialBUND;
