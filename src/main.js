import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from "./store/store"
import {
  routes
} from "./routes"
Vue.config.productionTip = false
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

Vue.filter('currency', (value) => {
  return "$" + value.toLocaleString()

})

new Vue({
  router: router,
  store,
  render: h => h(App),

}).$mount('#app')