import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PlayerList from '../components/OnlinePlayerList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/playerlist',
      name: 'PlayerList',
      component: PlayerList
    }
  ]
})
