const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Alias undici to browser shim that exports native fetch
      // @vercel/blob/client imports fetch from undici (Node.js only)
      config.resolve.alias = {
        ...config.resolve.alias,
        undici: path.resolve(__dirname, 'src/undici-browser-shim.js'),
      }
    }
    return config
  },
}

module.exports = nextConfig
