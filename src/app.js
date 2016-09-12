import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./component/home.component";

// install router
Vue.use(VueRouter)

// routing
var router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '*', redirect: '/'}
  ]
})

new Vue({
  router,
  template: require('./app.template'),
  style: require('./app.style')
}).$mount('#app')
