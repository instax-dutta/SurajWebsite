/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return []
  },
  async headers() {
    return []
  },
  images: {
    domains: ["temper.one"],
  },
}

module.exports = nextConfig

