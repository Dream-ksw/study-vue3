const { merge } = require('webpack-merge')
const commConfig = require('./webpack.comm.config')
// 获取清除webpack打包的插件 类
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(commConfig, {
  mode: 'production',
  plugins: [
     // 一个个的插件对象
     new CleanWebpackPlugin(), // 此插件可以在每次打包时清除之前的打包文件
     new CopyWebpackPlugin({
       patterns: [
         {
           // 这里的路径是读取根目录的所以路径不需要改
           from: './public',
           globOptions: {
             ignore: [
               // **/ from文件夹下的所有index.html文件
               '**/index.html'
             ]
           }
         }
       ]
     }), // 复制文件
  ]
})