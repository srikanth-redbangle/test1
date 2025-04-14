/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/abc',
        destination: 'https://master.d15op9hcraoiqo.amplifyapp.com/abc',
        permanent: false, // use true if this is permanent
      },
    ];
  },
  // compiler: {
  //   removeConsole: false,
  // },
}

module.exports = nextConfig
