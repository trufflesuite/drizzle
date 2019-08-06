module.exports = {
  extends: [
    "prettier",
    "plugin:jest/recommended",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ["jest", "prettier"],
  parser: "babel-eslint",
  rules: {
    "jest/prefer-to-have-length": "warn",
    "prettier/prettier": [1, {
      trailingcomma: "all",
      semi: false,
      singlequote: false
    }],
  },
  env : {
  	"jest/globals": true,
    es6: true,
    browser: true,
    node: true,
  }
}
