/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  eslint: {
    ignoreDuringBuilds: true
  }
}

/*module.exports = nextConfig*/
