import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";

const dialVariations = [
  {
    name: "Four-Logo",
    path: "/references/7177/dial/four-logo",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-4Logocrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/IMG_3298.jpg"
  },
  {
    name: "Baseline",
    path: "/references/7177/dial/baseline",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-Silvercrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-Blackcrop.jpg",
  },
  {
    name: "Nato",
    path: "/references/7177/dial/nato",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-Nato-Proper-BUNDcrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-Natocrop.jpg",
  },
  {
    name: "Swiss Shield",
    path: "/references/7177/dial/swiss-shield",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177%20Swiss%20Shieldcrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177 Swiss Shield Setcrop.jpg",
  },
  {
    name: "BUND",
    path: "/references/7177/dial/bund",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-BUNDcrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/IMG_3256crop.jpg",
  },

  {
    name: "Venezuelan MOD",
    path: "/references/7177/dial/venezuelan-mod",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-VMODcrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-VMOD-Casebackcrop.jpg",
  },

  {
    name: "Flying Tiger",
    path: "/references/7177/dial/flying-tiger",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-Tiger-Silvercrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-Tiger-Patchcrop.jpg",
  },
  {
    name: "Royal Navy",
    path: "/references/7177/dial/royal-navy",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-RoyalNavy-NTScrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/Royal Navy Bracelet -1.png",
  },

  {
    name: "UAE",
    path: "/references/7177/dial/uae",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/Pasted Graphic 17crop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/7177-UAE-Gold-Coloredcrop.jpg",
  },

  {
    name: "By Orfina",
    path: "/references/7177/dial/by-orfina",
    img1: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-ByOrfinacrop.jpg",
    img2: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/7177%20Photos/Dial%20Cover%20Photos/7177-ByOrfinacrop.jpg",
  },
];

const placeholderImg = "/lovable-uploads/opd-watch.png";

const Reference7177Dial = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

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
            <span className="text-black font-medium">Dial Variations</span>
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
              Dial Variations
            </p>
          </div>

          {/* Overview */}
          {/* <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 lg:mb-24">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
              The Reference 7177 features an extensive range of dial variations,
              each designed for specific military and governmental organizations
              worldwide.
            </p>
          </div> */}

          {/* Dial Variations Grid */}
          <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-400">
            {/* <SectionHeading 
              title="Dial Variations" 
              variant="solid" 
            /> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {dialVariations.map((variation, idx) => (
                <Link key={variation.path} to={variation.path}>
                  <div 
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-gray-200"
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative">
                      {/* Image container with larger height */}
                      <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                        {/* Default image */}
                        <img
                          src={variation.img1}
                          alt={`${variation.name} Dial`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                            hoveredCard === idx ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                          }`}
                        />
                        {/* Hover image */}
                        <img
                          src={variation.img2}
                          alt={`${variation.name} Dial Hover`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                            hoveredCard === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                          }`}
                        />
                        
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Hover indicator */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {/* <div className="bg-black/80 text-white px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
                            View Details
                          </div> */}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-black transition-colors">
                          {variation.name}
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-gray-300 to-gray-100 group-hover:from-black group-hover:to-gray-400 transition-all duration-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Information Section */}
          {/* <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 sm:p-12 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8 text-center">
                Military Heritage
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Organizational Variants
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    Each dial variation was specifically designed for different
                    military and governmental organizations, featuring unique
                    logos, markings, and specifications tailored to their
                    requirements.
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="text-lg font-medium text-black">
                    Global Distribution
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    The 7177 series was distributed worldwide to various
                    military forces, with each dial variation representing a
                    specific contract or organizational requirement.
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
            to="/references/7177"
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
            Back to Reference 7177
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reference7177Dial;
