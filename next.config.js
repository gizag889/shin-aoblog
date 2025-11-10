
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  
 
  images: {
    domains: [
      'localhost',
      ...(process.env.ALLOWED_IMAGE_HOST ? process.env.ALLOWED_IMAGE_HOST.split(',') : [])
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/1',
      },
    ]
  },

  

};

module.exports = nextConfig
