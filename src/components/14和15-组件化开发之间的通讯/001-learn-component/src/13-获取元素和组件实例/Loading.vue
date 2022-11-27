<template>
  <div>
    Loading
    <button @click="getParentComponent">获取父组件实例</button>
  </div>
</template>

<script>
  export default {
    methods: {
      getParentComponent() {
        console.log(this.$parent.message)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>