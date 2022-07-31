import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Welcome from './views/welcome.vue'
import Users from './views/users.vue'
import Goods from './views/goods.vue'
import Homes from './views/homepage.vue'
import Gys from './views/supplier.vue'
import Staff from './views/staff.vue'
import Shop from './views/goods.vue'
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      {
        path: '/users',
        component: Users
      },
      {
        path: '/goods',
        component: Goods
      },
      {
        path: '/homepage',
        component: Homes
      },
      {
        path: '/supplier',
        component: Gys
      },
      {
        path: '/staff',
        component: Staff
      },
      {
        path: '/shop',
        component: Shop
      },
    ]
  },
  
]

const router = new Router({
  mode: 'history',
  routes
})
// router.beforeEach((to, from, next) => {
//   if(to.path === '/') return next()
//   let token = window.sessionStorage.getItem('token')
//   if(!token) return next('/')
//   next()
// })
export default router