<template>
  <div>
    <h2 ref="title">我是标题</h2>
    <nav-bar ref="navBar"></nav-bar>
    <button @click="getRefElementOrComponent">获取ref绑定的元素或组件</button>
    <!-- <loading /> -->
  </div>
</template>

<script>
  // 获取组件实例的方式
  // $refs $parent $root ($children在vue3中已经移除了)  
  
  import NavBar from './NavBar.vue'
  // import Loading from './Loading.vue'
  // import { defineAsyncComponent } from 'vue'
  // const NavBar = defineAsyncComponent(() => import('./NavBar.vue'))
  export default {
    name: 'App',
    components: {
      NavBar,
      // Loading
    },
    data() {
      return {
        message: 'APP'
      }
    },
    methods: {
      getRefElementOrComponent() {
        console.log(this.$refs.title.innerHTML)
        console.log(this.$refs.navBar)
        console.log(this.$refs.navBar.message)
        // this.$refs.navBar.sayHello()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>