<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
    <!-- 动态插槽 -->
    <div class="addition">
      <slot :name="slotName"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      slotName: {
        type: String,
        require: true
      }
    }
  }
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 45px;
}
.left {
  width: 40px;
  background-color: pink;
}
.center {
  flex: 1;
  background-color: purple;
}
.right {
  width: 40px;
  background-color: pink;
}
</style>