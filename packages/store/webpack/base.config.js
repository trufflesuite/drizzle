const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.env.BABEL_ENV = 'production'

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'drizzle-store.js',
    library: '@drizzle/store',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.(js)$/,
      include: path.resolve(__dirname, '../src'),
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ]
}
