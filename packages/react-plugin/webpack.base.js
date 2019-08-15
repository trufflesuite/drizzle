const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: './src/index.js',
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
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ],
  externals: [
    '@drizzle/store',
    'prop-types',
    'react',
    'redux'
  ]
};
