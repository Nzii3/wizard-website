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
        destination: 'https://discord.com/api/oauth2/authorize?client_id=999132132754600016&permissions=1497736146166&scope=bot%20applications.commands&redirect_uri=https://servermanagerbot.ml/invited&response_type=code',
        permanent: true,
      },
      {
        source: '/docs',
        destination: 'https://docs.servermanagerbot.ml',
        permanent: true,
      },
      {
        source: '/documentation',
        destination: 'https://docs.servermanagerbot.ml',
        permanent: true,
      },
      {
        source: '/intro',
        destination: 'https://docs.servermanagerbot.ml/getting-started',
        permanent: true,
      },
      {
        source: '/about',
        destination: 'https://servermanagerbot.ml/team',
        permanent: true,
      },
      {
        source: '/troubleshooting',
        destination: 'https://docs.servermanagerbot.ml/troubleshooting',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
