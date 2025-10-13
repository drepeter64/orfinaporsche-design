import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Galaxy IT",
    short_name: "Galaxy IT",
    description: "Galaxy IT",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
  }
}
