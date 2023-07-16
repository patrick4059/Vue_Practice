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

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  global,
  render: h => h(App)
}).$mount('#app')
