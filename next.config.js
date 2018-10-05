module.exports = {
  // some configuration
  webpack: config => {
    config.node = {
      fs: 'empty'
    };
    return config;
  },
  // Github pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{URL}' : ''
  // another configuration
};
