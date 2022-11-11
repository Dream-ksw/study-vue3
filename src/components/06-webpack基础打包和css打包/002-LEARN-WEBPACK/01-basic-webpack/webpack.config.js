// webpack 在node环境下运行的默认支持CommonJS  不支持ES Module模块化,如果支持的话需要做一些配置
const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    // 这里的path路径必须是绝对路径
    path: path.resolve(__dirname, "./build"),
    filename: 'bundle.js'
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