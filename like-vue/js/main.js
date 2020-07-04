// var app = new Vue({
//   el: "#app",
//   data: () => {
//     return {
//       message: 'hello world'
//     }
//   }
// })

var model = {
  message: 'hello ,this is a message',
  get message() {
    return '固定的用户的值'
  },
  set message(newVal) {
    console.log('customer set: newVal:' + newVal)
  },
  test: 'this is the test data'
}

var app = new myVue({
  el: "#app",
  data: model
})

model.message = 'hello'
model.test = 'world'