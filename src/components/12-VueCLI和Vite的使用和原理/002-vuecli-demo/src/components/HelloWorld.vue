<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- 
      vite的介绍和发展
      构建工具: webpack rollup parcel(零配置) gulp(自动化) vite(下一代前端开发和构建工具)
      两部分: 1.开发服务器 2.一套构建命令(rollup)
     -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
