/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/iphone',
  assetPrefix: '/iphone-static',
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
