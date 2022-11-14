// webpack 在node环境下运行的默认支持CommonJS  不支持ES Module模块化,如果支持的话需要做一些配置
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // 这里的path路径必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  // 加载css模块
  module: {
    rules: [
      // 1.普通css和postcss配置(css样式转换和适配)
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
      // 文件名称
      // [ext] 处理文件扩展名
      // [name] 处理文件的名称
      // [hash] 文件的内容 使用md4的三列函数处理 生成的一个128位的hash值(32个十六进制)
      // [contentHash] 在 file-loader 中和 [hash]结果是一致的(在webpack的一些其他地方不一样,后面会讲到)
      // [hash:<length>] 截取hash的长度 默认32个字符太长了
      // [path] 文件相对于webpack配置文件的路径
      // {
      //   // 正则 ? 号表示0个或者1个 {0,1}
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   // 如果有一个loader的话 use后面使用对象字面量就可以,如果有多个loader可以使用数组字面量
      //   // 如果loader需要配置项, 那么单个loader可以写成一个对象 {loader: ,options:}
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
      // url-loader和file-loader的工作方式是相似的,但是可以将较小的文件,转成base64的URI
      // 高并发  图片进行优化 精灵图 图标 小图片进行编码
      // {
      //   test: /\.(jpe?g|png|svg|gif)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       // 这里如果不配置 会对所有的图片进行base64编码
      //       options: {
                // 问题: 因为url-loader默认使用的是es6模块化解析,而html-loader引入图片是commonjs
                // 解析式会出现问题: [object Module]
                // 解决: 关闭url-loader的es6模块化,使用commonjs解析
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
            maxSize: 100 * 1024
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