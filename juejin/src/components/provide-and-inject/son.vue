<template>
  <div>
    I'm son component. data is {{myData}}
    <p>全局用户名：{{root.userInfo && root.userInfo.name}}</p>
    <child></child>
  </div>
</template>

<script>
import Child from './child'
export default {
  inject: ['myData', 'root'],
  components: {
    Child
  },
}
</script>

<style>

</style>
