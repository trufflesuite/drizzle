const baseConfig = require('./webpack.base')
const devtool = 'eval-source-map'

process.env.BABEL_ENV = 'development';

module.exports = {
  ...baseConfig,
  devtool
};
