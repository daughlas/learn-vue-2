<template>
  <div>
    <Menu :menuList="menuList" @item-clicked="itemClickedHandler($event)">
      <slot></slot>
    </Menu>
  </div>
</template>

<script>
import Menu from './menu'
export default {
  components: {
    Menu
  },
  props: {
    hasDetailButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      menuList: [
        {name: '编辑asdfdf', clickHandler: "edit"},
        {name: '删除', clickHandler: 'delete'},
        {name: '详情', clickHandler: 'detail'}
      ]
    }
  },
  methods: {
    itemClickedHandler(ev) {
      this[ev.clickHandler]()
    },
    edit() {
      this.$emit('edit')
    },
    delete() {
      this.$emit('delete')
    },
    detail() {
      this.$emit('detail')
    }
  }
}
</script>

<style>
</style>