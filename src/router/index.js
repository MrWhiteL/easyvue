import Vue from 'vue'
import Router from 'vue-router'
import {getToken,removeToken} from '@/utils/token';
import  {routers} from "./router";
import {LoadingBar} from 'iview';

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: routers
})

router.beforeEach((to ,from,next)=>{
  LoadingBar.start();
  if(to.name!=='login' && !getToken()){
    next({name:'login'})
  }else {
      next()
  }
})

router.afterEach(route => {
  LoadingBar.finish();
});
