import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import { useState, useEffect } from "react";

const Reference7176CaseFinishes = () => {
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

  const FinishImage = ({ image, sectionTitle }) => (
    <div className="flex justify-center">
      <div
        className="relative group cursor-pointer max-w-xs"
        onClick={() =>
          setFullScreenImage({
            src: image.src,
            alt: image.alt,
            title: image.title,
            subtitle: sectionTitle,
          })
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
        <ImageWithLoader
          src={image.src}
          alt={image.alt}
          className="relative w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          skeletonClassName="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg"
        />

        {/* Click indicator */}
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
            Click to zoom
          </div>
        </div>
      </div>
    </div>
  );

  const PlaceholderImage = ({ title }) => (
    <div className="flex justify-center">
      <div className="max-w-xs w-full">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1"></div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-500 p-6">
              <div className="text-sm font-medium mb-2">Photo Coming Soon</div>
              <div className="text-xs">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

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
            <span className="text-black font-medium">Case & Finishes</span>
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
              Case & Finishes
            </p>
          </div>

          {/* Measurements */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                Measurements
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
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

          {/* Main Description */}
          <div className="mb-12 sm:mb-16">
            <div className="prose prose-gray max-w-none">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                All 7176 variants feature a "Round Top" / "Round Face" outfitted
                to fit the, at the time, new Lemania 5100 movement. The round
                nature of this case is seen as a direct evolution of the 7750 Mk. 2
                case, but it is thicker to accommodate the taller new movement.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                In particular, the case has a longer extension of the hidden lugs
                than the Transitional case. ____mm Lug-to-lug.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                There are a variety of finishes found across all 7176 variants.
              </p>
            </div>
          </div>

          {/* Case Finishes */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {/* Black PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="mb-8">
                <SectionHeading
                  title="Black PVD"
                  variant="numbered"
                  number={1}
                />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> 7176, 7176 Military, 7176 D,
                        7176 S
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176S-PVDcrop.jpg",
                        alt: "7176 S Black PVD",
                        title: "Black PVD",
                      }}
                      sectionTitle="7176 S Black PVD"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 S - Black PVD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Silver/Sablé */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="mb-8">
                <SectionHeading
                  title="Silver/Sablé"
                  variant="numbered"
                  number={2}
                />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> 7176, 7176 Military, 7176 D,
                        7176 S
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176Scrop.jpg",
                        alt: "7176 S Silver/Sablé",
                        title: "Silver/Sablé",
                      }}
                      sectionTitle="7176 S Silver/Sablé"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 S - Silver/Sablé
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Polished */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="mb-8">
                <SectionHeading
                  title="Polished"
                  variant="numbered"
                  number={3}
                />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                        <strong>Found On:</strong> 7176 (Exclusive)
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        <strong>Note:</strong> Throughout the 7176 production, a
                        variation was offered in the Silver finish production.
                        This was offered as "Polished," and examples retain a
                        higher, mirror-like, polished finish.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176%20-%20Polished%20-3crop.jpg",
                        alt: "7176 S Polished",
                        title: "Polished",
                      }}
                      sectionTitle="7176 S Polished"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 - Polished
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grey PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="mb-8">
                <SectionHeading
                  title="Grey PVD"
                  variant="numbered"
                  number={4}
                />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> 7176 Military (Exclusive)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/Alan-7176-Militarycrop.jpg",
                        alt: "7176 Military Grey PVD",
                        title: "Grey PVD",
                      }}
                      sectionTitle="7176 Military Grey PVD"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 - Grey PVD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Green PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="mb-8">
                <SectionHeading
                  title="Green PVD"
                  variant="numbered"
                  number={5}
                />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> 7176 Military (Exclusive)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176%20Military.png",
                        alt: "7176 Military Green PVD",
                        title: "Green PVD",
                      }}
                      sectionTitle="7176 Military Green PVD"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 Military - Green PVD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cadet Grey PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-900">
              <div className="mb-8">
                <SectionHeading
                  title="Cadet Grey PVD"
                  variant="numbered"
                  number={6}
                />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> 7176 D and 7176 S
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176D-Bluecrop.jpg",
                        alt: "7176 D Cadet Grey PVD",
                        title: "Cadet Grey PVD",
                      }}
                      sectionTitle="7176 D Cadet Grey PVD"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 D - Cadet Grey PVD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* NTS PVD */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1000">
              <div className="mb-8">
                <SectionHeading title="NTS PVD" variant="numbered" number={7} />
              </div>

              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        <strong>Found On:</strong> 7176 S (Exclusive)
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <FinishImage
                      image={{
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176S-NTS.jpg",
                        alt: "7176 S NTS PVD",
                        title: "NTS PVD",
                      }}
                      sectionTitle="7176 S NTS PVD"
                    />
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      7176 S - NTS PVD
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

export default Reference7176CaseFinishes;
