<template>
  <div>
    <Menu :menuList="menuList" @item-clicked="itemClickedHandler($event)">
      打开
    </Menu>
    <ul class="list">
       <li v-for="(item, index) in list" :key="index">
        <div class="text">{{item.name}}</div>
        <div class="edit-menu">
          <edit-menu @edit="onEdit(item)" @delete="onDelete(item)" @detail="onDetail(item)">
            显示菜单
          </edit-menu>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Menu from './menu'
import editMenu from './edit-menu'
export default {
  components: {
    Menu,
    editMenu
  },
  data() {
    return {
      list: [
        {name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sapiente perspiciatis eveniet, architecto excepturi, cum ut molestias mollitia beatae quia perferendis illo provident autem exercitationem ex accusantium id officiis suscipit?'},
        {name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sapiente perspiciatis eveniet, architecto excepturi, cum ut molestias mollitia beatae quia perferendis illo provident autem exercitationem ex accusantium id officiis suscipit?'},
        {name: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sapiente perspiciatis eveniet, architecto excepturi, cum ut molestias mollitia beatae quia perferendis illo provident autem exercitationem ex accusantium id officiis suscipit?'}
      ],
      menuList: [
        {name: '菜单一', clickHandler: "menuOneHandler"},
        {name: '菜单二', clickHandler: 'menuTwoHandler'}
      ]
    }
  },
  methods: {
    itemClickedHandler(ev) {
      this[ev.clickHandler](ev)
    },
    menuOneHandler(ev) {
      alert(ev.name)
    },
    menuTwoHandler(ev) {
      alert(ev.name)
    },
    onEdit(item) {
      alert(`edit: ${item.name}`)
    },
    onDetail(item) {
      alert(`detail: ${item.name}`)
    },
    onDelete(item) {
      alert(`delete: ${item.name}`)
    },
  }
}
</script>

<style lang="scss">
.list {
  li {
    display: flex;
    align-items: center;
    .text {
      display: inline-block;
      max-width: 300px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .edit-menu {
      margin-left: 400px;
    }
  }
}
</style>
