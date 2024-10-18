/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "coin-images.coingecko.com",
      },
    ],
  },
};

export default nextConfig;
