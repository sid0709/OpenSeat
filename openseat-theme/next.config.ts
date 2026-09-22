import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@astryxdesign/core",
    "@astryxdesign/theme-neutral",
    "@stylexjs/stylex",
  ],
};

export default nextConfig;
