import { DetailedHTMLProps, HTMLAttributes } from "react"
import ImageWithLoader from "@/components/ImageWithLoader"
import { ComponentsTypeData, ImageInfo } from "@/shared/types"

export const BraceletsBodySection: React.FC<BraceletsBodySectionProps> = ({
  data,
  // setFullScreenImage,
}) => {
  return (
    <>
      {/* Mk. 1 Bracelets */}
      {data.bracelets &&
        data.bracelets.map((item, index) => (
          <div key={index}>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
                {item.title}
              </h2>
            </div>

            {item.info && (
              <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{item.info}</p>
              </div>
            )}

            {/* Spring-loaded expansion clasp */}
            <div className="space-y-8">
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
                  Spring-loaded Expansion Clasp
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Years of Production:</strong> Some portion of the Orfina-dial run, but
                    not all of it. Having this bracelet MAY signify an early example.
                  </p>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        There are a few variations of these, including units sporting 1 "bump" in
                        the folding part, and units sporting 2 "bumps"
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>There are also 2 known clasp covers varying in length</span>
                    </li>
                  </ul>
                </div>

                {/* Bracelet Image Galleries */}
                <div className="mt-8 space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-4">
                      Mk 1 Orfina Spring One Bump short/long (Powder Coat)
                    </h4>
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
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer"
                          // onClick={() =>
                          //   setFullScreenImage({
                          //     src: image.src,
                          //     alt: image.title,
                          //     title: image.title,
                          //     subtitle: "Mk. 1 Spring One Bump",
                          //   })
                          // }
                        >
                          <ImageWithLoader
                            src={image.src}
                            alt={image.title}
                            className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                            skeletonClassName="w-full h-32 rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-4">
                      Mk 1 Orfina Spring Two Bump short/long (Powder Coat)
                    </h4>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        {
                          src: "https://pub-2402089ff2104077a64e15b6935f53e6.r2.dev/images/Bracelets/Mk 1 Orfina Pincrop.jpg",
                          title: "MK1 Two Bump Pin",
                        },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="relative group cursor-pointer"
                          // onClick={() =>
                          //   setFullScreenImage({
                          //     src: image.src,
                          //     alt: image.title,
                          //     title: image.title,
                          //     subtitle: "Mk. 1 Spring Two Bump",
                          //   })
                          // }
                        >
                          <ImageWithLoader
                            src={image.src}
                            alt={image.title}
                            className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                            skeletonClassName="w-full h-32 rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pin-adjusted clasp */}
              <div className="border-l-4 border-gray-300 pl-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-4">
                  Pin-adjusted Clasp
                </h3>
                <p className="text-gray-700 mb-6">
                  <strong>Years of Production:</strong> Later in the Orfina-dial run.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-black mb-4">
                    Mk 1 Orfina Pin (Powder Coat)
                  </h4>
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
                    ].map((image, index) => (
                      <div
                        key={index}
                        className="relative group cursor-pointer"
                        // onClick={() =>
                        //   setFullScreenImage({
                        //     src: image.src,
                        //     alt: image.title,
                        //     title: image.title,
                        //     subtitle: "Mk. 1 Pin-adjusted",
                        //   })
                        // }
                      >
                        <ImageWithLoader
                          src={image.src}
                          alt={image.title}
                          className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                          skeletonClassName="w-full h-32 rounded-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Mk. 2 Bracelets */}
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            2
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
            Mk. 2 Bracelets
          </h2>
        </div>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            These bracelets were produced in a variety of finishes and with a pin-adjusted PD signed
            clasp. They were used on the transitional 7750, aka Mk. 2 case and 7176 and 7177 models.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            <strong>Years of Production:</strong> 1976-Onward
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">Finishes Available:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Silver/Sablé", "Black PVD", "Cadet Grey PVD", "Olive Green PVD", "NTS PVD"].map(
                (finish, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-200"
                  >
                    <span className="font-medium text-gray-800">{finish}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
            <h4 className="font-semibold text-black mb-2">Links Configuration:</h4>
            <p className="text-gray-700">
              In Total 28 Links are found with 14 Links in Front of the Clasp Cover and 14 Links in
              Rear of the Clasp Cover.
            </p>
          </div>

          {/* Mk. 2 Black PVD Photos */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Mk. 2 Black PVD Photos</h4>
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
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  // onClick={() =>
                  //   setFullScreenImage({
                  //     src: image.src,
                  //     alt: image.title,
                  //     title: image.title,
                  //     subtitle: "Mk. 2 Black PVD",
                  //   })
                  // }
                >
                  <ImageWithLoader
                    src={image.src}
                    alt={image.title}
                    className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    skeletonClassName="w-full h-32 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mk. 3 Bracelets */}
      <div>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
            3
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-black">
            Mk. 3 Bracelets
          </h2>
        </div>

        <div className="bg-gray-50 p-6 sm:p-8 rounded-lg border-l-4 border-black mb-8">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            These bracelets were produced in both black PVD and Silver/Sablé, and featured a
            pin-adjusted PD signed clasp. We are unsure of their delivery date, but they are either
            service replacements or were delivered on later-produced 7176 and 7177 models.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
            <h4 className="font-semibold text-black mb-2">Links Configuration:</h4>
            <p className="text-gray-700 mb-4">
              In Total 28 Links are found with 14 Links in Front of the Clasp Cover and 14 Links in
              Rear of the Clasp Cover.
            </p>
            <p className="text-gray-700">
              The Mk. 3 run we believe exists for Black PVD and Silver/Sablé bracelets only, as we
              have not yet identified a second run of Cadet Grey, Olive Green, or NTS PVD bracelets.
            </p>
          </div>

          {/* Mk. 3 Photos */}
          <div>
            <h4 className="text-lg font-semibold text-black mb-4">Mk. 3 Photos</h4>
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
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  // onClick={() =>
                  //   setFullScreenImage({
                  //     src: image.src,
                  //     alt: image.title,
                  //     title: image.title,
                  //     subtitle: "Mk. 3 Bracelet",
                  //   })
                  // }
                >
                  <ImageWithLoader
                    src={image.src}
                    alt={image.title}
                    className="w-full h-32 object-cover rounded-lg shadow group-hover:shadow-lg transition-all duration-300 group-hover:scale-105"
                    skeletonClassName="w-full h-32 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

interface BraceletsBodySectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data: ComponentsTypeData
  setFullScreenImage: (imageData: ImageInfo | null) => void
}
