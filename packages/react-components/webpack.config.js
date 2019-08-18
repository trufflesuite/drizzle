const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.env.BABEL_ENV = "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "drizzle-react-components.js",
    library: "@drizzle/react-components",
    libraryTarget: "umd",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "src"),
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: { source: false }
    })
  ],
  externals: [
    "@drizzle/store",
    "@drizzle/react-plugin",
    "prop-types",
    "react",
    "redux",
  ],
};

