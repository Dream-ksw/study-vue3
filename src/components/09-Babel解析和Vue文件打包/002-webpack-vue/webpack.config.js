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