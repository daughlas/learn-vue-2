<template>
  <input 
    type="text"
    placeholder="请输入内容"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur">
</template>

<script>
import Emitter from '../../utils/mixins/emitter.js'
export default {
  name: 'iInput',
  mixins: [ Emitter ],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput(ev) {
      const value = ev.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('iFormItem', 'on-form-change', value)
    },
    handleBlur() {
       this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
    }
  }
}
</script>

<style style="scss">
  input {
    border: 1px solid #ccc;
  }
</style>
