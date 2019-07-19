const path = require('path')

process.env.BABEL_ENV = 'production'

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'drizzle.js',
    library: 'drizzle',
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
  }
}
