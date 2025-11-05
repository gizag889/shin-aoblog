
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  
 
  images: {
    domains: process.env.ALLOWED_IMAGE_HOST.split(',') // 文字列を配列に変える（区切りは「,」）
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/1',
      },
    ]
  },

  experimental: {
    optimizeCss: false // lightningcssを使用しない
  }

};

module.exports = nextConfig
