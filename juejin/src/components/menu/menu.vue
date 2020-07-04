<template>
  <div v-clickoutside="hide" :class="$style['i-menu']">
    <div :class="$style.button" @click="toggle">
      <slot></slot>
    </div>
    <ul v-if="isMenuShow">
      <li
        v-for="(item,index) in menuList"
        :key="index"
        @click="itemClickHandler(item)"
      >{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
const clickoutside = {
  // 初始化指令
  bind(el, binding) {
    function documentHandler(e) {
      if (el.contains(e.target)) {
        return false;
      }
      if (binding.expression) {
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el) {
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};

export default {
  props: {
    menuList: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      isMenuShow: false
    };
  },
  directives: {clickoutside},
  methods: {
    toggle() {
      this.isMenuShow = !this.isMenuShow;
    },
    itemClickHandler(item) {
      this.isMenuShow = false;
      this.$emit("item-clicked", item);
    },
    hide() {
      this.isMenuShow = false;
    }
  }
};
</script>

<style lang="scss" module>
.i-menu {
  position: relative;
  > ul {
    position: absolute;
    margin: 0;
    padding: 8px 0;
    display: static;

    box-sizing: border-box;
    border-radius: 2px;
    z-index: 8;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    background: #fff;
    > li {
      min-width: 88px;
      font-size: 14px;
      line-height: 40px;
      height: 40px;
      padding: 0 16px;
      cursor: pointer;
    }
  }
}
</style>
