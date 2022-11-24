<template>
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  // props中对象或者数组必须是一个函数 
  export default {
    
    inheritAttrs: false,
    props: {
      title: {
        type: String,
        require: true,
        default: ''
      },
      content: {
        type: String,
        require: true,
        default: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>