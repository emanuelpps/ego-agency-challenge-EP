/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "challenge.egodesign.dev",
        pathname: "/media/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
