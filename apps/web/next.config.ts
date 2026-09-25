import type { NextConfig } from "next";

const isPagesBuild = process.env.PAGES_BUILD === "true";

const nextConfig: NextConfig = {
  ...(isPagesBuild ? { output: "export" as const } : {}),
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? (isPagesBuild ? "/OpenSeat" : ""),
  images: { unoptimized: true },
};

export default nextConfig;
