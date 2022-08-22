import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'shye',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'homes',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/users',
        name: 'users',
        component: () => import('../components/Users.vue'),
      },
      {
        path: '/tabbers',
        name: 'tabber',
        component: () => import('../components/Tabbers.vue'),
      },
      {
        path: '/gjhua',
        name: 'gjhua',
        component: () => import('../components/Gjhua.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
