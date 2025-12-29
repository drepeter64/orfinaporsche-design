import { DetailedHTMLProps, HTMLAttributes } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { Circle } from "lucide-react"

export const BraceletsBodySection: React.FC<BraceletsBodySectionProps> = ({
  data,
  setFullScreenImage,
}) => {
  return (
    <div className="flex flex-col gap-16">
      {/* Mk. 1 Bracelets */}
      {data.bracelets &&
        data.bracelets.map((item, index) => (
          <AnimatedSection
            key={index}
            animation="fade-in"
            delay={0}
            className="flex flex-col gap-8"
          >
            {/* Section Header */}
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-light text-stone-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black tracking-wide">
                {item.title}
              </h2>
            </div>

            {item.info && (
              <AnimatedText delay={0.1}>
                <div className="bg-stone-50 border border-stone-200 px-6 py-5">
                  <p className="text-base sm:text-lg text-stone-600 leading-relaxed">{item.info}</p>
                </div>
              </AnimatedText>
            )}

            {/* Spring-loaded expansion clasp */}
            <div className="flex flex-col gap-8">
              <div className="border-l border-stone-300 pl-6">
                <AnimatedText delay={0.15}>
                  <h3 className="text-xl sm:text-2xl text-black mb-4 tracking-wide">
                    Spring-loaded Expansion Clasp
                  </h3>
                </AnimatedText>
                <div className="space-y-4">
                  <AnimatedText delay={0.2}>
                    <p className="text-stone-600">
                      <span className="font-medium text-stone-700">Years of Production:</span> Some
                      portion of the Orfina-dial run, but not all of it. Having this bracelet MAY
                      signify an early example.
                    </p>
                  </AnimatedText>
                  <AnimatedText delay={0.25}>
                    <ul className="space-y-2 text-stone-600 ml-1">
                      <li className="flex items-start gap-2">
                        <Circle className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 fill-stone-400 text-stone-400" />
                        <span>
                          There are a few variations of these, including units sporting 1 "bump" in
                          the folding part, and units sporting 2 "bumps"
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Circle className="w-1.5 h-1.5 mt-2.5 flex-shrink-0 fill-stone-400 text-stone-400" />
                        <span>There are also 2 known clasp covers varying in length</span>
                      </li>
                    </ul>
                  </AnimatedText>
                </div>

                {/* Bracelet Image Galleries */}
                <div className="mt-8 space-y-8">
                  <div>
                    <AnimatedText delay={0.3}>
                      <h4 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                        Mk 1 Orfina Spring One Bump short/long (Powder Coat)
                      </h4>
                    </AnimatedText>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-Orfina-Backcrop.jpg",
                          title: "MK1 Orfina Back",
                        },
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-Orfina-Extended-1crop.jpg",
                          title: "MK1 Orfina Extended 1",
                        },
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-Orfina-Extended-2crop.jpg",
                          title: "MK1 Orfina Extended 2",
                        },
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-Orfina-Frontcrop.jpg",
                          title: "MK1 Orfina Front",
                        },
                      ].map((image, imgIndex) => (
                        <AnimatedText
                          key={imgIndex}
                          delay={0.35 + imgIndex * 0.05}
                        >
                          <div
                            className="relative group cursor-pointer overflow-hidden border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                original: image.src,
                                alt: image.title,
                                title: image.title,
                                subtitle: "Mk. 1 Spring One Bump",
                              })
                            }
                          >
                            <ImageWithLoader
                              src={image.src}
                              alt={image.title}
                              className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                              skeletonClassName="w-full h-32"
                            />
                          </div>
                        </AnimatedText>
                      ))}
                    </div>
                  </div>

                  <div>
                    <AnimatedText delay={0.5}>
                      <h4 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                        Mk 1 Orfina Spring Two Bump short/long (Powder Coat)
                      </h4>
                    </AnimatedText>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Mk 1 Orfina Pincrop.jpg",
                          title: "MK1 Two Bump Pin",
                        },
                      ].map((image, imgIndex) => (
                        <AnimatedText
                          key={imgIndex}
                          delay={0.55}
                        >
                          <div
                            className="relative group cursor-pointer overflow-hidden border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            onClick={() =>
                              setFullScreenImage({
                                src: image.src,
                                original: image.src,
                                alt: image.title,
                                title: image.title,
                                subtitle: "Mk. 1 Spring Two Bump",
                              })
                            }
                          >
                            <ImageWithLoader
                              src={image.src}
                              alt={image.title}
                              className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                              skeletonClassName="w-full h-32"
                            />
                          </div>
                        </AnimatedText>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pin-adjusted clasp */}
              <div className="border-l border-stone-300 pl-6">
                <AnimatedText delay={0.6}>
                  <h3 className="text-xl sm:text-2xl text-black mb-4 tracking-wide">
                    Pin-adjusted Clasp
                  </h3>
                </AnimatedText>
                <AnimatedText delay={0.65}>
                  <p className="text-stone-600 mb-6">
                    <span className="font-medium text-stone-700">Years of Production:</span> Later
                    in the Orfina-dial run.
                  </p>
                </AnimatedText>

                <div>
                  <AnimatedText delay={0.7}>
                    <h4 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                      Mk 1 Orfina Pin (Powder Coat)
                    </h4>
                  </AnimatedText>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-PVD-Pin-Backcrop.jpg",
                        title: "MK1 PVD Pin Back",
                      },
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-PVD-Pin-Extended-1crop.jpg",
                        title: "MK1 PVD Pin Extended 1",
                      },
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-PVD-Pin-Extended-2crop.jpg",
                        title: "MK1 PVD Pin Extended 2",
                      },
                      {
                        src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK1-PVD-Pin-Frontcrop.jpg",
                        title: "MK1 PVD Pin Front",
                      },
                    ].map((image, imgIndex) => (
                      <AnimatedText
                        key={imgIndex}
                        delay={0.75 + imgIndex * 0.05}
                      >
                        <div
                          className="relative group cursor-pointer overflow-hidden border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                          onClick={() =>
                            setFullScreenImage({
                              src: image.src,
                              original: image.src,
                              alt: image.title,
                              title: image.title,
                              subtitle: "Mk. 1 Pin-adjusted",
                            })
                          }
                        >
                          <ImageWithLoader
                            src={image.src}
                            alt={image.title}
                            className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                            skeletonClassName="w-full h-32"
                          />
                        </div>
                      </AnimatedText>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-stone-200 mt-4" />
          </AnimatedSection>
        ))}

      {/* Mk. 2 Bracelets */}
      <AnimatedSection
        animation="fade-in"
        delay={0}
        className="flex flex-col gap-8"
      >
        <div className="flex items-baseline gap-4">
          <span className="text-3xl font-light text-stone-400">02</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black tracking-wide">
            Mk. 2 Bracelets
          </h2>
        </div>

        <AnimatedText delay={0.1}>
          <div className="bg-stone-50 border border-stone-200 px-6 py-5 space-y-4">
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              These bracelets were produced in a variety of finishes and with a pin-adjusted PD
              signed clasp. They were used on the transitional 7750, aka Mk. 2 case and 7176 and
              7177 models.
            </p>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              <span className="font-medium text-stone-700">Years of Production:</span> 1976-Onward
            </p>
          </div>
        </AnimatedText>

        <div className="space-y-6">
          <div>
            <AnimatedText delay={0.15}>
              <h3 className="text-lg font-medium text-stone-700 mb-4 uppercase tracking-wider">
                Finishes Available
              </h3>
            </AnimatedText>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {["Silver/Sablé", "Black PVD", "Cadet Grey PVD", "Olive Green PVD", "NTS PVD"].map(
                (finish, finishIndex) => (
                  <AnimatedText
                    key={finishIndex}
                    delay={0.2 + finishIndex * 0.05}
                  >
                    <div className="bg-white px-4 py-3 border border-stone-200 text-center">
                      <span className="text-stone-700 tracking-wide">{finish}</span>
                    </div>
                  </AnimatedText>
                ),
              )}
            </div>
          </div>

          <AnimatedText delay={0.4}>
            <div className="bg-stone-50 border border-stone-200 px-6 py-5">
              <h4 className="font-medium text-stone-700 mb-2 uppercase tracking-wider text-sm">
                Links Configuration
              </h4>
              <p className="text-stone-600">
                In Total 28 Links are found with 14 Links in Front of the Clasp Cover and 14 Links
                in Rear of the Clasp Cover.
              </p>
            </div>
          </AnimatedText>

          {/* Mk. 2 Black PVD Photos */}
          <div>
            <AnimatedText delay={0.45}>
              <h4 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                Mk. 2 Black PVD Photos
              </h4>
            </AnimatedText>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              {[
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK2-Backcrop.jpg",
                  title: "MK2 Back",
                },
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK2-Front-(2nd Example)crop.jpg",
                  title: "MK2 Front",
                },
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK2-PVD-Backcrop.jpg",
                  title: "MK2 PVD Back",
                },
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK2-PVD-Front-(2nd Example)crop.jpg",
                  title: "MK2 PVD Front",
                },
              ].map((image, imgIndex) => (
                <AnimatedText
                  key={imgIndex}
                  delay={0.5 + imgIndex * 0.05}
                >
                  <div
                    className="relative group cursor-pointer overflow-hidden border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    onClick={() =>
                      setFullScreenImage({
                        src: image.src,
                        original: image.src,
                        alt: image.title,
                        title: image.title,
                        subtitle: "Mk. 2 Black PVD",
                      })
                    }
                  >
                    <ImageWithLoader
                      src={image.src}
                      alt={image.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                      skeletonClassName="w-full h-32"
                    />
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-stone-200 mt-4" />
      </AnimatedSection>

      {/* Mk. 3 Bracelets */}
      <AnimatedSection
        animation="fade-in"
        delay={0}
        className="flex flex-col gap-8"
      >
        <div className="flex items-baseline gap-4">
          <span className="text-3xl font-light text-stone-400">03</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-black tracking-wide">
            Mk. 3 Bracelets
          </h2>
        </div>

        <AnimatedText delay={0.1}>
          <div className="bg-stone-50 border border-stone-200 px-6 py-5">
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              These bracelets were produced in both black PVD and Silver/Sablé, and featured a
              pin-adjusted PD signed clasp. We are unsure of their delivery date, but they are
              either service replacements or were delivered on later-produced 7176 and 7177 models.
            </p>
          </div>
        </AnimatedText>

        <div className="space-y-6">
          <AnimatedText delay={0.15}>
            <div className="bg-stone-50 border border-stone-200 px-6 py-5 space-y-4">
              <h4 className="font-medium text-stone-700 mb-2 uppercase tracking-wider text-sm">
                Links Configuration
              </h4>
              <p className="text-stone-600">
                In Total 28 Links are found with 14 Links in Front of the Clasp Cover and 14 Links
                in Rear of the Clasp Cover.
              </p>
              <p className="text-stone-600">
                The Mk. 3 run we believe exists for Black PVD and Silver/Sablé bracelets only, as we
                have not yet identified a second run of Cadet Grey, Olive Green, or NTS PVD
                bracelets.
              </p>
            </div>
          </AnimatedText>

          {/* Mk. 3 Photos */}
          <div>
            <AnimatedText delay={0.2}>
              <h4 className="text-base font-medium text-stone-700 mb-4 uppercase tracking-wider">
                Mk. 3 Photos
              </h4>
            </AnimatedText>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK3-PVD-Backcrop.jpg",
                  title: "MK3 PVD Back",
                },
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK3-PVD-Extended-1crop.jpg",
                  title: "MK3 PVD Extended 1",
                },
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK3-PVD-Extended-2crop.jpg",
                  title: "MK3 PVD Extended 2",
                },
                {
                  src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Bracelet-MK3-PVD-Frontcrop.jpg",
                  title: "MK3 PVD Front",
                },
              ].map((image, imgIndex) => (
                <AnimatedText
                  key={imgIndex}
                  delay={0.25 + imgIndex * 0.05}
                >
                  <div
                    className="relative group cursor-pointer overflow-hidden border border-stone-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    onClick={() =>
                      setFullScreenImage({
                        src: image.src,
                        original: image.src,
                        alt: image.title,
                        title: image.title,
                        subtitle: "Mk. 3 Bracelet",
                      })
                    }
                  >
                    <ImageWithLoader
                      src={image.src}
                      alt={image.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-105"
                      skeletonClassName="w-full h-32"
                    />
                  </div>
                </AnimatedText>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}

interface BraceletsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
