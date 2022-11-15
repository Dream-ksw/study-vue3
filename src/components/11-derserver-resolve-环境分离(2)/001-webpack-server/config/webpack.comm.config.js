// webpack 在node环境下运行的默认支持CommonJS  不支持ES Module模块化,如果支持的话需要做一些配置
const path = require('path')

// 根据配置项生成html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack内置的插件
const { DefinePlugin } = require('webpack')

// 帮助vue-loader做一些事情
const { VueLoaderPlugin } = require('vue-loader/dist/index')

// webpack对vue文件的支持
// 1.安装并配置 vue-loader
// 2.从vue-loader/dist/index文件下结构 VueLoaderPlugin 插件并且配置
// 3.安装 @vue/compiler-sfc

// 为了完成自动编译,webpack提供了几种可选的方式
// webpack watch mode  在package.json中添加脚本 webpack --watch  在webpack配置中添加 watch: true
// webpack-dev-server(常用) 安装包 webpack-dev-server 在package.json中添加脚本 webpack serve
// webpack-dev-middleware


// 模块热替换HMR(Hot Module Replacement)
// 是指在 应用程序运行过程中 替换 添加 删除模块,而无需重新刷新整个页面
// 特性
// 1.不重新加载整个页面,这样可以保留某些应用程序的状态不丢失
// 2.只更新需要变化的内容,节省开发的时间
// 3.修改了css js源代码, 会立即在浏览器更新, 相当于直接在浏览器的devtools中直接修改样式
// HMR原理
// 相当于建立了两个连接
// Socket长连接->即时通信(微信 聊天 送礼物 直播) -> 心跳包
// Http连接->短连接 (客户端发送http请求->和服务器建立连接->服务器做出响应->断开连接(服务器可以承受的连接数是有限的 ))

module.exports = {
  target: 'web',
  // 这里的路径是读取根目录的所以路径不需要改
  entry: './src/main.js',
  output: {
    // 这里的path路径必须是绝对路径
    path: path.resolve(__dirname, "../build"),
    filename: 'js/bundle.js',
    // 查看打包后的文件可以使用 本地服务需要关闭
    // publicPath: '/'
  },
  // 
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts'],
    // 给路径设置别名
    alias: {
      '@': path.resolve(__dirname, '../src'),
      'js': path.resolve(__dirname, '../src/js')
    }
  },
  // 加载模块
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },

      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },

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

      {
        test: /\.(eot|ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'font/[name]_[hash:6][ext]'
        }
      },

      // 7.babel-loader
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
          // options: {
            // plugins: [
            //   '@babel/plugin-transform-arrow-functions',
            //   '@babel/plugin-transform-block-scoping'
            // ]
          // }
        }
      },

      // 8.vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      // 这里的路径是读取根目录的所以路径不需要改
      template: './public/index.html',
      title: 'study webpack'
    }), // 此插件可以在打包文件中自动生成html模板

    new DefinePlugin({
      BASE_URL: "'./'",
      // 消除警告
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }), // 定义的一些变量

    new VueLoaderPlugin()
  ]
}