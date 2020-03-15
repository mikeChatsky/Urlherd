/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.svg$/,
        loader: '@svgr/webpack'
      },
      {
        test: /\.(woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.fontsFolder
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.css', '.scss']
  },
  output: {
    path: commonPaths.outputPath
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    })
  ]
};
