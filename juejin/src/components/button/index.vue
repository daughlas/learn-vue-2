<template>
  <div>
    <i-button size="large" @on-click="clickHandler">
      <span slot="icon">hello world</span>
      大号
    </i-button>
    <i-button size="default" @on-click="clickHandler">
      默认
    </i-button>
    <i-button size="small" :disabled="true" @on-click="clickHandler">
      小号
    </i-button>
    <div style="margin-top: 20px;">
      <grandpa-component ref="grand"></grandpa-component>
    </div>
  </div>
</template>

<script>
import IButton from './button.vue'
export default {
 components: {
   IButton
 }
}
</script>

<style>

</style>
