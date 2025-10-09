import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";
import SectionHeading from "../components/SectionHeading";
import { useState, useEffect } from "react";

const Reference7750CaseFinishes = () => {
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

  const mk1Images = {
    powderCoat: {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750%20Powder%20Coat%20Blackcrop.jpg",
      alt: "7750 Mk. 1 Powder Coat Black",
      title: "Powder Coat Black",
    },
    // silverSable: {
    //   src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Flat-PD.jpg",
    //   alt: "7750 Mk. 1 Silver/Sable",
    //   title: "Silver/Sable",
    // },
  };

  const mk2Images = {
    blackPvd: {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-PD-Thin.jpg",
      alt: "7750 Mk. 2 Black PVD",
      title: "Black PVD",
    },
    silverSable: {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Thin-Silver.jpg",
      alt: "7750 Mk. 2 Silver/Sablé",
      title: "Silver/Sablé",
    },
  };

  const mk3Images = {
    blackPvd: {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.3-Casecrop.jpg",
      alt: "7750 Mk. 3 Black PVD",
      title: "Black PVD",
    },
    silverSable: {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.3-Case-2crop.jpg",
      alt: "7750 Mk. 3 Silver/Sablé",
      title: "Silver/Sablé",
    },
  };

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

  const PlaceholderImage = () => (
    <div className="flex justify-center">
      <div className="max-w-xs w-full">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg transform rotate-1"></div>
          <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="text-sm font-medium mb-2">Photo Coming Soon</div>
              <div className="text-xs">Silver/Sablé Example</div>
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
              to="/references/7750"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Reference 7750
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
              Reference 7750
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-200">
              Case & Finishes
            </p>
          </div>

          {/* Overview */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300 mb-8">
              There are three main case variations for the 7750. The three marks
              of the 7750 case were produced in a mix of Powder Coat Black,
              Black PVD, and Silver/Sablé finishes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Mk. 1</h3>
                <p className="text-sm text-gray-600">Orfina 7750 Flat Top – a.k.a Mk.1</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Mk. 2</h3>
                <p className="text-sm text-gray-600">
                  Orfina 7750 Transitional Round Top – a.k.a Mk. 2
                </p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">
                  Mk. 3 / Orfina Swiss S.A
                </h3>
                <p className="text-sm text-gray-600">
                  Orfina 7750 [FLAT-FACE - MODERN] - a.k.a Mk. 3 a.k.a Revised by Orfina Swiss S.A
                </p>
              </div>
            </div>
          </div>

          {/* Case Variations */}
          <div className="space-y-24 sm:space-y-32 lg:space-y-40">
            {/* Mk. 1 Section */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
              <SectionHeading
                title="7750 Flat Top – a.k.a Mk. 1"
                variant="numbered"
                number={1}
              />

              {/* Measurements */}
              <div className="mb-8 sm:mb-12">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                    Measurements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
                    <div className="text-center">
                      <div className="font-bold text-black">40.3mm</div>
                      <div className="text-gray-600">Diameter</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">42.5mm</div>
                      <div className="text-gray-600">Lug-To-Lug</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">14.2mm</div>
                      <div className="text-gray-600">Height</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <div className="mb-12 sm:mb-16">
                <div className="prose prose-gray max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    The "Flat Top" / "Flat Face" is the case that started it
                    all. The timeless design of the Porsche Design Chronograph
                    starts its story here. Dr. Ferdinand Alexander "Butzi"
                    Porsche's initial design, which as legend has it took
                    inspiration from the gauges of the original 911 that he had
                    designed in 1963. Dr. Porsche's credo was "Design must be
                    functional and functionality has to be translated visually
                    into aesthetics, without gags that have to be explained
                    first." This is often stated as "form follows function".
                    With this visual translation from a 911's gauges to a watch
                    face with a simple bezel surrounding it we see the rest of
                    the case design continue to follow this design principle.
                    The height of the "flat" face (which mimics the simple
                    bezels of VDO gauges of the day) rises from the base of the
                    case just enough to fit the handset and rehaut. The overall
                    body of the case then extends out to provide a proper
                    presence on the wrist and include integrated hidden lugs.
                    Because of the use of hidden lugs it could be machined from
                    a single block, adding rigidity and a very masculine and
                    sporty sensibility. The case geometry and dimensions are
                    clean and minimalist, lacking unnecessary flourishes or
                    embellishments. This is the birthplace of 50+ years of
                    Porsche Design DNA.
                  </p>
                </div>
              </div>

              {/* Mk. 1 Finishes */}
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Powder Coat Black
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        The original units produced between 1973 – 1975 are
                        often mistakenly believed to be the first black PVD
                        chronograph, they were in fact powder coated with black
                        paint. This coating is thicker and more easily "flaked"
                        than PVD.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Production Years:</strong> 1973-1975
                      </p>
                    </div>
                  </div>
                  <FinishImage
                    image={mk1Images.powderCoat}
                    sectionTitle="7750 Flat Top – a.k.a Mk. 1"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Silver/Sablé
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        In a Sandblasted Silver similar to that seen on the 7176 and
                        7177. <em>NOTE:</em> we don't have an example of these.
                        It's possible that Silver/Sablé only became available
                        with the PD dials. Thus, we are unsure of the exact
                        timeline of the 7750 Mk. 1 Silver/Sablé, but one can
                        assume they were made in a similar timeline to that of
                        the 7750 Mk. 1 Powder Coat Black cases.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Production Years:</strong> 1973-1975 (Not
                        Confirmed)
                      </p>
                    </div>
                  </div>
                  <PlaceholderImage />
                </div>
              </div>
            </div>

            {/* Mk. 2 Section */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
              <SectionHeading
                title="7750 Transitional Round Top – a.k.a Mk. 2"
                variant="numbered"
                number={2}
              />

              {/* Measurements */}
              <div className="mb-8 sm:mb-12">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                    Measurements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
                    <div className="text-center">
                      <div className="font-bold text-black">To Be Updated</div>
                      <div className="text-gray-600">Diameter</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">To Be Updated</div>
                      <div className="text-gray-600">Lug-To-Lug</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">To Be Updated</div>
                      <div className="text-gray-600">Height</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Description */}
              <div className="mb-12 sm:mb-16">
                <div className="prose prose-gray max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    In the mid-1970s, as a reaction to the Quartz Crisis,
                    Valjoux halted production and availability of the 7750 to
                    most manufacturers, including Orfina. Porsche Design &
                    Orfina faced a dilemma about which movement to transition to
                    in order to continue producing their watches. Dr. Porsche
                    wanted to retain an automatic chronograph movement in his
                    watch. This led them to switch to the Lemania 5100. They
                    designed a new case in order to fit the dimensions of the
                    new movement as it would not fit in the existing 7750 cases.
                    The new case would be used with the 7176 and 7177 models.
                    Some cases were produced (whether the same case vendor was
                    used or not is unknown) with the new design, but thinned to
                    fit a Valjoux 7750, which Orfina still had some inventory
                    of. Given the design similarities, it is believed that these
                    cases would date to later in 1975 - 1976.
                  </p>
                </div>
              </div>

              {/* Mk. 2 Finishes */}
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Black PVD
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        These represent the first PVD cases.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Production Years:</strong> 1975-1976
                      </p>
                    </div>
                  </div>
                  <FinishImage
                    image={mk2Images.blackPvd}
                    sectionTitle="7750 Transitional Round Top – a.k.a Mk. 2"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Silver/Sablé
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        Matte finished stainless steel.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Production Years:</strong> 1975-1975
                      </p>
                    </div>
                  </div>
                  <FinishImage
                    image={mk2Images.silverSable}
                    sectionTitle="7750 Transitional Round Top – a.k.a Mk. 2"
                  />
                </div>
              </div>
            </div>

            {/* Mk. 3 Section */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-600">
              <SectionHeading
                title="Orfina 7750 [FLAT-FACE - Service] - a.k.a Mk. 3, a.k.a Revised by Orfina Swiss S.A"
                variant="numbered"
                number={3}
              />

              {/* Measurements */}
              <div className="mb-8 sm:mb-12">
                <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                    Measurements
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm sm:text-base max-w-2xl">
                    <div className="text-center">
                      <div className="font-bold text-black">To Be Updated</div>
                      <div className="text-gray-600">Diameter</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">To Be Updated</div>
                      <div className="text-gray-600">Lug-To-Lug</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-black">To Be Updated</div>
                      <div className="text-gray-600">Height</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout and Description */}
              <div className="mb-12 sm:mb-16">
                {/* <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-4">
                    Revised by Orfina Swiss S.A
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Offered by Orfina Swiss SA as a replacement to original
                    damaged or otherwise unusable cases as a modern replacement.
                  </p>
                </div> */}

                <div className="prose prose-gray max-w-none">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Similar in design and aesthetic to the Mk. 1 "Flat Top" /
                    "Flat Face", it has a flat face. Orfina Swiss SA offers it
                    as a replacement for original damaged, or otherwise unusable
                    cases as a modern replacement. These cases feature a larger
                    crown as the replacement crown produced for Orfina Swiss SA
                    is larger than the originals and restores the
                    water-resistance of the watch. This case also features
                    larger pushers and mortices milled to fit the larger crown
                    and pushers.
                  </p>
                </div>
              </div>

              {/* Mk. 3 Finishes */}
              <div className="space-y-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Black PVD
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        Modern PVD coating applied to service replacement cases.
                      </p> */}
                      <p className="text-sm text-gray-600">
                        <strong>Production Years:</strong> 2000+
                      </p>
                    </div>
                  </div>
                  <FinishImage
                    image={mk3Images.blackPvd}
                    sectionTitle="Orfina 7750 [FLAT-FACE - Service] - a.k.a Mk. 3, a.k.a Revised by Orfina Swiss S.A"
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
                  <div className="space-y-6 text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                      <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-black">
                        Silver/Sablé
                      </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">
                        Matte finished stainless steel.
                      </p> */}
                      <p className="text-sm text-gray-600">
                        <strong>Production Years:</strong> 2000+
                      </p>
                    </div>
                  </div>
                  <FinishImage
                    image={mk3Images.silverSable}
                    sectionTitle="Orfina 7750 [FLAT-FACE - Service] - a.k.a Mk. 3, a.k.a Revised by Orfina Swiss S.A"
                  />
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

export default Reference7750CaseFinishes;
