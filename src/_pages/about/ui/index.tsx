export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-sans text-4xl md:text-5xl font-light text-black mb-8 uppercase tracking-wider">
            About Our Mission
          </h1>
          <p className="font-sans text-xl text-gray-700 leading-relaxed">
            Preserving the legacy of Porsche-inspired horology for future generations
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-sans text-2xl font-normal text-black mb-8 uppercase tracking-wide">
              Our Vision
            </h2>
            <p className="font-sans text-lg text-gray-700 leading-relaxed mb-8">
              This collection represents more than just timepieces; it embodies the pursuit of
              perfection that defines both Porsche engineering and Swiss horological craftsmanship.
              Our mission is to document, preserve, and share the rich heritage of these remarkable
              instruments with enthusiasts worldwide.
            </p>
            <p className="font-sans text-lg text-gray-700 leading-relaxed">
              Through meticulous research, detailed photography, and comprehensive documentation, we
              aim to create the definitive resource for collectors, historians, and anyone
              passionate about the intersection of automotive and horological excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-3xl font-light text-black text-center mb-20 uppercase tracking-wider">
            Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-8"></div>
              <h3 className="font-sans text-xl font-normal text-black mb-2 uppercase tracking-wide">
                Marcus Weber
              </h3>
              <p className="font-sans text-gray-700 font-normal mb-6 text-sm uppercase tracking-wider">
                Chief Curator & Researcher
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                A lifelong Porsche enthusiast with over 20 years of experience in horological
                research and documentation. Marcus brings deep expertise in vintage timepiece
                authentication and historical context.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-8"></div>
              <h3 className="font-sans text-xl font-normal text-black mb-2 uppercase tracking-wide">
                Elena Rodriguez
              </h3>
              <p className="font-sans text-gray-700 font-normal mb-6 text-sm uppercase tracking-wider">
                Photography Director
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                Professional photographer specializing in luxury timepieces and automotive subjects.
                Elena's exceptional eye for detail captures the essence and craftsmanship of each
                piece in our collection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 mx-auto mb-8"></div>
              <h3 className="font-sans text-xl font-normal text-black mb-2 uppercase tracking-wide">
                Thomas Mitchell
              </h3>
              <p className="font-sans text-gray-700 font-normal mb-6 text-sm uppercase tracking-wider">
                Technical Specialist
              </p>
              <p className="font-sans text-gray-700 leading-relaxed">
                Master watchmaker and movement specialist with extensive experience in vintage
                chronograph restoration. Thomas provides technical expertise and movement
                authentication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-sans text-2xl font-normal text-black mb-8 uppercase tracking-wide">
            Collaboration & Credits
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-xl font-normal text-black mb-4 uppercase tracking-wide">
                Special Thanks
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
                This project would not be possible without the generous support and expertise of
                collectors, historians, and enthusiasts worldwide. We extend our gratitude to:
              </p>
              <ul className="font-sans text-lg text-gray-700 space-y-3 ml-6">
                <li>• The Porsche Design Archives for historical documentation access</li>
                <li>• Private collectors who shared their rare pieces for documentation</li>
                <li>• Vintage watch specialists who provided technical expertise</li>
                <li>• Photography studios that facilitated our imaging sessions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans text-xl font-normal text-black mb-4 uppercase tracking-wide">
                Contributors
              </h3>
              <p className="font-sans text-lg text-gray-700 leading-relaxed">
                We welcome contributions from fellow enthusiasts, collectors, and researchers. If
                you have additional information, rare pieces to document, or corrections to our
                existing documentation, please don't hesitate to reach out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-sans text-3xl font-light text-white mb-8 uppercase tracking-wider">
            Get In Touch
          </h2>
          <p className="font-sans text-xl text-gray-300 mb-12 leading-relaxed">
            Have a piece to share? Questions about our research? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:contact@porschewatchcollection.com"
              className="bg-white text-black px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="border border-white text-white px-8 py-4 font-sans font-normal text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all"
            >
              Follow Our Research
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
