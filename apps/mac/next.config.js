/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/mac',
  assetPrefix: '/mac-static',
  transpilePackages: ['@repo/ui', '@repo/shared-state'],
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
