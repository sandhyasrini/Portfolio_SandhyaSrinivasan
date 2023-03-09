/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'sandhyasrini' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
