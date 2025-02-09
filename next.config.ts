/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // Disable if not needed
    turbo: false, // Disable TurboPack
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["example.com", "another-domain.com"],
  },
};

module.exports = nextConfig;
