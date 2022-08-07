import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/index',
    component: () => import('../components/Index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../components/Home.vue')
      },
      {
        path: '/goods',
        component: () => import('../components/Goods.vue')
      },
      {
        path: '/member',
        component: () => import('../components/Member.vue')
      },
      {
        path: '/staff',
        component: () => import('../components/Staff.vue')
      },
      {
        path: '/supplier',
        component: () => import('../components/Supplier.vue')
      }
    ]
  },
  
]

const router = new VueRouter({
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next();
//   //获取token
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })


export default router
