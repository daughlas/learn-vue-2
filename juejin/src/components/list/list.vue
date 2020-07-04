<template>
  <div :class="$style.list">
    <div :class="$style.item" v-for="(item, index) in list" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" module>
.list {
  box-sizing: border-box;
  padding: 20px;
  .item {
    margin-bottom: 20px;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
  }
}
</style>
