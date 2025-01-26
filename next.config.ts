import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/biajamo_lp",
  assetPrefix: "/biajamo_lp/",
  trailingSlash: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;
