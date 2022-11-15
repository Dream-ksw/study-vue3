import { createApp } from 'vue'
import App from './vue/app'

import { sum } from 'js/math'
const { priceFormat } = require('./js/format')
console.log(sum(20, 30))
console.log(priceFormat(98.88))

import './js/element'
import axios from 'axios'

// 判断模块热替换
if (module.hot) {
  module.hot.accept('./js/element.js', () => {
    console.log( 'element模块发生更新');
  })
}

const app = createApp(App)
app.mount('#app')

axios.get('/dev-api/v1.0/mom/122/order/account/abnormal').then(res => {
  console.log(res)
}).catch(err =>{
  console.log(err)
})