const { merge } = require('webpack-merge')
const commConfig = require('./webpack.comm.config')
const path = require('path')


module.exports = merge(commConfig, {
  mode: 'development',
  devtool: 'source-map',
  // 服务器
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    hot: true,
    port: 8082,
    open: true,
    proxy: {
      '/dev-api': {
        target: 'http://192.168.1.201:9091',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        },
        historyApiFallback: true
      }
    }
  }
})