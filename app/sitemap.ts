import { MetadataRoute } from "next"

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN || "https://orfinaporschedesign.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/references`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/story`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Reference pages
  const references = ["7750", "7176", "7177"]
  const referencePages: MetadataRoute.Sitemap = references.flatMap((ref) => [
    {
      url: `${baseUrl}/references/${ref}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/references/${ref}/dial`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/references/${ref}/case-finishes`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/references/${ref}/caseback`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/references/${ref}/rehaut`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ])

  // Dial type pages
  const dialTypes = [
    "baseline",
    "by-orfina",
    "bund",
    "flying-tiger",
    "four-logo",
    "nato",
    "royal-navy",
    "swiss-coat",
    "uae",
    "vzmod",
  ]
  const dialTypePages: MetadataRoute.Sitemap = dialTypes.map((type) => ({
    url: `${baseUrl}/references/7176/dial/${type}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Component pages
  const componentTypes = [
    "bracelets",
    "boxes",
    "crowns",
    "date-wheels",
    "hands",
    "movements",
    "straps",
  ]
  const componentPages: MetadataRoute.Sitemap = componentTypes.map((type) => ({
    url: `${baseUrl}/components/${type}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...referencePages, ...dialTypePages, ...componentPages]
}
