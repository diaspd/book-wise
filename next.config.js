/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'github.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
