<template>
  <div>
    <TabContent :titles="titles" @clickTitle="clickTitle"></TabContent>
    <h2>{{ contents[currentIndex] }}</h2>
  </div>
</template>

<script>
  import TabContent from './TabContent.vue'
  export default {
    components: {
      TabContent
    },
    data() {
      return {
        titles: ['衣服', '鞋子', '裤子'],
        contents: ['衣服页面', '鞋子页面', '裤子页面'],
        currentIndex: 0
      }
    },
    methods: {
      clickTitle(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>