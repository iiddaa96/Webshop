/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  images: {
      domains: ['*'],
  },
};

export default nextConfig;
