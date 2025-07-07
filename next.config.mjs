
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'quilted-libra-91f.notion.site',
      },
    ],
  },
};

export default nextConfig;