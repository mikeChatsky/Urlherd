const path = require('path')

module.exports = {
  manifest: path.resolve(__dirname, '../manifest.json'),
  output: path.resolve(__dirname, '../build'),
  entry: path.resolve(__dirname, '../src/index.jsx'),
  template: path.resolve(__dirname, '../src/index.html')
}