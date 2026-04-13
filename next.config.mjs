import path from "node:path";
import webpack from "next/dist/compiled/webpack/webpack-lib.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // Allow imports like: import x from "figma:asset/<file>.png"
    // by rewriting them to an actual file path under src/assets.
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^figma:asset\/(.+)$/, (resource) => {
        const filename = resource.request.replace(/^figma:asset\//, "");
        resource.request = path.resolve(process.cwd(), "src/assets", filename);
      }),
    );

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(process.cwd(), "src"),
    };
    return config;
  },
};

export default nextConfig;

