import { createApp } from 'vue'
import App from './11-动态组件的使用/App.vue'

// 文件的分包处理
// import('./12-异步组件的使用/utils/math.js').then(res => {
//   res.sum(10, 20)
// })

createApp(App).mount('#app')
