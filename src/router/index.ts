import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { createRouterGuard } from './guard'

const routes: RouteRecordRaw[] = [
  {
    name: 'Root',
    path: '/',
    redirect: '/analytics',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/analytics',
    component: () => import('@/views/analytics/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

createRouterGuard(router)

export { router }
