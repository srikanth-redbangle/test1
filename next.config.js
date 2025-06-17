/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // compiler: {
  //   removeConsole: false,
  // },
  async redirects() {
    return [
      {
        source: 'https://www.dev.staging.singalong.co.in',
        destination: 'https://dev.staging.singalong.co.in',
        permanent: false, // use true if this is permanent
      },
    ];
  },
}

module.exports = nextConfig
