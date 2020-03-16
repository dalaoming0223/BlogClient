import Vue from 'vue'

import router from './router'
import './plugins/element.js'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import Date from '@/utils/date'
Vue.config.productionTip = false

Vue.use(Date)
// Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
