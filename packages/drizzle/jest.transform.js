const babelJest = require('babel-jest')

const options = {
  'presets': ['env'],
  'plugins': [
    'babel-plugin-transform-runtime',
    'babel-plugin-transform-es2015-arrow-functions',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-syntax-async-functions'
  ]
}

module.exports = babelJest.createTransformer(options)
