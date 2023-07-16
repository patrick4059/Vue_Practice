import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 全局css
import global from './assets/css/global.css'

// 导入icon
import './assets/iconfonts/iconfont.css'

import axios from 'axios'

import './mock/inidex'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8080/'

axios.interceptors.request.use(config => {
  // 每次发起请求都携带token
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  global,
  render: h => h(App)
}).$mount('#app')
