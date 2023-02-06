<template>
  <div>
    <nav-bar :slotName="slotName">
      <template #left>
        <button>左侧按钮</button>
      </template>
      <template v-slot:center>
        我是标题
      </template>
      <template #right>
        <i>右侧i元素</i>
      </template>
      <template v-slot:[slotName]>
        动态添加插槽
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  export default {
    components: {
      NavBar
    },
    data() {
      return {
        slotName: 'why'
      }
    }
  }
</script>

<style scoped>
</style>