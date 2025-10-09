import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import { useState, useEffect } from "react";

const Reference7176Dial = () => {
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
            <span className="text-black font-medium">Dial</span>
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
              Dial
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              There are multiple dial variations found across the 7176
              generation
            </p>
            <div className="mt-8 bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The 7176 dial is an update of the 7750 PD dial to match the
                subdial placement of the Lemania 5100. Notable changes include a
                12-o'clock 24-hour dial, no lume or marker at 12 o'clock because
                of the position of the subdial, and different ring printing of
                the small seconds subdial at 9 o'clock. There is additionally no
                lume at 3 o'clock.
              </p>
            </div>
          </div>

          {/* Dial Variations */}
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {/* Civilian Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <SectionHeading
                    title="Civilian Dial"
                    variant="numbered"
                    number={1}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176, 7176 D, 7176 S
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                      <p>
                        As with the 7750 PD dial, the PD logo is printed above
                        Day/Date windows and PORSCHE DESIGN is printed below
                        Day/Date windows.
                      </p>
                      <p>
                        The 7176 also ushered in a new handset that differentiated
                        from the 7750 with,
                      </p>
                      <ul className="space-y-3 text-gray-700 ml-4">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            New hour and pointed minute hands.
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Orange central chrono sweep hand.
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            "Lollipop" chrono totalizer hand.
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            <strong>Note:</strong> There exists rare 'factory made' variants of 7176D and 7176 S watches with military chrono hands.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176s-PVD-Dial.jpg",
                          alt: "7176 S with Civilian Dial",
                          title: "7176 S with Civilian Dial",
                          subtitle: "Reference 7176",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176s-PVD.jpg"
                        alt="7176 S with Civilian Dial"
                        className="relative w-full h-64 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="relative w-full h-64 rounded-lg"
                      />

                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 S with Civilian Dial
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176D%20Front%20%28wes%29crop.jpg",
                          alt: "7176 D with Civilian Dial",
                          title: "7176 D with Civilian Dial",
                          subtitle: "Reference 7176",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176D%20Front%20%28wes%29crop.jpg"
                        alt="7176 D with Civilian Dial"
                        className="relative w-full h-64 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="relative w-full h-64 rounded-lg"
                      />

                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 D with Civilian Dial
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Civilian Dial - "Messy" */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <PlaceholderImage title='7176 S with Civilian Dial - "Messy"' />
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <SectionHeading
                    title='Civilian Dial - "Messy"'
                    variant="numbered"
                    number={2}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 S
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      There are enough examples showing a variant of the civilian dial on the 7176 S featuring a messy "Porsche Design" signature. This batch of dials is usually found on Black PVD cases and features a 1km rehaut.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Civilian Dial - "Short Lume" */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176%20-%20Polished%20-3crop.jpg",
                          alt: "7176 D with Civilian Dial",
                          title: "7176 D with Civilian Dial",
                          subtitle: "Reference 7176",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176%20-%20Polished%20-3crop.jpg"
                        alt="7176 D with Civilian Dial"
                        className="relative w-full h-64 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="relative w-full h-64 rounded-lg"
                      />

                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                      7176 D with Civilian Dial
                    </span>
                  </div>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <SectionHeading
                    title='Civilian Dial - "Short Lume"'
                    variant="numbered"
                    number={3}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                      <p>
                        Examples of the 7176 Dial have been found with shorter
                        lume indices and shorter minute markers.
                      </p>
                      <p>
                        These Civilian Dial - "Short Lume" examples are found with a unique handset differentiated from all other 7176 variants with,
                      </p>
                      <ul className="space-y-3 text-gray-700 ml-4">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Black striped hour and pointed minute hands.
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Orange central chrono sweep hand with black stem.
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Orange second-hand with black stem.
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Subdial hands with black stems.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Military Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <SectionHeading
                    title="Military Dial"
                    variant="numbered"
                    number={4}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 Military
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                      <p>
                        The 7176 Military features the first appearance of the Military dial, an update of the 7176 Civilian dial. Notable changes include the introduction of the 3H logo to meet military specifications, as watches in the field utilizing Tritium (3H) lume often carry a marking on the dial indicating its use. This logo is printed in RED at 1:30 on the dial. The Porsche Design logo is also replaced by the text "MILITARY."
                      </p>
                      <p>
                        The Military dial also includes a Military handset with,
                      </p>
                      <ul className="space-y-3 text-gray-700 ml-4">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Hour and minutes hands same as 7176 Civilian
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Orange central chrono sweep hand
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Orange painted "Airplane" on a black chrono totalizer hand
                          </span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm sm:text-base leading-relaxed">
                            Orange hand used for 6 o'clock subdial
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176%20Military.png",
                        alt: "7176 Military with Military Dial",
                        title: "7176 Military with Military Dial",
                        subtitle: "Reference 7176",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176%20Military.png"
                      alt="7176 Military with Military Dial"
                      className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="relative w-full max-w-sm h-80 rounded-lg"
                    />

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-sm sm:text-base text-gray-600 text-center mt-4 font-medium">
                    7176 Military with Military Dial
                  </span>
                </div>
              </div>
            </div>

            {/* Blue by Orfina Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-800">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                  <div
                    className="relative group cursor-pointer"
                    onClick={() =>
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176D-Bluecrop.jpg",
                        alt: "7176 D with Blue by Orfina Dial",
                        title: "7176 D with Blue by Orfina Dial",
                        subtitle: "Reference 7176",
                      })
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176-photos/7176D-Bluecrop.jpg"
                      alt="7176 D with Blue by Orfina Dial"
                      className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      skeletonClassName="relative w-full max-w-sm h-80 rounded-lg"
                    />

                    {/* Click indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                    7176 D with Blue by Orfina Dial
                  </span>
                </div>

                <div className="order-1 lg:order-2 space-y-6">
                  <SectionHeading
                    title="Blue by Orfina Dial"
                    variant="numbered"
                    number={5}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> 7176 D, 7176 S
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                      <p>
                        Blue by Orfina Dials can be found on both the 7176 D and 7176 S references and share two key traits with the later 7177 models: the added "by ORFINA" inscription beneath the PORSCHE DESIGN branding, and the use of a Cadet Grey PVD finish - distinct from the Grey PVD used on the 7176 Military. On 7176 S variants, the Blue dial can also be found with a Silver/Sablé case finish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Black by Orfina Dial */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-900">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <SectionHeading
                    title="Black by Orfina Dial"
                    variant="numbered"
                    number={6}
                  />

                  <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <strong>Found On:</strong> All 7176 variants (likely
                      service dials)
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      Description:
                    </h3>
                    <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                      <p>
                        Black by Orfina dials have emerged as likely service
                        dials for all 7176 variants.
                      </p>
                      <p>
                        The font of these dials is different than both the
                        Civilian and Military dials. However, it is uniform with
                        the Blue by Orfina Dial.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="order-2 lg:order-1 flex flex-col items-center justify-center">
                    <div
                      className="relative group cursor-pointer"
                      onClick={() =>
                        setFullScreenImage({
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176-byOrfina-Black-Dial Frame.jpg",
                          alt: "Black by Orfina Dial",
                          title: "Black by Orfina Dial",
                          subtitle: "Reference 7176",
                        })
                      }
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300"></div>
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7176%20Photos/7176-byOrfina-Black-Dial Frame.jpg"
                        alt="Black by Orfina Dial"
                        className="relative w-full max-w-sm h-80 rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        skeletonClassName="relative w-full max-w-sm h-80 rounded-lg"
                      />

                      {/* Click indicator */}
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                          Click to zoom
                        </div>
                      </div>
                    </div>
                    <span className="block text-base sm:text-lg text-gray-600 text-center mt-4 font-medium">
                      Black by Orfina Dial
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

export default Reference7176Dial;
