const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const configBase = require("./webpack.config");

const plugins = [
  new UglifyJSPlugin({
    sourceMap: true,
  }),
];

process.env.BABEL_ENV = "production";

module.exports = {
  ...configBase,
  plugins,
};
