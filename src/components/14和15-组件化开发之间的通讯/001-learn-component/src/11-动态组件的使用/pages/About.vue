<template>
  <div>
    About组件内容
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        counter: 0
      }
    },
    // 若组件实例是keep-alive缓存的一部分时,当组件被插入到DOM中使用
    activated() {
      console.log('activated')
    },
    // 若组件实例是keep-alive缓存的一部分时,当组件从DOM中移除时使用
    deactivated() {
      console.log('deactivated')
    }
  }
</script>

<style lang="scss" scoped>

</style>