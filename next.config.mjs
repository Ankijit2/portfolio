/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: 'utfs.sh',
      },
      {
        protocol: 'https',
        hostname: '190793mbbb.ufs.sh',
      },
    ],
  },
};

export default nextConfig;
