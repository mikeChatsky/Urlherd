/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: commonPaths.globalStyleFolder,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localsConvention: 'camelCase'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: process.env.WEBPACK_PORT,
    contentBase: commonPaths.outputPath
  }
};
