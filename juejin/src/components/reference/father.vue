<template>
  <div style="border: 1px solid #ccc;padding: 10px;margin-top: 20px;">
    <h2>I am father component</h2>
    <button @click="clickHandler">点我，调用 grandpa component 的 sayHello 方法</button>
    <son-component></son-component>
  </div>
</template>

<script>
import SonComponent from './son'
export default {
  components: {
    SonComponent
  },
  methods: {
    sayHello () {
      window.alert("Hello, I'm father component");
    },
    clickHandler() {
      this.$parent.sayHello();
    }
  }
}
</script>

<style>

</style>
