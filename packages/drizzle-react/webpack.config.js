const path = require('path');

process.env.BABEL_ENV = 'development';

module.exports = {
  entry: './src/index.js',
  devtool: 'eval-source-map',
  output: {
    filename: 'drizzle-react-plugin.js',
    library: '@drizzle/react-plugin',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      include: path.resolve(__dirname, 'src'),
      loader: 'babel-loader',
      options: {
        presets: ['react'],
        plugins: [require('babel-plugin-transform-class-properties'), require('babel-plugin-transform-object-rest-spread')]
      }
    }]
  },
  externals: [
    '@drizzle/store',
    'prop-types',
    'react',
    'redux'
  ]
};
