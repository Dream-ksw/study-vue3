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
    <!-- <component 
      :is="currentTab" 
      :namg="'why'"
      :age="18"
      @pageClick="pageClick"
    >
    </component> -->

    <!-- 使组件发生缓存 -->
    <!-- 
      include string|RegExp|Array 哪些组件名称需要缓存
      exclude string|RegExp|Array 哪些组件名称不需要缓存
      max  number|string 可以缓存的最大组件数量(如果超过组件数 那么缓存组件中最近没有被访问的实例会被销毁)
     -->
    <!-- <keep-alive include="about"> -->
    <!-- <keep-alive :include="['home', 'about']"> -->
    <!-- <keep-alive :exclude="'home'"> -->
    <keep-alive :max="2">
      <component 
        :is="currentTab" 
        :namg="'why'"
        :age="18"
        @pageClick="pageClick"
      >
      </component>
    </keep-alive>
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
      },
      pageClick() {
        console.log('内部页面发生了改变')
      }
    }
  }
</script>

<style scoped>
  .active {
    color: red
  }
</style>