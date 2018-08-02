import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VModal from 'vue-js-modal'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios.create({
  baseURL: 'http://35.197.158.52/'
})

Vue.use(VModal)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
