import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.PORTAL_DIST_DIR || ".next",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;