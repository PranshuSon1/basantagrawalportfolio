// next.config.js for Next.js API proxy (if needed)
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode
  reactStrictMode: true,
  // Optionally, set up a proxy for API routes if you want to avoid CORS issues in development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://basantagbackend.onrender.com/:path*', // Proxy to backend
      },
    ];
  },
  // Add headers for permissions policy
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'unload=*',
          },
        ],
      },
    ];
  },
  // Turbopack configuration (Next.js 16+)
  // Path aliases are handled by jsconfig.json, so we just need an empty config
  turbopack: {},
  // Webpack configuration (fallback for non-Turbopack builds)
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
    };
    return config;
  },
};

module.exports = nextConfig;
