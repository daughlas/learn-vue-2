import Vue from "vue"
import VueAwesomeSwiper from "vue-awesome-swiper"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>",
})
/* eslint-enable no-new */
