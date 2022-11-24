<template>
  <div>
    <template 
      v-for="item in tabs" 
      :key="item"
    >
      <button
        :class="{active: item === currentTab}"
        @click="tabClick(item)"
      >
        {{ item }}
      </button>
    </template>


    <!-- 使用动态组件 -->
    <component :is="currentTab"></component>
  </div>
</template>

<script>
  import Home from './pages/Home.vue'
  import About from './pages/About.vue'
  import Category from './pages/Category.vue'
  export default {
    components: {
      Home,
      About,
      Category
    },
    data() {
      return {
        tabs: ['Home', 'About', 'Category'],
        currentTab: 'Home'
      }
    },
    methods: {
      tabClick(item) {
        this.currentTab = item
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red
  }
</style>