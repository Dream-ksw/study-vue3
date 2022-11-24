<template>
  <div class="app">
    <h2>App</h2>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
  export default {
    components: {
      HelloWorld
    }
  }
</script>

<style scoped>
  /* 
  这里h2会作用到组件上
  所以一般写一个div或者写一个类名
  */
  h2 {
    color: red
  }
</style>