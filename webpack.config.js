const webpack = require('webpack')

const path = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

// Plugins ---------------------------------------------------------------------
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js'
})

const jQuery = new webpack.ProvidePlugin({
  jQuery: 'jquery',
  $: 'jquery',
  jquery: 'jquery'
})


const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }, {
      test: /\.(scss|css)$/,
      loader: extractCSS.extract(['css-loader', 'sass-loader'])
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader?name=[path]/[name].[ext]',
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=[path]/[name].[ext]'
    }, {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=[path]/[name].[ext]'
    }]
  },
  plugins: [
    extractCommons,
    extractCSS,
    jQuery
  ]
}

module.exports = config
