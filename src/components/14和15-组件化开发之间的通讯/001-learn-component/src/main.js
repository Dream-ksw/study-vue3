import { createApp } from 'vue'
import App from './12-异步组件的使用/App.vue'
import('./12-异步组件的使用/utils/math.js').then(res => {
  res.sum(10, 20)
})

createApp(App).mount('#app')
