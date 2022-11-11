// import 'css-loader!../css/style.css' css-loader使用内联方式
import '../css/style.css'
import '../css/title.less'

const divEl = document.createElement('div')
divEl.className = "title"
divEl.innerHTML = '你好啊,李银河'

document.body.append(divEl)