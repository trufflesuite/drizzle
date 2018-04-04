const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

process.env.BABEL_ENV = 'production';

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
        plugins: [
          require('babel-plugin-transform-runtime'),
          require('babel-plugin-transform-es2015-arrow-functions'),
          require('babel-plugin-transform-object-rest-spread')
        ]
      }
    }]
  },
  externals: {
    'web3': 'web3',
    'redux-saga': 'redux-saga',
    'redux': 'redux'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};
