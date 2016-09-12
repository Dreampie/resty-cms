import Vue from 'vue'
import router from './router'

new Vue({
  router: router,
  template: require('./app.template'),
  style: require('./app.style')
}).$mount('#app')
