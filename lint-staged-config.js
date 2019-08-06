module.exports = {
  '*.js': files => files
    .filter(fn => /react-components|vue-plugin/.test(fn))
    .map(fn => `eslint --fix ${fn}`)
    .concat('git add') // re-commit linted
}

