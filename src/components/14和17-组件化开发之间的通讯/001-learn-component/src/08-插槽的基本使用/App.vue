<template>
  <div>
    <my-slot-cpn>
      <button>我是按钮</button>
    </my-slot-cpn>

    <my-slot-cpn>
      我是普通的文本
    </my-slot-cpn>

    <my-slot-cpn>
      <MyButton></MyButton>
    </my-slot-cpn>

    <my-slot-cpn>
    </my-slot-cpn>
  </div>
</template>

<script>
  import MySlotCpn from './MySlotCpn.vue'
  import MyButton from './MyButton.vue'
  export default {
    components: {
      MySlotCpn,
      MyButton
    }
  }
</script>

<style lang="scss" scoped>

</style>