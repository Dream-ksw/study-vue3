import _ from 'lodash-es'
import { sum } from './js/math'
// import { createApp } from 'vue'
// import App from './vue/App.vue'
import './css/style.css'
import './css/title.less'
import mul from './ts/multiply'

console.log('hello world')
console.log(sum(20, 30))
console.log(mul(50, 20))
console.log(_.join(['abc', 'cba'], '-'))

const divEl = document.createElement('div')
divEl.className = 'title'
divEl.innerHTML = 'hello vite'
document.body.appendChild(divEl)

// createApp(App).mount('#app')