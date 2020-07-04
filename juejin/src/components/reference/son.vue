<template>
  <div style="border: 1px solid #ccc;margin-top: 20px">
    <h4>I am father component</h4>
    <button @click="clickHandler">点我，调用 father component 的 sayHello 方法</button>
  </div>
</template>

<script>
export default {
  methods: {
    sayHello () {
      window.alert("Hello, I'm son component");
    },
    clickHandler() {
      this.$parent.sayHello();
    }
  }
}
</script>

<style>

</style>
