<template>
  <button 
    :class="['i-button', 'i-button-size-' + size, {disabled: disabled}]" 
    :disabled="disabled"
    @click="clickHandler">
    <slot name="icon"></slot>
    <p>
      <slot></slot>
    </p>
    
  </button>
</template>
<script>
function oneOf(value, validList) {
  for (var i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    } 
  }
  return false
}
export default {
  props: {
    size: {
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    clickHandler(event){
      if (this.disabled) {
        return
      }
      this.$emit('on-click', event)
    }
  }
}
</script>


<style lang="scss">
.i-button {
  background-color: #f01414;
  color: #fff;
  border-radius: 10px;
  &.disabled {
    background: grey;
  }
  &.i-button-size-large {
    width: 200px;
    height: 50px;
  }
  &.i-button-size-small {
    width: 160px;
    height: 30px;
  }
  &.i-button-size-default {
    width: 180px;
    height: 40px;
  }
  p {
    margin: 0;
  }
}
</style>