<template>
  <div>
    <button @click="decreament">-</button>
    <button @click="increament">+</button>
  </div>
</template>

<script>
  export default {
    // emits有两种写法 ['changeCounter'] {changeCounter: () => {}}
    emits: {
      changeCounter: (payload) => {
        console.log(payload)
        // 这里可以对参数进行校验
        return true
      }
    },
    methods: {
      increament() {
        this.$emit('changeCounter', 1)
      },
      decreament() {
        this.$emit('changeCounter', -1)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>