/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "imagecdn.websitebuilder.prositehosting.co.uk",
      },
    ],
  },
};

export default nextConfig;
