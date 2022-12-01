import { createApp } from 'vue'
import App from './15-组件的v-model/App.vue'

// 文件的分包处理
// import('./12-异步组件的使用/utils/math.js').then(res => {
//   res.sum(10, 20)
// })

createApp(App).mount('#app')
