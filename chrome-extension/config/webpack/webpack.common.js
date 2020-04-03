const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackExtensionManifestPlugin = require('webpack-extension-manifest-plugin');
const paths = require('../paths');
const manifest = require(paths.manifest);

module.exports = {
  entry: {
    index: paths.entry
  },
  output: {
    filename: '[name].js',
    path: paths.output
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.template
    }),
    new WebpackExtensionManifestPlugin({
      config: {
        base: manifest
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  }
};
