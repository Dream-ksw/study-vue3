// webpack 在node环境下运行的默认支持CommonJS  不支持ES Module模块化,如果支持的话需要做一些配置
const path = require('path')
// 获取清除webpack打包的插件 类
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack内置的插件
const { DefinePlugin } = require('webpack')
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  // 设置模式
  // development  开发阶段
  // production  打包上线
  mode: 'development',
  // 设置source-map, 建立js映射文件,方便调试代码错误
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    // 这里的path路径必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: 'js/bundle.js',
    publicPath: './'
  },
  // 加载css模块
  module: {
    rules: [
      // 1.普通css和postcss配置(css样式转换和适配)
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      // 2.less配置
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },

      // 3.file-loader
      // {
      //   // 正则 ? 号表示0个或者1个 {0,1}
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // 不使用模块
      //         esModule: false,
      //         // 确定路径
      //         publicPath: 'build',
      //         // 输入路径
      //         // outputPath: 'img',
      //         // 文件名
      //         name: 'img/[name]_[hash:6].[ext]'
      //       }
      //     }
      //   ],
      //   type: 'javascript/auto'
      // },

      // 4.url-loader
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       // 这里如果不配置 会对所有的图片进行base64编码
      //       options: {
      //         // 问题: 因为url-loader默认使用的是es6模块化解析,而html-loader引入图片是commonjs
      //         // 解析式会出现问题: [object Module]
      //         // 解决: 关闭url-loader的es6模块化,使用commonjs解析
      //         esModule: false,
      //         publicPath: 'build',
      //         name: 'img/[name]_[hash:6].[ext]',
      //         limit: 100 * 1024 //小于100kb
      //       }
      //     }
      //   ],
      //   type: 'javascript/auto'
      // }

      // 5.asset module type 通过4中心的模块类型,来替换所有这些loader
      // asset/resource 发送一个单独的文件并导出url. 之前通过file-loader实现
      // asset/inline 导出一个资源的data URI. 之前通过url-loader实现
      // asset/source 导出资源的源代码. 之前通过raw-loader实现
      // asset 在导出一个data URI和发送一个单独的文件之间自动选择,之前通过使用URL-loader,并且配置资源体积限制实现
      {
        test: /\.(jpe?g|png)$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]_[hash:6][ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024
          }
        }
      },

      // 6.字体文字打包
      // 当在webpack5中使用旧的assets loader(如file-loader/url-loader/raw-loader等)和asset模块时,你可能想停止当前asset模块的处理,并再次启动处理,这可能会导致asset重复,你可以通过将assets loader的类型设置为'javascript/auto'来解决
      // {
      //   test: /\.(eot|ttf|woff2?)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       esModule: false,
      //       name: 'font/[name]_[hash:6].[ext]'
      //     }
      //   },
      //   type: 'javascript/auto'
      // },
      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      }
    ]
  },
  // 插件
  plugins: [
    // 一个个的插件对象
    new CleanWebpackPlugin(), // 此插件可以在每次打包时清除之前的打包文件
    
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'study webpack'
    }), // 此插件可以在打包文件中自动生成html模板

    new DefinePlugin({
      BASE_URL: "'./'"
    }), // 定义的一些变量

    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          // output path文件夹下的目录进行拼接
          to: './',
          globOptions: {
            ignore: [
              // **/ from文件夹下的所有index.html文件
              '**/index.html'
            ]
          }
        }
      ]
    }) // 复制文件
  ]
}

// EJS模块填充数据的方式
// 语法: <% 变量 %>


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