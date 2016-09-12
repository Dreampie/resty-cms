import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = resolve => require(['./component/home/home.component'], resolve)
const About = resolve => require(['./component/about/about.component'], resolve)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Home},
    {path: '/about', component: About},
    {path: '*', redirect: '/'}
  ]
})