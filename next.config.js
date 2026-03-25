/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Alias undici to empty module on client – @vercel/blob/client
      // imports fetch from undici (Node.js only), which breaks in browser.
      // The library falls back to native fetch/XHR when undici is unavailable.
      config.resolve.alias = {
        ...config.resolve.alias,
        undici: false,
      }
    }
    return config
  },
}

module.exports = nextConfig
