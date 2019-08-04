module.exports = {
  "extends": ["standard", "plugin:jest/recommended"],
  "plugins": ["jest"],
  "rules": {
    "jest/prefer-to-have-length": "warn",
    "space-before-function-paren": ["error", {
      "anonymous": "ignore",
      "asyncArrow": "always",
      "named": "ignore"
    }]
  },
  "env" : {
      "jest/globals": true
  }
}
