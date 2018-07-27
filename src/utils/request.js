import Vue from 'vue'
import axios from 'axios'
import router from '@/router'
import * as tokenUtils from "./token";
import * as config from './sys-config'

const url=config.host+config.port+config.server_context;

// 创建axios实例
const service = axios.create({
  baseURL:url,
  timeout: config.timeout,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

// request拦截器
service.interceptors.request.use(config => {
  config.headers['token'] =tokenUtils.getToken()
  return config
}, error => {
  return Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(response => {
  if (response.data && response.data.code === 401) { // 401, token失效
    tokenUtils.removeToken()
    router.push({ name: 'login' })
  }
  if (response.data && response.data.code === 403) { // 403, 无权限
    router.push({ name: 'login' })
  }
  return response
}, error => {
  return Promise.reject(error)
})

export default service


