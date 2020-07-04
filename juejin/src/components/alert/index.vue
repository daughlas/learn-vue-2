<template>
  <div>
    <button @click="showAlert()">显示 Alert</button>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      console.log(this)
      this.$Alert.info({
        content: '这是一条信息',
        duration: 3
      })
    }
  }
}
</script>

<style>

</style>
