import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: '首页',
      path: '/',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: '/index',
          component: () => import('@/views/home/Home.vue'),
          name: '首页' + +new Date(),
          meta: {
            title: '首页',
            isMenu: true
          }
        }
      ]
    }
  ]
})

export default router
