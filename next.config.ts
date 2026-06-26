import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // static export → works with Cloudflare Pages
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
