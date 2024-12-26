/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vercel-demo',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 