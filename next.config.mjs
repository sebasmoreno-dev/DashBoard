/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        protocol:'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol:'https',
        hostname: 'falabella.scene7.com',
      },
      {
        protocol:'https',
        hostname: 'imagedelivery.net',
      }
    ]
  }
};

export default nextConfig;
