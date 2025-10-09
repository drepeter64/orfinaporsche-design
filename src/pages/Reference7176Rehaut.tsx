import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";

const Reference7176Rehaut = () => {
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

  const yellowTriangleImages = [
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176%20Military.png",
      alt: "Yellow Triangle Rehaut",
      caption: "Yellow Triangle Rehaut",
    },
    {
      src: "",
      alt: "Yellow Triangle Rehaut - Close-Up",
      caption: "Yellow Triangle Rehaut - Close-Up",
      placeholder: true,
    },
  ];

  const tachymetreImages = [
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176Scrop.jpg",
      alt: "TACHYMETRE Rehaut",
      caption: "TACHYMETRE Rehaut",
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/TACHYMETRE%20Rehaut%20-%20Close-Up.jpg",
      alt: "TACHYMETRE Rehaut Close-Up",
      caption: "TACHYMETRE Rehaut Close-Up",
    },
  ];

  const oneKmImages = [
    {
      src: "",
      alt: "7176 - 1km Rehaut",
      caption: "7176 - 1km Rehaut",
      placeholder: true,
    },
    {
      src: "",
      alt: "7176 - 1km Rehaut - Close-Up",
      caption: "7176 - 1km Rehaut - Close-Up",
      placeholder: true,
    },
  ];

  const oneMileImages = [
    {
      src: "",
      alt: "7176 - 1Mile Rehaut",
      caption: "7176 - 1Mile Rehaut - To Be Updated",
      placeholder: true,
    },
    {
      src: "",
      alt: "7176 - 1Mile Rehaut - Close-Up",
      caption: "7176 - 1Mile Rehaut - Close-Up - To Be Updated",
      placeholder: true,
    },
  ];

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
              to="/references/7176"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7176
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-black font-medium">Rehaut</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Reference 7176
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Rehaut
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are multiple variations of Rehaut found across the 7176 range.
            </p>
          </div>

          {/* Rehaut Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* Yellow Triangle Rehaut */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <SectionHeading 
                title="Yellow Triangle Rehaut" 
                variant="numbered" 
                number={1} 
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176, 7176 Military
                    </p>
                  </div>

                  <div className="">
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      The Yellow Triangle rehaut features a Yellow Triangle Rehaut with the
                      word “TACHYMETER” printed between 12 and 2 O'clock.
                    </p>
                  </div>

                  {/* <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Found On:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176</strong>
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176 Military</strong>
                        </span>
                      </li>
                    </ul>
                  </div> */}
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-start">
                    {yellowTriangleImages.map((image, index) => (
                      <div key={index} className="flex flex-col items-center">
                        {image.placeholder ? (
                          <div className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                            <div className="text-center text-gray-500 p-6">
                              <div className="text-sm font-medium mb-2">Photo Coming Soon</div>
                              <div className="text-xs">{image.caption}</div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="relative group cursor-pointer"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                alt: image.alt,
                                title: image.caption,
                                subtitle: "Reference 7176 Rehaut",
                              })
                            }
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                            />

                            {/* Click indicator */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                Click to zoom
                              </div>
                            </div>
                          </div>
                        )}
                        <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                          {image.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* TACHYMETRE Rehaut */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <SectionHeading 
                title="TACHYMETRE Rehaut" 
                variant="numbered" 
                number={2} 
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-start">
                    {tachymetreImages.map((image, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div
                          className="relative group cursor-pointer"
                          onClick={() =>
                            setFullScreenImage({
                              src: image.src,
                              alt: image.alt,
                              title: image.caption,
                              subtitle: "Reference 7176 Rehaut",
                            })
                          }
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                          />

                          {/* Click indicator */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                              Click to zoom
                            </div>
                          </div>
                        </div>
                        <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                          {image.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 D, 7176 S
                    </p>
                  </div>

                  <div className="">
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      The TACHYMETRE rehaut removes the triangle at twelve o'clock, possesses an overall thicker font, and the word "TACHYMETRE" is printed between 12 and 2 O'clock.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      Additionally, the number 500 is included in the Rehaut count, while the numbers 65 and 75 are excluded.
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      The yellow triangle above 60 is replaced with a white dot.
                    </p>
                  </div>

                  {/* <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Found On:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176 D</strong>
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          <strong>7176 S</strong>
                        </span>
                      </li>
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>

            {/* 1km Rehaut */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <SectionHeading 
                title="1km Rehaut" 
                variant="numbered" 
                number={3} 
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 S
                    </p>
                  </div>

                  <div className="">
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      Some examples of the 7176 S have surfaced featuring a 1km rehaut, stamped identically to that of the 7550 reference, though made thicker in height to accommodate the new case. These are most commonly observed on civilian dials, particularly those with a "messy" Porsche Design signature. While it is established that such 7176 S variants with civilian "messy" dials and 1km rehauts do exist, additional examples are needed to confirm this with greater certainty and to better define the scope of their production.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-start">
                    {oneKmImages.map((image, index) => (
                      <div key={index} className="flex flex-col items-center">
                        {image.placeholder ? (
                          <div className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                            <div className="text-center text-gray-500 p-6">
                              <div className="text-sm font-medium mb-2">Photo Coming Soon</div>
                              <div className="text-xs">{image.caption}</div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="relative group cursor-pointer"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                alt: image.alt,
                                title: image.caption,
                                subtitle: "Reference 7176 Rehaut",
                              })
                            }
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                            />

                            {/* Click indicator */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                Click to zoom
                              </div>
                            </div>
                          </div>
                        )}
                        <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                          {image.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 1Mile Rehaut */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <SectionHeading 
                title="1Mile Rehaut" 
                variant="numbered" 
                number={4} 
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 justify-center items-start">
                    {oneMileImages.map((image, index) => (
                      <div key={index} className="flex flex-col items-center">
                        {image.placeholder ? (
                          <div className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
                            <div className="text-center text-gray-500 p-6">
                              <div className="text-sm font-medium mb-2">Photo Coming Soon</div>
                              <div className="text-xs">{image.caption}</div>
                            </div>
                          </div>
                        ) : (
                          <div
                            className="relative group cursor-pointer"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                alt: image.alt,
                                title: image.caption,
                                subtitle: "Reference 7176 Rehaut",
                              })
                            }
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="relative w-full max-w-xs h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                            />

                            {/* Click indicator */}
                            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                              <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                                Click to zoom
                              </div>
                            </div>
                          </div>
                        )}
                        <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                          {image.caption}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 S
                    </p>
                  </div>

                  <div className="">
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      Several examples of the 7176 S have surfaced featuring a 1Mile Rehaut, stamped identically to that of the 7550 reference, though made thicker in height to accommodate the new case. These have most often appeared on civilian dials, though further examples are needed to confirm this with certainty and to better understand the full scope of production for these rehauts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          {/* <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 text-center">
                Rehaut Evolution
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Early Production
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    Yellow Triangle Rehaut found on original 7176 and 7176
                    Military models, featuring distinctive yellow triangle
                    marker and standard typography.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Later Production
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    TACHYMETRE Rehaut on 7176 D and 7176 S models, with cleaner
                    design, enhanced typography, and removal of the triangle
                    marker.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Back Navigation */}
      <div className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/references/7176"
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
            Back to Reference 7176
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

export default Reference7176Rehaut;
