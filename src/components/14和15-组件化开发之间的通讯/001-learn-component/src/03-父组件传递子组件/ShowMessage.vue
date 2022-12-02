<template>
  <div>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
  // props中对象或者数组必须是一个函数 
  export default {
    // 不在根元素上继承非Prop的Attribute传递
    // 如果在组件上传递了一个 class="why"  默认是传递到子组件的根元素上的 也就是会在div 上添加一个 class="why" 如果我们不想在根元素上添加 而是在其他元素的添加的话 可以使用该选项禁用
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