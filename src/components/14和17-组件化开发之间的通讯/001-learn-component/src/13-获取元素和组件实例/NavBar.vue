<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="getParentOrRootComponent">获取父组件和根组件</button>
    <!-- <loading /> -->
  </div>
</template>

<script>
  // import Loading from './Loading.vue'
  export default {
    name: 'NavBar',
    components: {
      // Loading
    },
    data() {
      return {
        message: 'nav-bar'
      }
    },
    methods: {
      sayHello() {
        console.log('say hello')
      },
      getParentOrRootComponent() {
        console.log(this.$parent.message)
        console.log(this.$root.message)

        // $el 获取组件实例元素
        console.log(this.$parent.$el);
      }
    }
  }
</script>

<style scoped>

</style>