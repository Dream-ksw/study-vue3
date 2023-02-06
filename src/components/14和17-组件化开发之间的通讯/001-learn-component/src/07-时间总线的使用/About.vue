<template>
  <div>

  </div>
</template>

<script>
  import emitter from './utils/eventBus'
  export default {
    created() {
      // 监听两个事件
      emitter.on('why', this.whyEvent)
      emitter.on('kobe', this.kobeEvent)
      // 监听当前所有的事件
      // emitter.on('*', (type, info) => {
      //   console.log(type, info)
      // })
    },
    methods: {
      whyEvent(info) {
        console.log('why', info)
      },
      kobeEvent(info) {
        console.log('kobe', info)
      }
    },
    unmounted () {
      // 取消监听
      // emitter.off('why', this.whyEvent)
      // emitter.off('kobe', this.kobeEvent)
      // 取消所有监听
      // emitter.all.clear()
      
    }
  }
</script>

<style lang="scss" scoped>

</style>