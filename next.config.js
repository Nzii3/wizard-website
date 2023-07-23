/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/support',
        destination: 'https://wizard-help.nziie.xyz',
        permanent: true,
      },
      {
        source: '/forum',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/invite',
        destination: '/beta-testers',
        permanent: true,
      },
      {
        source: '/intro',
        destination: '/getting-started',
        permanent: true,
      },
      {
        source: '/getting-started',
        destination: 'https://wizard-help.nziie.xyz/d/20-public-release',
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
