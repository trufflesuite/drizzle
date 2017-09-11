const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'drizzle-react.js',
    library: 'drizzle-react',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['react'],
          plugins: [require('babel-plugin-transform-class-properties')]
        }
      }
    ]
  },
  externals: ['prop-types', 'react', 'redux']
}
