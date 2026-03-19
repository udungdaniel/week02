// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',            // static HTML export
  basePath: '/week02',          // subfolder for GitHub Pages
  assetPrefix: '/week02/',      // ensures all assets (JS/CSS) load correctly from the right path
  reactStrictMode: true,        // optional, good practice
};

export default nextConfig;