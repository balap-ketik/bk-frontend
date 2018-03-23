import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex)

const store = new Vuex.Store({
  state: {
    playerList: null
  },
  mutations: {
    someMethod () {
      return ''
    }
  },
  actions: {
    someMethod2 () {
      return ''
    }
  }
})