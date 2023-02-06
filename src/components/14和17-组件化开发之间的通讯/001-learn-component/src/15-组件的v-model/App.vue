<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <!-- 组件上使用v-model -->
    <!-- v-model在组件上如果默认不加名字的话 传递的其实的是 modelValue -->
    <!-- <k-input :modelValue="message" @update:modelValue="message = $event"></k-input> -->
    <!-- <k-input v-model="message"></k-input> -->

    <!-- 组件上可以同时使用多个v-model  可以使用默认的,也可以自定义名称 -->
    <k-input v-model="message" v-model:title="title"></k-input>



    <h2>message: {{ message }}</h2>
    <h2>title: {{ title }}</h2>
  </div>
</template>

<script>
  import KInput from './KInput.vue'
  export default {
    components: {
      KInput
    },
    data() {
      return {
        message: 'hello world',
        title: 'abc'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>