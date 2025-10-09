import Navigation from "../components/Navigation";
import { useState } from "react";
import ImageWithLoader from "../components/ImageWithLoader";

const Story = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images with R2 URLs
  const galleryImages = [
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Ferdinand%20Alexander%20Porsche.jpg",
      alt: "Ferdinand Alexander Porsche",
      title: "Ferdinand Alexander Porsche",
      caption: "Ferdinand Alexander Porsche"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Gianni%20Agnelli,%20was%20a%20wealthy%20Italian%20industrialist%20who%20had%20a%20penchant%20for%20wearing%20his%20watch%20on%20the%20outside%20of%20his%20shirt.jpg",
      alt: "Gianni Agnelli wearing watch",
      title: "Gianni Agnelli",
      caption: "Gianni Agnelli — as usual, wearing his Chronograph One outside of his shirt cuff."
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Gjis%20van%20Lennep%20-%201975%20German%20Grand%20Prix.jpg",
      alt: "Gjis van Lennep - 1975 German Grand Prix",
      title: "Gjis van Lennep",
      caption: "Gjis van Lennep - 1975 German Grand Prix"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Jack%20Douglas%20(who%20worked%20with%20Patti%20Smith,%20Mile%20Davis,%20Cheap%20Trick,%20and%20was%20wearing%20it%20the%20day%20John%20Lennon%20was%20photographed%20at%20The%20Hit%20Factory%20wearing%20his%20Patek%20Philippe%202499.).jpg",
      alt: "Jack Douglas",
      title: "Jack Douglas",
      caption: "Music Producer Jack Douglas, Jay Messina, and Steven Tyler"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/June%201977%20a%20Martini%20Porsche%20won%20the%2024%20hours%20of%20Le%20Mans.%20Jurgen%20Barth%20centre%20can%20be%20seen%20sporting%20the%20chronograph.%20copycrop.jpg",
      alt: "Jurgen Barth at Le Mans 1977",
      title: "Jurgen Barth",
      caption: "Jurgen Barth - 1977 Martini Porsche Wins 24 Hours of Le Mans"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Mario%20Andretti%20-%201975%20Monza%20GP.jpg",
      alt: "Mario Andretti - 1975 Monza GP",
      title: "Mario Andretti",
      caption: "Mario Andretti - 1975 Monza GP"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Mario%20Andretti%20and%20Niki%20Lauda%20-%201975%20Monaco%20GP.jpg",
      alt: "Mario Andretti and Niki Lauda - 1975 Monaco GP",
      title: "Mario Andretti and Niki Lauda",
      caption: "Mario Andretti and Niki Lauda - 1975 Monaco GP"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Peter%20Gregg%20(left)%20and%20Hurley%20Haywood%20who%20drove%20their%20Porsche%20Carrera%20for%20Bromos%20Porsche%20in%201975.jpg",
      alt: "Peter Gregg and Hurley Haywood - 1975",
      title: "Peter Gregg and Hurley Haywood",
      caption: "Peter Gregg (left) and Hurley Haywood - Racing a Porsche Carrera for Bromos Porsche in 1975"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Thierry%20Sabine%20the%20founder%20and%20organizer%20of%20the%20Paris%20to%20Dakar%20Rally%20-%202%20copy.jpg",
      alt: "Thierry Sabine - Paris to Dakar Rally founder",
      title: "Thierry Sabine",
      caption: "Thierry Sabine - Founder and Organizer of the Paris to Dakar Rally"
    },
    {
      src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/The%20Story/Top%20Gun%20-%202.jpg",
      alt: "Top Gun",
      title: "Top Gun",
      caption: "Top Gun - Naval Aviator Lieutenant Pete “Maverick” Mitchell"
    }
  ];

  const openFullScreen = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setFullScreenImage(galleryImages[imageIndex]);
  };

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % galleryImages.length
      : (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    
    setCurrentImageIndex(newIndex);
    setFullScreenImage(galleryImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 bg-porsche-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-sans text-4xl md:text-5xl font-light text-porsche-black mb-8 uppercase tracking-wider">
              Our Story
            </h1>
            <p className="font-sans text-xl text-porsche-dark-gray leading-relaxed">
              The Emergence of the Orfina Porsche Design Watch
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-16">
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                In 1972, Ferdinand Alexander "Butzi" Porsche, the legendary
                designer of the Porsche 911 and grandson of the company's
                founder, Ferdinand Porsche, launched Porsche Design as an
                independent studio specializing in industrial design. His first
                product wasn't a car or a piece of furniture; it was a
                wristwatch. But it wasn't just any timepiece: it was the world's
                first entirely blacked-out watch, a revolutionary departure from
                the shiny stainless steel and gold cases of the era. Built on
                the same design principles as the 911 - and inspired by its gauge cluster
                - this new chronograph marked the beginning of a new chapter in both
                watchmaking and design history. Ferdinand stated, "My idea was for the watch to match
                the design of the car - the 911 has a black speedometer and
                tachometer in order not to blind the driver."
              </p>
              <p className="font-sans text-porsche-dark-gray leading-relaxed mb-8 text-lg">
                To bring his vision to life, Butzi Porsche partnered with
                Umberto Maglioli, a former Porsche racing driver who had
                acquired the Swiss watch company Orfina. Their collaboration
                merged timeless automotive design with the rugged,
                purpose-built ethos of Swiss chronograph engineering. Initially
                powered by the Valjoux 7750 automatic movement, introduced in
                1973 as Valjoux's late entry into the automatic chronograph
                race, Porsche Design and Orfina were forced to adapt when the
                quartz crisis disrupted mechanical watchmaking and shuttered
                Valjoux's production. They responded by switching to the Lemania
                5100, a movement famed for its shock resistance and reliability.
                It was the only chronograph caliber at the time that could
                withstand vertical accelerations of up to 7 Gs without its
                central seconds hand halting or losing accuracy - a quality that
                made it a favorite among fighter pilots and military forces
                alike.
              </p>
              <p className="font-sans text-porsche-dark-gray leading-relaxed text-lg">
                The resulting watch wasn't just innovative in design - it was
                engineered for performance under extreme conditions. This
                synthesis of Porsche's design DNA and Orfina's mechanical grit
                gave rise to a cult classic: the Orfina Porsche Design
                Chronograph.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sans text-3xl md:text-4xl font-light text-porsche-black mb-8 uppercase tracking-wider">
              Gallery
            </h2>
            <p className="font-sans text-xl text-porsche-dark-gray leading-relaxed">
              Historic moments and personalities in Orfina Porsche Design history
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group">
                <div
                  className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  onClick={() => openFullScreen(index)}
                >
                  <ImageWithLoader
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    skeletonClassName="w-full h-64 rounded-lg"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-90 text-gray-900 px-4 py-2 rounded-full text-sm font-medium">
                        Click to zoom
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="mt-4 px-2">
                  <h3 className="font-sans text-lg font-medium text-porsche-black mb-2">
                    {image.title}
                  </h3>
                  <p className="font-sans text-sm text-porsche-dark-gray leading-relaxed">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal with Slider */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center px-16 py-8">
            {/* Close Button */}
            <button
              onClick={() => setFullScreenImage(null)}
              className="absolute top-8 right-8 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-4 rounded-full transition-all duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
              <div className="relative max-w-full max-h-[80vh] flex items-center justify-center">
                <ImageWithLoader
                  src={fullScreenImage.src}
                  alt={fullScreenImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  skeletonClassName="w-96 h-96 rounded-lg"
                />
              </div>
              
              {/* Image Info */}
              <div className="mt-6 text-center max-w-2xl">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {fullScreenImage.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {fullScreenImage.caption}
                </p>
                <div className="mt-4 text-sm text-gray-400">
                  {currentImageIndex + 1} of {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Story;
