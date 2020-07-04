<template>
  <div>
    I'm root component.
    <!-- Data is {{myData}} -->
    <Son></Son>
  </div>
</template>

<script>
import Son from './son'
import { setTimeout } from 'timers';
export default {
  components: {
    Son
  },
  provide() {
    return {
      root: this,
      myData: `I'm a data provided in root component`
    }
  },
   created() {
     this.getUserInfo();
    // const that = this
    // setTimeout(() => {
    //   while(!(that.num--)) {
    //     that.myData = 'data changed'
    //   }
    // }, 1000)
  },
  data() {
    return {
      userInfo: null,
       num: 5
    }
  },
  methods: {
    getUserInfo() {
      const that = this
      setTimeout(() => {
        that.userInfo = {name: '吕嘉文'}
      } ,1000)
    }
  }
}
</script>

<style>

</style>
