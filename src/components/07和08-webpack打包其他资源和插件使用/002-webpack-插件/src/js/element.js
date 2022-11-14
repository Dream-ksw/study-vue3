// import 'css-loader!../css/style.css' css-loader使用内联方式
import '../css/style.css'
import '../css/title.less'
import '../css/image.css'
// 引入字体样式
import '../font/iconfont.css'
// 在js中需要将图片当做一个模块使用
import zznhImage from '../img/zznh.png'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好啊,李银河'

// 设置背景图片
const bgDivEL = document.createElement('div')
bgDivEL.className = 'image-bg'

// 设置img元素的src
const imgEl = document.createElement('img')
imgEl.src = zznhImage

// i元素
const iEl = document.createElement('i')
iEl.className = 'iconfont icon-ashbin'

// console.log(content.length)

document.body.appendChild(divEl)
document.body.appendChild(bgDivEL)
document.body.appendChild(imgEl)
document.body.appendChild(iEl)