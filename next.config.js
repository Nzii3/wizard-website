/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/support',
        destination: 'https://discord.gg/6bCKvP24kb',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/6bCKvP24kb',
        permanent: true,
      },
      {
        source: '/invite',
        destination: '/beta-testers',
        permanent: true,
      },
      {
        source: '/docs',
        destination: '/',
        permanent: true,
      },
      {
        source: '/documentation',
        destination: '/',
        permanent: true,
      },
      {
        source: '/intro',
        destination: '/getting-started',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/troubleshooting',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
