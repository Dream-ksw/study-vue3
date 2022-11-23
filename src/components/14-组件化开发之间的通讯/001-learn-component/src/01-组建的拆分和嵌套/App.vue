<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Main from './Main.vue'
  import Footer from './Footer.vue'
  export default {
    components: {
      Header,
      Main,
      Footer
    }
  }
</script>

<style lang="scss" scoped>

</style>