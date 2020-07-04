<template>
  <div>
    <h1>son component</h1>
    <input type="text" v-model="content">
    <button> broadcast something</button>
  </div>
</template>

<script>
export default {
  name: 'son',
  data() {
    content: ''
  },
  methods: {
    broadcast(componentName, eventName, props) {
      const that = this
      this.$children.forEach(child => {
        let name = child.$options.name;
        if (name && name!== componentName) {
          child.broadcast.apply(child, [componentName, eventName].concat([props]))
        } else {
          child.$emit.apply(that, [componentName, eventName].concat([props]))
        }
      })
    }
  }
}
</script>

<style>

</style>