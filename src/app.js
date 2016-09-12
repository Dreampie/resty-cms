import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./component/home/home.component";
import About from "./component/about/about.component";

// install router
Vue.use(VueRouter)

// routing
var router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '*', redirect: '/'}
  ]
})

new Vue({
  router,
  template: require('./app.template'),
  style: require('./app.style')
}).$mount('#app')
