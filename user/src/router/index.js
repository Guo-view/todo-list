import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home.vue'),
    children:[
      {
        path: '/users',
        component: () => import('../components/Users.vue'),
      },
      {
        path: '/lecturer',
        component: () => import('../components/Lecturer.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
