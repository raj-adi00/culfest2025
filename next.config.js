/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com", "images.unsplash.com", "aceternity.com"], // Add the hostname here
  },
};

module.exports = nextConfig;
