import Vue from 'vue'
import axios from 'axios'
import {router} from '@/router/index'
import * as tokenUtils from "./token";
import * as config from './sys-config'
import {LoadingBar,Notice} from 'iview';

const url="http://" +config.host+":"+config.port+config.server_context;

// create axios instance
const service = axios.create({
  baseURL:url,
  timeout: config.timeout,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request  interceptor
service.interceptors.request.use(config => {
  config.headers['token'] =tokenUtils.getToken();
  LoadingBar.start();
  return config
}, error => {
  LoadingBar.error();
  return Promise.reject(error)
})

// response  interceptor
service.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token invalid
    tokenUtils.removeToken()
    router.push({ name: 'login' })
  }else if (response.data && response.data.code === 403) { // 403, no permission
    router.push({ name: 'login' })
  }
  if(response.data && response.data.code != 0){
    LoadingBar.error();
    Notice.error({
      title: '提示',
      desc: response.data.msg
    });
  }else {
    LoadingBar.finish();
  }
  return response
}, error => {
  LoadingBar.error();
  return Promise.reject(error)
})

export default service


