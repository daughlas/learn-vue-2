<template>
  <label>
    <span>
      <input 
          type="checkbox"
          :disabled="disabled"
          :checked="currentValue"
          @change="change">
    </span>
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: "iCheckbox",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    trueValue: {
      type: [Boolean, Number, String],
      default: true
    },
    falseValue: {
      type: [Boolean, Number, String],
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false
      }

      const checked = event.target.checked
      this.currentValue = checked

      const value = checked ? this.trueValue : this.falseValue
      this.$emit('input', value)
      this.$emit('on-change', value)
    }
  }
}
</script>

<style>

</style>
