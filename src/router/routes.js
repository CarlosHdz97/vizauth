
const routes = [
  {
    path: '/',
    component: () => import('layouts/AccountLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account/Index.vue') }
    ]
  },
  {
    path: '/users',
    component: () => import('layouts/AccountLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account/Users.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AccountLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Login.vue') },
      { path: 'password', component: () => import('pages/Auth/Password.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
