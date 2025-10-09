import { Link } from "react-router-dom";
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";
import Navigation from "../components/Navigation";
import ImageWithLoader from "../components/ImageWithLoader";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="w-full mb-8 sm:mb-12 lg:mb-16">
          <ImageWithLoader
            src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/main-page-photos/Hero-Shot-2.jpg"
            alt="OPD Logo"
            className="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] object-cover"
            skeletonClassName="w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh]"
            priority
          />
        </div>

        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black mb-6 sm:mb-8 tracking-wider uppercase leading-tight">
            Orfina Porsche
            <br />
            Design
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-600 mb-8 sm:mb-12 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto leading-relaxed">
            A documentation across the Orfina Porsche Design production,
            celebrating the storied collaboration between these two brands.
          </p>
        </div>
      </section>

      {/* Featured References */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black mb-4 sm:mb-6 uppercase tracking-wider">
              Featured References
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            <Link to="/references/7750" className="group">
              <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1">
                <div className="h-64 sm:h-72 lg:h-80 bg-gray-50 relative overflow-hidden">
                  <ImageWithLoader
                    src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/main-page-photos/Ref-7750.jpg"
                    alt="Reference 7750"
                    className="w-full h-full object-cover object-center"
                    skeletonClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-normal text-black mb-3 sm:mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                    Reference 7750
                  </h3>
                  {/* <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    The quintessential chronograph inspired by Porsche's racing
                    heritage.
                  </p> */}
                  <span className="text-black font-normal text-xs sm:text-sm uppercase tracking-wider group-hover:underline transition-all duration-300 inline-flex items-center">
                    Explore Details
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link to="/references/7176" className="group">
              <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1">
                <div className="h-64 sm:h-72 lg:h-80 bg-gray-50 relative overflow-hidden">
                  <ImageWithLoader
                    src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/main-page-photos/Ref-7176.jpg"
                    alt="Reference 7176"
                    className="w-full h-full object-cover object-center"
                    skeletonClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-normal text-black mb-3 sm:mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                    Reference 7176
                  </h3>
                  {/* <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    Classic elegance meets automotive precision in this timeless
                    piece.
                  </p> */}
                  <span className="text-black font-normal text-xs sm:text-sm uppercase tracking-wider group-hover:underline transition-all duration-300 inline-flex items-center">
                    Explore Details
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to="/references/7177"
              className="group md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:border-gray-300 rounded-lg transform group-hover:-translate-y-1">
                <div className="h-64 sm:h-72 lg:h-80 bg-gray-50 relative overflow-hidden">
                  <ImageWithLoader
                    src="https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/main-page-photos/Ref-7177.jpg"
                    alt="Reference 7177"
                    className="w-full h-full object-cover object-center"
                    skeletonClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="text-lg sm:text-xl font-normal text-black mb-3 sm:mb-4 uppercase tracking-wide transition-colors duration-300 group-hover:text-gray-800">
                    Reference 7177
                  </h3>
                  {/* <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                    Contemporary design language inspired by modern Porsche
                    aesthetics.
                  </p> */}
                  <span className="text-black font-normal text-xs sm:text-sm uppercase tracking-wider group-hover:underline transition-all duration-300 inline-flex items-center">
                    Explore Details
                    <svg
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Social Media Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center mb-8 sm:mb-12">
            <a
              href="mailto:contact@porschewatchcollection.com"
              className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 font-normal text-xs sm:text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300 inline-flex items-center gap-2 rounded-lg w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </a>
          </div>

          <div className="flex justify-center space-x-6 sm:space-x-8">
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-300 p-2"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-300 p-2"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black transition-colors duration-300 p-2"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
