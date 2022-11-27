<template>
  <div>
    <h2>{{ message }}</h2>
    <button @click="message = 'hello home'">change message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'home'
      }
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      console.log('created');
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('Mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeUnmount() {
      console.log('beforeUnMount');
    },
    unmounted() {
      console.log('unMounted');
    }
  }
</script>

<style lang="scss" scoped>

</style>