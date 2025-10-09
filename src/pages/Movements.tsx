import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "@/components/ImageWithLoader";
import ImageSlider from "@/components/ImageSlider";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const Movements = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

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
            <span className="text-black font-medium">Movements</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
              Movements
            </h1>
          </div>

          {/* Chuck's Quote */}
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                "The best car analogy I can find is the Valjoux 7750 and the
                Lemania 5100 are the Chevy 350 and the Ford 351-C of watches.
                Both are tried and true designs, nigh bulletproof when treated
                with a modicum of care, with outstanding parts availability and
                as common as dirt."
              </blockquote>
              <cite className="block mt-4 text-right text-gray-600 font-medium not-italic">
                - Chuck
              </cite>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {/* Valjoux 7750 Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Valjoux 7750"
                  variant="numbered"
                  number={1}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    General Notes:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Unveiled on July 1, 1974, the Valjoux 7750 is one of the
                        most iconic and enduring automatic chronograph movements
                        in Swiss watchmaking. Developed by Valjoux, it was
                        designed to be robust, reliable, and easier to
                        mass-produce than its column-wheel predecessors like the
                        Valjoux 72. In reaction to the proliferation of the
                        Chronomatic Cal.. 11/12/15's and the JRGK version of
                        said, Valjoux was losing market share in their wholesale
                        business because their 773x movement line was still
                        handwound. The market wanted automatic chronographs and
                        Valjoux quickly developed the 7750 as an evolution to
                        the 7734. Using Computer Aided Design (CAD) for the
                        first time in the industry, the 7750 was designed
                        quickly to be mass-produced and serve as the new
                        workhorse movement.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The original 1973 version of the movement had 17 Jewels,
                        and it includes a quick-set day and date mechanism and
                        supports chronograph functions with a central seconds
                        hand, 30-minute and 12-hour counters, and small seconds.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Despite a promising start, production of the 7750 was
                        halted just two years after launch due to the quartz
                        crisis, which devastated the mechanical watch industry.
                        However, the movement saw a revival in the 1980s as the
                        market rebounded, and it has since become a workhorse
                        for countless brands, from TAG Heuer and IWC to Tudor
                        and Sinn.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Valjoux 7750 Rotors */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Valjoux 7750 Rotors:
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Marked "ORFINA WATCH LTD SWISS" in two lines with
                          "SWISS" engraved below "ORFINA WATCH LTD" filling the
                          lower part of an insert surrounding the central
                          bushing.
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          The rotor is known to exist in 2 finishes, with the
                          earliest examples being a simple brushed metal unit.
                          These were followed by a guilloche-finished insert
                          that began being used during the Orfina dial period
                          and would continue to be used until the end of 7750
                          model production.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {/* Valjoux 7750 Rotor Mk. 1 */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.1.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.1.jpg"
                        alt="Valjoux 7750 Rotor Mk. 1"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Valjoux 7750 Rotor Mk. 1
                    </h4>
                  </div>
                </div>

                {/* Valjoux 7750 Rotor Mk. 2 */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.%201-1.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Movement-7750-Mk.%201-1.jpg"
                        alt="Valjoux 7750 Rotor Mk. 2"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Valjoux 7750 Rotor Mk. 2
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* Lemania 5100 Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Lemania 5100"
                  variant="numbered"
                  number={2}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    General Notes:
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Introduced in the late 1970s, the Lemania 5100 stands
                        out as one of the most utilitarian and function-driven
                        automatic chronograph movements of its era. Developed by
                        Lemania during a time when the mechanical watch industry
                        was being battered by the quartz crisis, the 5100 was
                        purpose-built for durability, affordability, and ease of
                        mass production. With military, aviation, and tool-watch
                        applications in mind, the movement incorporated
                        practical materials like Delrin plastic for non-critical
                        components and utilized a simplified cam and shuttle
                        chronograph mechanism - favoring reliability over visual
                        refinement.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        The movement featured 17 jewels, and a 48-hour power
                        reserve. What made the 5100 especially distinctive was
                        its central chronograph minutes and seconds hands,
                        allowing for instant readability - alongside a 12-hour
                        totaliser at six o'clock, small seconds at nine o'clock,
                        24-hour display at twelve o'clock, and day-date function
                        at three o'clock.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Militaries have strict standards for any issued
                        equipment - it must be functional, cost-efficient, and
                        robust. The Lemania 5100 checked all three boxes. To
                        enhance durability, Lemania added structural supports on
                        either side of the movement, increasing its shock
                        resistance. Uniquely, the 5100's chronograph seconds
                        hand used a direct-drive system, rather than the more
                        common intermediary wheel - eliminating a point of
                        failure. This made the movement virtually immune to
                        shock-induced stoppage under all but the most extreme
                        conditions. In fact, it was famously capable of
                        withstanding up to 7 Gs of force without its chronograph
                        hand halting, earning it a place in fighter jets,
                        cockpits, and military-issue watches.
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        Although never lauded for finishing or aesthetic beauty,
                        the Lemania 5100 earned a cult following for its
                        bulletproof engineering. It was used by brands like
                        Sinn, Bell & Ross, Fortis, Tutima, Heuer, and Omega.
                        Production ended in 2002 after Swatch Group absorbed
                        Lemania, but the 5100 remains a benchmark of
                        functionality-driven design and one of the most
                        respected "tool watch" movements ever made.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* Movement Serial Numbers Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Movement Serial Numbers"
                  variant="numbered"
                  number={3}
                />

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                  <p className="text-sm sm:text-base leading-relaxed mb-4">
                    There are two different types of serial numbers seen across
                    the 7176 and 7177 References.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Serial Type 1:</strong> The earlier movement
                        serial is a circle that is embedded in the watch
                        movement, where a sticker displays the movement's
                        serial. (Provided Serial: 4049628)
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base leading-relaxed">
                        <strong>Serial Type 2:</strong> The later version
                        features a curved metal piece on top of the movement,
                        but underneath the rotor, which has the movement's
                        serial number engraved into it. (Provided Serial:
                        4436289)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-12">
                {/* Serial Type 1 */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/L5100-Serial-Mk.1.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/L5100-Serial-Mk.1.jpg"
                        alt="Serial Type 1"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Serial Type 1
                    </h4>
                  </div>
                </div>

                {/* Serial Type 2 */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/L5100-Serial-Mk.2.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/L5100-Serial-Mk.2.jpg"
                        alt="Serial Type 2"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Serial Type 2
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16 sm:space-y-20 lg:space-y-24 mt-12">
            {/* Lemania 5100 Rotors Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <SectionHeading
                  title="Lemania 5100 Rotors"
                  variant="numbered"
                  number={4}
                />

                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Mk. 1
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Marked "ORFINA WATCH LTD SWISS" in two lines with
                          "SWISS" engraved below "ORFINA WATCH LTD".
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Found On: 7176, 7176 Military, 7176 D, 7176 S
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Mk. 2
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Marked "ORFINA WATCH LTD SWISS TKZ 5100 BW" in three
                          lines with "SWISS" engraved below "ORFINA WATCH LTD"
                          and "TKZ 5100 BW" engraved below "SWISS".
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Mk. 3
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Marked "LEMANIA WATCH LTD SWISS" in two lines with
                          "SWISS" engraved below "LEMANIA WATCH LTD".
                        </span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base leading-relaxed">
                          Service Rotor
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {/* Mk. 1 Lemania 5100 Rotor */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Mk.1Lemania%205100Rotor.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Mk.1Lemania%205100Rotor.jpg"
                        alt="Mk. 1 Lemania 5100 Rotor"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Mk. 1 Lemania 5100 Rotor
                    </h4>
                  </div>
                </div>

                {/* Mk. 2 Lemania 5100 Rotor */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Mk.2Lemania%205100Rotor.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Mk.2Lemania%205100Rotor.jpg"
                        alt="Mk. 2 Lemania 5100 Rotor"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Mk. 2 Lemania 5100 Rotor
                    </h4>
                  </div>
                </div>

                {/* Mk. 3 Lemania 5100 Rotor */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center justify-center max-w-sm w-full group">
                    <div
                      className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-zoom-in shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                      onClick={() =>
                        handleImageClick(
                          "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Mk.3Lemania%205100Rotor.jpg"
                        )
                      }
                    >
                      <ImageWithLoader
                        src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Movements/Mk.3Lemania%205100Rotor.jpg"
                        alt="Mk. 3 Lemania 5100 Rotor"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h4 className="text-lg text-center font-semibold text-gray-900 mt-4">
                      Mk. 3 Lemania 5100 Rotor
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <div className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleCloseFullScreen}
        >
          <div className="max-w-2xl max-h-2xl">
            <img
              src={fullScreenImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            onClick={handleCloseFullScreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Movements;
