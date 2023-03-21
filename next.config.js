/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: {
      displayName: true
    }
  },
  async redirects() {
    return [
      {
        source: '/buyer',
        destination: '/buyer/my-stats',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
