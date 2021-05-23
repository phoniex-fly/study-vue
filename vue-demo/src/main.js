import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/global.css'
import axios from 'axios'
import store from './store'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://localhost:8888'
axios.interceptors.request.use(config => {
  console.log('config:', config)
  if (config.url === '/loginWithNocode') {
    return config
  }
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
