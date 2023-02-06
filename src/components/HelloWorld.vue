<template>
  <div>
    <h3>{{ props.msg }}</h3>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({ msg: String })
</script>

<style lang="scss" scoped>

</style>