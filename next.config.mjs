import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/app/localization/i18n.ts")

/** @type {import("next").NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4040",
      },
      // Cloudflare R2
      {
        protocol: "https",
        hostname: "pub-2402089ff2104077a64e15b6935f53e6.r2.dev",
      },
    ],
  },
  sassOptions: {
    prependData: '@import "@/app/styles/scss-utils/index";',
  },
}

export default withNextIntl(nextConfig)
