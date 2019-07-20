module.exports = {
  extends: ["prettier", "eslint:recommended", "plugin:react/recommended"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": [1, { trailingComma: "all" }],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};