<template>
  <div>
    <h1>father component</h1>
    <input type="text" v-model="content">
    <button> broadcast something</button>
  </div>
</template>

<script>
export default {
  name: 'father',
  data() {
    content: ''
  }
}
</script>

<style>

</style>
