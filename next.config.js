/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.jsdelivr.net', 'flowbite.com']
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
