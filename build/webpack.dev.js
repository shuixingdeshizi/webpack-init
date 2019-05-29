const path = require('path')
const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

console.log(process.env.NODE_ENV)

const webpackConfig = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist')
  }
})

const compiler = webpack(webpackConfig)
const app = new webpackDevServer(compiler, {

})

app.listen(8000, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('listen at localhost:8000')
})