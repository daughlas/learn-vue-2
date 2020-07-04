<template>
  <div class="i-tab">
    <div class="i-tab-header">
      <div class="i-tab-header-item" 
          v-for="(item, index) in tabs" :key="item.name"
          @click="tabClick(index)"
          :class="{active: index===activatedIndex}"
          >
        {{item.name}}
      </div>
    </div>
    <div class="i-tab-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => {
        return [
          {name: 'tab1'},
          {name: 'tab2'}
        ]
      }
    }
  },
  data() {
    return {
      activatedIndex: 0
    }
  },
  methods: {
    tabClick(index) {
      if(index === this.activatedIndex) {
        return;
      }
      this.activatedIndex = index;
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss">
.i-tab {
  height: 100%;
  .i-tab-header {
    display: flex;
    .i-tab-header-item {
      height: 48px;
      padding: 0 24px;
      cursor: pointer;
      box-sizing: border-box;
      opacity: .6;
      text-align: center;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      position: relative;
      &.active:after {
        content: '';
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1px solid blue;
      }
    }
  }
  .i-tab-body {
    height: calc(100% - 48px);
  }
}
</style>