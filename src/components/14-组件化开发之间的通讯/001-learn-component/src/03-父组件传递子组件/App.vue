<template>
  <div>
    <!-- props传值 -->
    <ShowMessage class="why" title="哈哈哈" content="我是哈哈哈" />
    <ShowMessage :title="title" :content="content" />
    <ShowMessage v-bind="message" />
    <!-- 
      1.非prop的attribute继承
      (1)继承在根节点上
      (2)
      禁用常见情况是需要将attribute应用于根元素之外的其他元素
      我们可以通过$attrs来访问所有的非props的attribute
      2.多个根节点
    -->
    <MultiRoot id="123" />
  </div>
</template>

<script>
  // 驼峰命名 nameClase 需要使用 name-class
  import ShowMessage from './ShowMessage.vue'
  import MultiRoot from './MultiRoot.vue'
  export default {
    components: {
      ShowMessage,
      MultiRoot
    },
    data() {
      return {
        title: '嘻嘻嘻',
        content: '我是嘻嘻嘻',
        message: {
          title: '嘿嘿嘿',
          content: '我是嘿嘿嘿'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>