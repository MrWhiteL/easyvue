import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login.vue'
import main from '@/views/main.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
