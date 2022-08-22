import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'gos',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'homes',
    redirect:'/header',
    component: () => import('../components/Home.vue'),
    children:[
      {
        path: '/header',
        name: 'header',
        component: () => import('../components/headers.vue'),
      },
      {
        path: '/aside',
        name: 'aside',
        component: () => import('../components/aside.vue'),
      },
      {
        path: '/Main',
        name: 'Main',
        component: () => import('../components/Main.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
