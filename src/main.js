// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
import VueSocketio from 'vue-socket.io'
import store from './store'
import axios from 'axios'

let host = 'http://localhost:3000'

if (document.location.hostname !== 'localhost') {
  host = 'http://ayojoget-api.geekosta.com'
}
Vue.prototype.$http = axios.create({
  baseURL: host
})
Vue.use(VueSocketio, host)
Vue.use(require('vue-shortkey'))

Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
