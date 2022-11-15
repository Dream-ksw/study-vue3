<template>
  <div>
    <h2>我是vue渲染的</h2>
    <h2>{{ title }}</h2>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'hello world'
    }
  }
}
</script>

<style scoped>
  h2 {
    color: purple
  }
</style>