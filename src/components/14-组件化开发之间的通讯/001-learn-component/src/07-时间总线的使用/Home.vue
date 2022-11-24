<template>
  <div>
    <button @click="homeBtnClick">按钮发生了点击</button>
  </div>
</template>

<script>
  import emitter from './utils/eventBus'
  export default {
    methods: {
      homeBtnClick() {
        emitter.emit('why', {name: 'why', age: 18})
        emitter.emit('kobe', {name: 'kobe', age: 18})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>