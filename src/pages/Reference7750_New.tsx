import React, { useState, useEffect } from "react";
import { Clock, Calendar, Settings, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";

const Reference7750 = () => {
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

  const generations = [
    {
      id: 1,
      title: "Generation 1",
      subtitle: "The Original Pioneer",
      years: "1973-1974",
      case: "Mk. 1",
      finishes: "Powder Coat Black, Silver/Sable",
      caseback: "Mk. 1",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "Orfina Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg",
      description:
        "The inaugural generation that established the legendary 7750 lineage.",
    },
    {
      id: 2,
      title: "Generation 2",
      subtitle: "The Evolution",
      years: "1974-1974",
      case: "Mk. 1",
      finishes: "Powder Coat Black, Silver/Sable",
      caseback: "Mk. 2",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "PD Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Flat-PD.jpg",
      description:
        "A refined iteration with enhanced dial configuration and improved mechanics.",
    },
    {
      id: 3,
      title: "Generation 3",
      subtitle: "The Perfection",
      years: "1975-1976",
      case: "Mk. 2",
      finishes: "Black PVD, Silver/Sable",
      caseback: "Mk. 2, Mk. 3",
      rehaut: "1Mile, 1KM, Advertisement",
      dial: "PD Dial",
      image:
        "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-PD-Thin.jpg",
      description:
        "The pinnacle of 7750 engineering with advanced PVD coating technology.",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F1EFE8" }}>
      <Navigation />

      {/* Breadcrumb */}
      <div
        className="py-4 border-b"
        style={{ backgroundColor: "#E8E4D9", borderColor: "#D4CDB8" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm">
            <Link
              to="/"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">References</span>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-black font-medium">Reference 7750</span>
          </nav>
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, #F1EFE8 0%, #E8E4D9 100%)",
        }}
      >
        {/* Hero Section */}
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(139, 69, 19, 0.05)" }}
          ></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="text-center mb-8">
                <h1 className="font-light text-6xl md:text-8xl text-black mb-6 tracking-tight">
                  Reference{" "}
                  <span className="font-normal text-gray-800">7750</span>
                </h1>
                <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                  Discover the legendary chronograph that defined an era. Three
                  distinct generations of horological excellence, each
                  representing a milestone in precision timekeeping.
                </p> */}
              </div>
            </div>
          </div>
        </section>

        {/* Generations Overview */}
        <section className="py-16" style={{ backgroundColor: "#FEFCF7" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Three Generations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                There are three “hero” generations of the Reference 7750. We
                will outline a brief overview below, before going into deeper
                variations across all generations
              </p>
            </div>

            {/* All Generations Displayed */}
            <div className="space-y-24 sm:space-y-32 lg:space-y-40">
              {generations.map((gen, index) => (
                <div
                  key={gen.id}
                  className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000"
                >
                  <div className="flex items-center space-x-4 mb-8 sm:mb-12">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                        {gen.title}
                      </h2>
                      {/* <p className="text-lg text-gray-600 font-light">
                        {gen.subtitle}
                      </p> */}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-12">
                    {/* Image Section */}
                    <div className="relative group lg:w-auto lg:flex-shrink-0">
                      <div
                        className="relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
                        onClick={() =>
                          setFullScreenImage({
                            src: gen.image,
                            alt: `${gen.title} ${gen.subtitle}`,
                            title: gen.title,
                            subtitle: "",
                          })
                        }
                      >
                        <div className="w-full max-w-md mx-auto lg:mx-0">
                          <ImageWithLoader
                            src={gen.image}
                            alt={`${gen.title}`}
                            className="w-full h-auto object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            skeletonClassName="w-full max-w-md h-80 sm:h-96 lg:h-[450px] rounded-lg"
                          />
                        </div>
                        {/* Click indicator */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                          <div className="bg-white bg-opacity-90 text-black px-4 py-2 rounded-full text-sm font-medium">
                            Click to zoom
                          </div>
                        </div>
                      </div>

                      {/* Image Title Below */}
                      <div className="mt-4 text-center">
                        <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">
                          {gen.title}
                        </h3>
                        {/* <p className="text-sm text-gray-600">{gen.subtitle}</p> */}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8 lg:flex-1">
                      {/* <div className="transform transition-all duration-500 delay-100">
                        <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                          {gen.description}
                        </p>
                      </div> */}

                      {/* Specifications Table */}
                      <div
                        className="bg-white rounded-xl shadow-sm border overflow-hidden"
                        style={{ borderColor: "#D4CDB8" }}
                      >
                        <table className="w-full">
                          <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Calendar className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Production Years
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {gen.years}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Case
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {gen.case}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Layers className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Finishes
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {gen.finishes}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Caseback
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {gen.caseback}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Settings className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Rehaut
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {gen.rehaut}
                              </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-200">
                              <td className="px-6 py-4">
                                <div className="flex items-center">
                                  <Clock className="w-5 h-5 text-gray-600 mr-3" />
                                  <span className="font-medium text-gray-900">
                                    Dial
                                  </span>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-gray-700 text-right">
                                {gen.dial}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub-Pages Navigation */}
        <section className="py-20" style={{ backgroundColor: "#FEFCF7" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-black mb-4 uppercase tracking-wider">
                Explore Details
              </h2>
              {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover the intricate details and variations of the Reference
                7750
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Flat-PD.jpg",
                        alt: "Case & Finishes",
                        title: "Case & Finishes",
                        subtitle: "Reference 7750",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Flat-PD.jpg"
                      alt="Case & Finishes"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/references/7750/case-finishes"
                    className="p-6 flex-grow flex flex-col"
                  >
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Case & Finishes
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.2-Caseback-1.jpg",
                        alt: "Caseback",
                        title: "Caseback",
                        subtitle: "Reference 7750",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Mk.2-Caseback-1.jpg"
                      alt="Caseback"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/references/7750/caseback"
                    className="p-6 flex-grow flex flex-col"
                  >
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Caseback
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Rehaut-1mile.jpg",
                        alt: "Rehaut Variations",
                        title: "Rehaut Variations",
                        subtitle: "Reference 7750",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Rehaut-1mile.jpg"
                      alt="Rehaut Variations"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/references/7750/rehaut"
                    className="p-6 flex-grow flex flex-col"
                  >
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Rehaut Variations
                    </h3>
                  </Link>
                </div>
              </div>

              <div className="group h-full">
                <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1 h-full flex flex-col">
                  <div
                    className="h-48 bg-gray-50 relative overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFullScreenImage({
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg",
                        alt: "Dial Variations",
                        title: "Dial Variations",
                        subtitle: "Reference 7750",
                      });
                    }}
                  >
                    <ImageWithLoader
                      src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7750-photos/7750-Orfina.jpg"
                      alt="Dial Variations"
                      className="w-full h-full object-cover object-center"
                      skeletonClassName="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Click to zoom indicator */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/references/7750/dial"
                    className="p-6 flex-grow flex flex-col"
                  >
                    <h3 className="text-lg font-normal text-black mb-2 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                      Dial Variations
                    </h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        {/* <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6">Legacy Timeline</h2>
              <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
                Trace the evolution of the Reference 7750 through its defining
                moments
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-700"></div>
              {generations.map((gen, index) => (
                <div
                  key={gen.id}
                  className={`relative flex items-center mb-16 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <div className="group cursor-pointer">
                      <h3 className="text-2xl font-light mb-2 group-hover:text-gray-300 transition-colors">
                        {gen.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{gen.years}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {gen.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Technical Specifications */}
        <section className="py-16" style={{ backgroundColor: "#FEFCF7" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-light text-black mb-12 text-center">
              Technical Specifications
            </h2>

            <div
              className="rounded-2xl shadow-lg overflow-hidden"
              style={{ backgroundColor: "#F5F2E8" }}
            >
              <div className="px-8 py-6 bg-black">
                <h3 className="text-2xl font-light text-white">
                  Reference 7750 Specifications
                </h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Reference Number
                      </span>
                      <span className="text-black">7750</span>
                    </div>
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Production Years
                      </span>
                      <span className="text-black">1973-1976</span>
                    </div>
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Case Material
                      </span>
                      <span className="text-black">Stainless Steel</span>
                    </div>
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Water Resistance
                      </span>
                      <span className="text-black">100m</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Movement
                      </span>
                      <span className="text-black">Valjoux 7750</span>
                    </div>
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">Jewels</span>
                      <span className="text-black">25</span>
                    </div>
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Functions
                      </span>
                      <span className="text-black">
                        Hours, Minutes, Seconds, Chronograph, Date
                      </span>
                    </div>
                    <div
                      className="flex justify-between py-3 border-b"
                      style={{ borderColor: "#D4CDB8" }}
                    >
                      <span className="font-medium text-gray-800">
                        Serial Range
                      </span>
                      <span className="text-black">6000–9000 (approx.)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
      </div>

      {/* Back to References */}
      <div
        className="py-8 border-t"
        style={{ backgroundColor: "#FEFCF7", borderColor: "#D4CDB8" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-700 hover:text-black transition-colors"
          >
            ← Back to References
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

export default Reference7750;
