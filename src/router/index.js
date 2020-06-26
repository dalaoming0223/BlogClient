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
    },
    {
      path: '/blog',
      component: Layout,
      children: [
        {
          path: ':uuid',
          component: () => import('@/views/blog/Blog.vue'),
          meta: {
            isMenu: true
          }
        }
      ]
    },
    {
      path: '/auth',
      component: Layout,
      children: [
        {
          path: 'register',
          component: () => import('@/views/auth/Login.vue'),
          meta: {
            title: '注册',
            isMenu: true
          }
        },
        {
          path: 'login',
          component: () => import('@/views/auth/Register.vue'),
          meta: {
            title: '登录',
            isMenu: true
          }
        }
      ]
    }
  ]
})

export default router
