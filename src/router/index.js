import Vue from 'vue'
import Router from 'vue-router'
import Notif from '@/components/Notif'
import LeaderBoard from '@/components/LeaderBoard'
import Home from '../components/Home'
import BattleRoom from '@/components/BattleRoom'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/battle-room',
      name: 'BattleRoom',
      component: BattleRoom
    },
    {
      path: '/leaderboards',
      name: 'LeaderBoard',
      component: LeaderBoard
    }
  ]
})
