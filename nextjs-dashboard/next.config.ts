import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',       // Enables static export
  basePath: '/week02',    // All routes served under /week02
  assetPrefix: '/week02/',// Fixes CSS/JS/assets paths
};

export default nextConfig;