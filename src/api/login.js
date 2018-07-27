import request from '@/utils/request'
import requestParam from '@/utils/requestParam'

// 登录
export function login (params) {
  return request({
    url:'/user/auth',
    method: 'post',
    data: requestParam(params)
  })
}

// 退出
export function logout () {
  return request({
    url: '/logout',
    method: 'post',
    data: requestParam()
  })
}

