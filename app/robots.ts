import { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://orfinaporschedesign.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login/", "/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
