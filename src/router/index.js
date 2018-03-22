import Vue from 'vue'
import Router from 'vue-router'
import Notif from '@/components/Notif'
import BattleRoom from '@/components/BattleRoom'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Notif',
      component: Notif
    },
    {
      path: '/battle-room',
      name: 'BattleRoom',
      component: BattleRoom
    }
  ]
})
