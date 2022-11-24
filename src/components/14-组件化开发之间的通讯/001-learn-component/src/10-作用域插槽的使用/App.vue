<template>
  <div>
    <child-cpn :names="names">
      <template v-slot:why="slotProps">
        <button>{{ slotProps.item }}-{{ slotProps.index }}</button>
      </template>
    </child-cpn>

    <child-cpn :names="names">
      <template v-slot:why="slotProps">
        <strong>{{ slotProps.item }}-{{ slotProps.index }}</strong>
      </template>
    </child-cpn>
  </div>
</template>

<script>
  import ChildCpn from './ChildCpn.vue'
  export default {
    components: {
      ChildCpn
    },
    data() {
      return {
        names: ['why', 'abc', 'cba', 'nba']
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>