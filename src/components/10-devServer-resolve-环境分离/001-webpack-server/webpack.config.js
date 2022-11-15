// webpack 在node环境下运行的默认支持CommonJS  不支持ES Module模块化,如果支持的话需要做一些配置
const path = require('path')
// 获取清除webpack打包的插件 类
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// 根据配置项生成html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack内置的插件
const { DefinePlugin } = require('webpack')
// 复制文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
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
  mode: 'development',
  // 配置webpack监听文件改变进行重新编译(实时重新加载)
  // watch: true,
  // 设置source-map, 建立js映射文件,方便调试代码错误
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    // 这里的path路径必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: 'js/bundle.js',
    // 查看打包后的文件可以使用 本地服务需要关闭
    // publicPath: '/'
  },
  // 服务器
  devServer: {
    // host
    // 127.0.0.1 在同一个网段下的主机中,通过ip地址是不能访问的
    // 0.0.0.0 在同一个网段下的主机中,通过ip地址是可以访问的
    // host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, 'public')
    },
    // HMR
    hot: true,
    // 端口号
    port: 8082,
    // 项目启动默认打开浏览器
    // open: true,
    // gzips压缩
    // compress: true

    // 代理(跨域 协议域名端口有一个不一样就会产生跨域 浏览器协议)
    // 解决方案:
    // 1.部署在同一台服务器上 服务器和服务器之间是不存在跨域的
    // 2.服务器关闭跨域(一般为了安全起见不会关闭跨域)
    // 3.nginx代理
    proxy: {
      '/dev-api': {
        target: 'http://192.168.1.201:9091',
        // 讲本地实际的http://localhost:8082/源改为http://192.168.1.201:9091
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        },
        // 解决SPA页面在路由跳转之后,进行页面刷新时,返回404的错误
        historyApiFallback: true
        // 默认情况不接受https地址,如果需要接收 将secure 值设置为 false
        // secure: false
      }
    }
  },
  // 
  resolve: {
    extensions: ['.js', '.json', '.mjs', '.vue', '.ts'],
    // 给路径设置别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      'js': path.resolve(__dirname, './src/js')
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
    // 一个个的插件对象
    new CleanWebpackPlugin(), // 此插件可以在每次打包时清除之前的打包文件
    
    new HtmlWebpackPlugin({
      template: './public/index.html',
      title: 'study webpack'
    }), // 此插件可以在打包文件中自动生成html模板

    new DefinePlugin({
      BASE_URL: "'./'",
      // 消除警告
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
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
    }), // 复制文件

    new VueLoaderPlugin()
  ]
}