const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

const webpackConfig = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin()
  ]
})

webpack(webpackConfig, (err, stats) => {
  if (err || stats.hasErrors()) {
    let info = stats.toJson()
    console.log(info.errors)
  }
})
