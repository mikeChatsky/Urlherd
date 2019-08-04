/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonPaths = require('./paths');

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: commonPaths.imagesFolder
            }
          }
        ]
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
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: commonPaths.templatePath
    })
  ]
};
