<template>
<div>
  <i-form :model="formValidate" :rules="ruleValidate" ref="form">
    <i-form-item label="用户名" prop="name">
      <i-input v-model="formValidate.name"></i-input>
    </i-form-item>
    <i-form-item label="邮箱" prop="mail">
      <i-input v-model="formValidate.mail"></i-input>
    </i-form-item>
  </i-form>
  <div class="btns">
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
  </div>
</div>
  
</template>

<script>
import IForm from './form.vue'
import IFormItem from './form-item'
import IInput from './input'
export default {
  components: {
    IForm,
    IFormItem,
    IInput
  },
  data() {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        mail: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {type: 'email', message: '邮箱格式不正确', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      // this.$refs.form.validate((valid) => {
      //   if (valid) {
      //     window.alert('提交成功');
      //   } else {
      //     window.alert('表单校验失败');
      //   }
      // })

      // 或者
      const validate = this.$refs.form.validate()
      validate.then((valid) => {
        if (valid) {
          window.alert('提交成功');
        } else {
          window.alert('表单校验失败');
        }
      })
    },
    handleReset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="scss">
.btns {
  margin-top: 20px;
  button {
    margin-right: 20px;
  }
}
</style>
