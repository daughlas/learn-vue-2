<template>
  <ul>
    <li v-for="item in menus" :key="item.url">
      <router-link  :to="item.url">{{item.name}}</router-link>
    </li>
  </ul>
</template>

<script>
import menus from '../../config/menu.js'
export default {
  data() {
    return {
      menus: menus
    }
  }
}
</script>

<style lang="scss">
ul{
  padding: 0;
  li {
    list-style: none;
    text-align: left;
    padding: 10px 20px;
    a {
      color: #333;
      font-size: 18px;
      text-decoration: none;
    }
  }
}
</style>
