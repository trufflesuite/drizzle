module.exports = {
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": [1, {
      trailingComma: "es5",
      semi: false
    }],
    "react/display-name": [0]
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
