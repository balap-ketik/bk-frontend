import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let host = 'http://localhost:3000'
if (document.location.hostname !== 'localhost') {
  host = 'http://ayojoget-api.geekosta.com'
}

const request = axios.create({
  baseURL: host
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    player: localStorage.username,
    leaders: []
  },
  mutations: {
    fillLeaders (state, payload) {
      state.leaders = payload
    }
  },
  actions: {
    showLeaders: function (context) {
      request.get('/leaderboards').then(response => {
        context.commit('fillLeaders', response.data.leaders)
      }).catch(error => {
        console.log(error)
      })
    }
  }
})

export default store
