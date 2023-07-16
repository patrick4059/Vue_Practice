import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/index'
import Home from '../components/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') next()
  // // 当token不存在时强制跳转到登录页面
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) next('/login')
  next()
})

export default router
