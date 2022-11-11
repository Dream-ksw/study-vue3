// webpack 在node环境下运行的默认支持CommonJS  不支持ES Module模块化,如果支持的话需要做一些配置
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // 这里的path路径必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js'
  },
  // 加载css模块
  module: {
    rules: [
      {
        test: /\.css$/, // 正则表达式 转义符号\
        // 1.loader的写法(语法糖)
        // loader: 'css-loader'

        // 2.完整写法 use的执行顺序是从下往上或者从右向左
        // 样式中必须先使用css-loader进行加载css 然后再使用style给添加上
        use: [
          // { loader: 'css-loader', options: {} }
          'style-loader',
          'css-loader',

          'postcss-loader'
          // postcss postcss-cli 工具的作用
          // 1.PostCSS是一个通过JavaScript来转换样式的工具
          // 2.进行一些css的转换和适配,比如自动添加浏览器前缀\css样式的重置
          // 3.实现这些功能需要借助PostCSS对应的插件(autoprefixer/postcss-preset-env)

          // webpack 针对loader查找规则
          // 1.先看这里是否有loader对应的配置信息
          // 2.如果没有则会去根目录下去找postcss.config.js文件 然后查看该文件是否有导出一个对象 如果有就会把导出的对象当做配置信息
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')
          //       ]
          //     }
          //   }
          // }
        ]
      },
      // less配置
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  }
}


// const path = require('path')
// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './build'),
//     filename: 'a.js'
//   }
// }

// const path = require('path')
// module.exports = {
//   entry: './src/main.js',
//   output: {
//     path: path.resolve(__dirname, './build'),
//     filename: 'bundle.js'
//   }
// }