<template>
  <div>
    I'm child Component.data: {{myData}}
  </div>
</template>

<script>
export default {
  inject: ['myData']
}
</script>

<style>

</style>
