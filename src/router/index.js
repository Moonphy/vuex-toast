import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Global from '@/views/global'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/global',
      name: 'Global',
      component: Global
    }
  ]
})
