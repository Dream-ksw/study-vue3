<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <CounterOperation @changeCounter="changeCounter"></CounterOperation>
  </div>
</template>

<script>
  import CounterOperation from './CounterOperation.vue'
  export default {
    components: {
      CounterOperation
    },
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      changeCounter(value) {
        this.counter += value
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>