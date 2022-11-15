import { createApp } from 'vue'
import App from './vue/app.vue'

import { sum } from './js/math'
const { priceFormat } = require('./js/format')
console.log(sum(20, 30))
console.log(priceFormat(98.88))

import './js/element'

// vue代码
// vue源代码对其进行解析
// vue版本一: runtime+compiler
// vue版本二: runtime-only

// runtime版本不包括compiler,包更小
// prod 版本做过压缩, 已丑化

// html CDN引入
// vue(.runtime).global(.prod).js

// 通过原生es模块导入使用<script type="module" />
// vue(.runtime).esm-browser(.prod).js

// 用于webpack,rollup和parcel等构建工具 
// 构建工具中默认使用vue.runtime.esm-bundler.js
// vue(.runtime).esm-bundler.js

// 服务端渲染使用
// 通过 require() 在 Node.js 中使用
// vue.cjs(.prod).js

// const app = createApp({
//   template: '#my-app',
//   data() {
//     return {
//       title: 'hello world'
//     }
//   }
// })

const app = createApp(App)
app.mount('#app')