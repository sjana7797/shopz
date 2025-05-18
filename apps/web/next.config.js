/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        hostname: "ik.imagekit.io",
      },
    ],
  },
};

export default nextConfig;
