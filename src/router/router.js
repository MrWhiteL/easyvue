
const _import = require('./import-' + process.env.NODE_ENV);

export const basics=[
  {
    path: '/',
    name: 'login',
    component:  _import('login')
  },
  {
    path: '/main',
    name: 'main',
    component:_import('main')
  }
];
export const errors=[
  {
    path: '/403',
    name: '403',
    component:  _import('exception/403')
  },
  {
    path: '/404',
    name: '404',
    component:_import('exception/404')
  },
  {
    path: '/500',
    name: '500',
    component:  _import('exception/500')
  },
];

export const routers = [
  ...basics,...errors
];

