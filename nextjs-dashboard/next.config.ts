import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',       // static export
  basePath: '/week02',    // all routes served under /week02
  assetPrefix: '/week02/',// fixes CSS/JS/fonts/assets paths
};

export default nextConfig;