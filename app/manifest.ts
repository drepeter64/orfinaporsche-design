import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orfina Porsche Design",
    short_name: "OPD",
    description:
      "Comprehensive guide to Orfina Porsche Design watches - References, Components, and History of the iconic Chronograph One.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  }
}
