import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import { useState, useEffect } from "react";
import ImageSlider from "@/components/ImageSlider";

const Reference7176Caseback = () => {
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
              to="/references/7176"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7176
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
              Reference 7176
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Caseback
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The 7176 series features several caseback variations, each
              representing different models and prototypes within the reference
              line.
            </p>
          </div>

          {/* Caseback Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* 7176 Mk. 1 Caseback */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <SectionHeading
                title="7176 Mk. 1 Caseback"
                variant="numbered"
                number={1}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  {/* <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 and 7176 Military
                    </p>
                  </div> */}
                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    The 7176 and 7176 Military casebacks follow the design language change of the caseback first seen on the 7750 Mk. 2 caseback
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Caseback Markings:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Perimeter Text: “7176 CHRONOGRAPH AUTOMATIC
                          WATERRESISTANT TESTED 10 ATM SHOCKPROTECTED
                          STAINLESS STEEL SWISS MADE” in one continuous circle at the
                          perimeter of the back.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Center Text: The PD logo is accompanied by the words
                          “PORSCHE DESIGN” curved around it above.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Serial Numbers: Present on these models.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3 ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed text-gray-600">
                          7176 Civilian: Serial range is 8 digits and starts with 00xxxxxx and rises sequentially.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3 ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed text-gray-600">
                          7176 Military: Serial range is 8 digits and starts with 00xxxxxx and rises sequentially.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <ImageSlider
                    images={[
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/Alan-7176-Military-Casebackcrop.jpg",
                        alt: "7176 Mk. 1 Caseback",
                        title: "7176 Mk. 1 Caseback",
                        subtitle: "Reference 7176",
                      },
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/Alan-7176-Military-Caseback%20Frame.jpg",
                        alt: "7176 Mk. 1 Caseback - View 2",
                        title: "7176 Mk. 1 Caseback - View 2",
                        subtitle: "Reference 7176",
                      },
                    ]}
                    onImageClick={setFullScreenImage}
                  />
                </div>
              </div>
            </div>

            {/* 7176 D Caseback */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <SectionHeading
                title="7176 D Caseback"
                variant="numbered"
                number={2}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <ImageSlider
                      images={[
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176D-Blue-Casebackcrop.jpg",
                          alt: "7176 Mk. 1 Caseback",
                          title: "7176 Mk. 1 Caseback",
                          subtitle: "Reference 7176",
                        },
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176D-Blue-Casebackcrop Frame.jpg",
                          alt: "7176 Mk. 1 Caseback - View 2",
                          title: "7176 Mk. 1 Caseback - View 2",
                          subtitle: "Reference 7176",
                        },
                      ]}
                      onImageClick={setFullScreenImage}
                    />
                  </div>
                  
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  {/* <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 D
                    </p>
                  </div> */}
                  {/* <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    For the 7176 D, the casebacks are identical to that of the
                    7176 Mk. 1, but with an additional “D” next to 7176.
                  </div> */}

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Caseback Markings:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Design: Identical to 7176 Mk. 1 caseback
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Distinction: Additional "D" designation next to 7176
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Serial Numbers: Present on these models.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3 ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed text-gray-600">
                          7176 D: Serial range is 8 digits and starts with 2031xxxx and rises sequentially.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 7176 S Caseback */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <SectionHeading
                title="7176 S Caseback"
                variant="numbered"
                number={3}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  {/* <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 S
                    </p>
                  </div> */}

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Caseback Markings:
                    </h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Design: Identical to 7176 Mk. 1 caseback
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Distinction: Additional "S" designation next to 7176
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Serial Numbers: Present on these models.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3 ml-6">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed text-gray-600">
                          7176 S: Serial range is 5 or 6 digits with no leading numbers and rises sequentially.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center">
                    <ImageSlider
                      images={[
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176s-caseback.jpg",
                          alt: "7176 S Caseback",
                          title: "7176 S Caseback",
                          subtitle: "Reference 7176",
                        },
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176s-caseback Frame.jpg",
                          alt: "7176 S Caseback - View 2",
                          title: "7176 S Caseback - View 2",
                          subtitle: "Reference 7176",
                        },
                      ]}
                      onImageClick={setFullScreenImage}
                    />
                  </div>
                  
                </div>

                
              </div>
              {/* Prototype Caseback - Subsection under 7176 S */}
              <div className="mt-16 pt-8">
                  <div className="mb-8">
                    <SectionHeading
                      title="Prototype Caseback"
                      variant="numbered"
                      number={4}
                    />
                  </div>

                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                     <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                       <ImageSlider
                         images={[
                           {
                             src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176 Prototype Caseback.jpg",
                             alt: "7176 Prototype Caseback",
                             title: "7176 Prototype Caseback",
                             subtitle: "Reference 7176",
                           },
                           {
                             src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176%20Prototype%20Caseback%20-1%20Frame.jpg",
                             alt: "7176 Prototype Caseback - View 2",
                             title: "7176 Prototype Caseback - View 2",
                             subtitle: "Reference 7176",
                           },
                         ]}
                         onImageClick={setFullScreenImage}
                       />
                     </div>

                     <div className="order-1 lg:order-2 space-y-6">
                       <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                         <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                           On select 7176 variants, usually those identified as prototypes, a
                           different caseback has been identified. It features a black acrylic
                           disk that is embedded into the steel caseback.
                         </p>
                       </div>

                       <div className="space-y-4">
                         <h4 className="text-lg sm:text-xl font-semibold text-black">
                           Caseback Markings:
                         </h4>
                         <ul className="space-y-3 text-gray-700">
                           <li className="flex items-start space-x-3">
                             <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm sm:text-base leading-relaxed">
                               Perimeter Text: "7176 S CHRONOGRAPH AUTOMATIC
                               WATERRESISTANT TESTED 10 ATM
                               SHOCKPROTECTED STAINLESS STEEL SWISS MADE"
                               in one continuous circle at the perimeter of the back.
                             </span>
                           </li>
                           <li className="flex items-start space-x-3">
                             <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm sm:text-base leading-relaxed">
                               Center Text: A sizeable PD logo is accompanied by the
                               words "PORSCHE DESIGN" curved around it above
                             </span>
                           </li>
                           <li className="flex items-start space-x-3">
                             <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                             <span className="text-sm sm:text-base leading-relaxed">
                               Serial Numbers: Not present on these models
                             </span>
                           </li>
                         </ul>
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

export default Reference7176Caseback;
