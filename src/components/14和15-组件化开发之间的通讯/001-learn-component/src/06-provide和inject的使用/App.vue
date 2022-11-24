<template>
  <div>
    <home></home>
    <button @click="addName">add name</button>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import { computed } from 'vue'

  export default {
    components: {
      Home
    },
    // 当provide需要引用data中的数据的时候 也就是需要使用this关键字的时候 provide 需要写成一个函数 源码在函数中绑定的this为当前的组件实例
    provide() {
      return {
        name: 'why',
        age: 18,
        // 响应式
        length: computed(() => this.names.length).value
      }
    },
    data() {
      return {
        names: ['cba', 'nba', 'fba']
      }
    },
    methods: {
      addName() {
        this.names.push('aaa')
        console.log(this.names)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>