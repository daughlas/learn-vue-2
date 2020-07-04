var myVue = (function() {
  var __DEFAULTS__ = {
    el: "body",
    data: {}
  }

  function Observer() {
    // TODO 依赖手机
  }

  function Vue(options) {
    this.extend(__DEFAULTS__, options)
    // 字符串转换成 DOM 结构
    this.el = document.querySelector(this.el)
    var data = this.data
    var models = this.el.querySelectorAll("[v-model]")
    for (var i = 0; i < models.length; i++) {
      models[i].onkeyup = function() {
        data[this.getAttribute("v-model")] = this.value
      }
    }
    // 监事 data 的内容
    this.observer();

    Object.defineProperty(this.data, "__ob__", {
      value: new Observer,
      configurable: false
    })
  }

  Vue.prototype = {
    extend: function() {
      for (var i = 0; i < arguments.length ;i++) {
        for (var prop in arguments[i]) {
          this[prop] = arguments[i][prop]
        }
      }
    },
    observer: function () {
      var el = this.el
      for (let key in this.data) {
        // 要解决一个问题，函数不是在定义的时候被调用
        // 方案一：用 let in 循环，作用于保存在一次循环中
        // 方案二：闭包
        this.defineReactive$$1(this.data, key, this.data[key], el)
      }
    },
    defineReactive$$1: function(obj, key, val, el) {
      var property = Object.getOwnPropertyDescriptor(obj, key)
      var getter = property && property.get
      var setter = property && property.set
      Object.defineProperty(obj, key, {
        configurable: true,
        get: function reactiveGetter() {
          var value = getter ? getter.call(obj) : val
          return value
        },
        set: function reactiveSetter(newVal) {
          // 如果用户传入 model 的时候调用了 get
          var value = getter ? getter.call(obj) : val
          if (newVal === value || (newVal !== newVal && value !==value)) {
            return
          }
          if (setter) {
            setter.call(obj, newVal)
          } else {
            val = newVal
          }

          var binds = el.querySelectorAll("[v-bind=\""+key+"\"]")
          for (var i = 0; i < binds.length; i++) {
            binds[i].innerHTML = val
          }
          var models = el.querySelectorAll("[v-model=\""+key+"\"]")
          for (var i = 0; i < models.length; i++) {
            models[i].value = val
          }
        }
      })
    }
  }

  return Vue
})()