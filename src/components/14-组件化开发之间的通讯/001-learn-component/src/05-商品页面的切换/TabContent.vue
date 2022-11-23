<template>
  <div class="tab-control">
    <div 
      class="tab-control-item"
      :class="{active: currentIndex === index}"
      v-for="(title, index) in titles" 
      :key="title"
      @click="clickTitle(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      clickTitle(index) {
        this.currentIndex = index
        this.$emit('clickTitle', index)
      }
    }
  }
</script>

<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex: 1;
  text-align: center;
}

.tab-control-item.active {
  color: red;
}

.tab-control-item.active span {
  padding: 5px;
  border-bottom: 2px solid red;
}
</style>