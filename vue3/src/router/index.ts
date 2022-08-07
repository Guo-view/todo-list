import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/heads',
    redirect:'/welcome',
    component: () => import('../components/heads.vue'),
    children: [
      {
        path: '/users',
        name: 'users',
        component: () => import('../components/Users.vue')
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../components/welcome.vue')
      },
      {
        path: '/supplier',
        name: 'supplier',
        component: () => import('../components/Supplier.vue')
      },
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../components/Goods.vue')
      },
      {
        path: '/staff',
        name: 'staff',
        component: () => import('../components/Staff.vue')
      },
    ]
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
