const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'drizzle.js',
    library: 'drizzle',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        plugins: [require('babel-plugin-transform-es2015-arrow-functions'), require('babel-plugin-transform-object-rest-spread')]
      }
    }]
  }
};
