// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'

let host = 'http://localhost:3000'

if (document.location.hostname !== 'localhost') {
  host = 'http://bk-api.geekosta.com'
}
Vue.use(VueSocketio, host)
Vue.use(require('vue-shortkey'))

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
