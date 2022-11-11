// import 'css-loader!../css/style.css' css-loader使用内联方式
import '../css/style.css'
import '../css/title.less'
import '../css/image.css'

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

document.body.append(divEl)
document.body.append(bgDivEL)
document.body.append(imgEl)