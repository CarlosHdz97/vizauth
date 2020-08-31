//const indexSupport import('pages/Support/Index.vue')
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
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account/Users.vue') },
      { path: 'create', component: () => import('pages/Account/Create.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Auth/Login.vue') },
      { path: 'password', component: () => import('pages/Auth/Password.vue') },
      { path: 'recoveryPassword', component: () => import('pages/Auth/RecoveryPassword.vue') }
    ]
  },
  {
    path: '/support',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ 
      path: '',
      /* component: () => import('pages/Support/Index.vue') */ 
      components: {
        default : () => import('pages/Support/Index.vue'),
        settings : () => import('components/Support/Config.vue')
      }
    }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
