<template>
  <div>
    <!-- 1.默认绑定和事件处理 -->
    <!-- <button @click="update">通知父组件改变值</button>
    <h2>组件通过v-model传递的值: {{ modelValue }}</h2> -->

    <!-- 2.通过input -->
    <!-- <input type="text" :value="modelValue" @input="update"> -->

    <!-- 3.不能修改父组件传递过来的值  单向数据流 -->
    <!-- <input type="text" v-model="modelValue"> -->

    <!-- 4.可以使用计算属性 -->
    <input type="text" v-model="newModelValue">
    <input type="text" v-model="newTitle">
  </div>
</template>

<script>
  export default {
    props:{
      modelValue: String,
      title: String
    },
    computed: {
      newModelValue: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      },
      newTitle: {
        get() {
          return this.title
        },
        set(value) {
          this.$emit('update:title', value)
        }
      }
    },
    methods: {
      update(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>