<template>
  <div>
    <h3>动态渲染 .vue 文件</h3>
    <i-display :code="code"></i-display>
  </div>
</template>

<script>
import defaultCode from './default-code.js'
import IDisplay from './display'

export default {
  components: {
    IDisplay
  },
  data() {
    return {
      code: defaultCode
    }
  }
}
</script>

<style>

</style>
