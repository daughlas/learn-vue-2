<template>
  <div>
    <h1>单独使用</h1>
    <section>
      <i-checkbox v-model="single">您好</i-checkbox>
      <div>
        singgle 的值： {{single}}
      </div>
    </section>
    <h1>组合使用</h1>
    <section></section>
  </div>
</template>

<script>
import ICheckbox from './checkbox'
export default {
  components: {
    ICheckbox
  },
  data() {
    return {
      single: false
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>
