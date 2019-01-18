const babelJest = require('babel-jest')
const webpackConfig = require('./webpack/base.config')

/* Jest needs to know how to transform our source.  Use the same transformation
 * options/rules specified in webpack configuration.
 */
const { options: babelOptions } = webpackConfig.module.rules[0]
module.exports = babelJest.createTransformer(babelOptions)
