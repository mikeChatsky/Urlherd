/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    port: 8081,
    contentBase: commonPaths.outputPath,
    historyApiFallback: true,
    proxy: { '/api': 'http://localhost:8080' },
    liveReload: false,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
