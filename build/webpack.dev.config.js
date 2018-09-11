const merge = require('webpack-merge')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBaseConfig = require('./webpack.base.config.js')
const util = require('./util')
const resolve = util.resolve
module.exports = merge(webpackBaseConfig, {
  mode: 'none',
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'circle-progress.js',
    library: "circle-progress",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {

            }
          },
          "css-loader","postcss-loader","sass-loader"
        ]
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "circle-progress.css",
      chunkFilename: "[id].css"
    })
  ]
})
