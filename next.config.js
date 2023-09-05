const withImages = require('next-images');


const redirects = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/home',
        permanent: true
      }
    ];
  }
};

module.exports = withImages(redirects);
module.exports = {
  distDir: "nextjs",
};
