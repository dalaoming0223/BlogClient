import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout'
Vue.use(VueRouter)

const router = new VueRouter({
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
    },
    {
      path: '/blog',
      component: Layout,
      children: [
        {
          path: ':blogId',
          component: () => import('@/views/blog/Blog.vue')
        }
      ]

    }
  ]
})

export default router
