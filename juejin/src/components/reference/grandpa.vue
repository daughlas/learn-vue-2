<template>
  <div style="border: 1px solid #ccc;padding: 10px;">
    <h1> I'm grandpa component!</h1>
    <button @click="clickHandler">点我，调用 father component 的 sayHello 方法</button>
    <father-component ref="father"></father-component>
  </div>
</template>

<script>
import FatherComponent from './father.vue'
export default {
  components: {
    FatherComponent
  },
  methods: {
    sayHello () {
      window.alert("Hello, I'm grandpa component");
    },
    clickHandler() {
      // this.$refs.father.sayHello();
      this.$children[0].sayHello();
    }
  }
}
</script>

<style>

</style>
