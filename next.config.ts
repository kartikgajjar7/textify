import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARN !!
    // Ignoring TypeScript errors during production build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
