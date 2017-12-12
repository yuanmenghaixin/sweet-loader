var utils = require('./utils');
var isProduction = process.env.NODE_ENV === 'production';
console.log(utils.cssLoaders({
    sourceMap: isProduction,
    extract: true
  }));
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction,
    extract: true
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
};

