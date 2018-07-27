import Vue from 'vue'
import Router from 'vue-router'
import {getToken,removeToken} from '@/utils/token';
import  {routers} from "./router";

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: routers
})

router.beforeEach((to ,from,next)=>{
//  console.log(getToken());
  if(!getToken()){
    next({name:'login'})
  }else {
      next()
  }

})

