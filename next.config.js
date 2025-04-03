/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Base configuration
  reactStrictMode: true,
  swcMinify: true,

  // Static site export
  output: 'export',

  // Fast Refresh settings
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /node_modules/,
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },

  // Image optimization settings
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
