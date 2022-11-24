<template>
  <div @click="pageClick">
    Home组件内容 {{name}}-{{age}}
  </div>
</template>

<script>
  export default {
    name: 'home',
    // emits: ['pageClick'],
    props: {
      name: {
        type: String,
        default: ''
      },
      age: {
        type: Number,
        default: 0
      }
    },
    methods: {
      pageClick() {
        this.$emit('pageClick')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>