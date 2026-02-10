/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/store',
  assetPrefix: '/store-static',
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
