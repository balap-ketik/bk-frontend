import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LeaderBoard from '@/components/LeaderBoard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/leaderboards',
      name: 'LeaderBoard',
      component: LeaderBoard
    }
  ]
})
