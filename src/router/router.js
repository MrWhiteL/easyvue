
const _import = require('./import-' + process.env.NODE_ENV);

//系统异常路由
export const errors=[
  {
    path: '/403',
    name: '403',
    title: '无访问权限',
    component:  _import('exception/403'),
  },
  {
    path: '/404',
    name: '404',
    title: '页面访问不到',
    component:_import('exception/404')
  },
  {
    path: '/500',
    name: '500',
    title: '服务器错误',
    component:  _import('exception/500')
  },
];

//系统管理路由
export const system=[
  {
    path: '/system',
    name: 'system',
    title: '系统配置',
    meta:{
      visible:true
    },
    children:[
      ...errors
    ]
  }
]

//基础路由
export const basics=[
  {
    path: '/',
    name: 'login',
    title: '登录',
    component:  _import('login'),
    meta:{
      visible:false
    }
  },
  {
    path: '/main',
    name: 'main',
    title: '主页面',
    component:_import('main/main'),
    meta:{
      visible:false
    },
    children:[
      {
        path: '/home',
        name: 'home',
        title: '首页',
        component:  _import('home/home'),
        meta:{
          visible:true
        }
      },
      ...errors
    ]
  }

];


export const routers = [
  ...basics
];

