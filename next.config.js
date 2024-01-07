/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: false
  },
  images: {
    domains: ['cdn.shopify.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
