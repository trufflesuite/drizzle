import merge from 'deepmerge'
const isPlainObject = require('is-plain-object')

export default function (defaultOptions, newOptions) {
  return merge(defaultOptions, newOptions, {
    isMergeableObject: isPlainObject
  })
}
