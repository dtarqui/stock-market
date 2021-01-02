import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from "./store/store"
import VueResource from "vue-resource"
import {
  routes
} from "./routes"

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = "https://vue-http-fulano.firebaseio.com/"

Vue.filter('currency', (value) => {
  return "$" + value.toLocaleString()

})

const router = new VueRouter({
  mode: 'history',
  routes: routes
})
new Vue({
  router: router,
  store,
  render: h => h(App),

}).$mount('#app')