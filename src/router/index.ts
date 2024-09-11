import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// import { createRouterGuard } from './guard'

const routes: RouteRecordRaw[] = [
  {
    name: 'Root',
    path: '/',
    redirect: '/mock',
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/analytics',
    component: () => import('@/views/analytics/index.vue'),
  },
  {
    path: '/a',
    component: () => import('@/views/slots/a.vue'),
  },
  {
    path: '/prop',
    component: () => import('@/views/propemit/f.vue'),
  },
  {
    path: '/computed',
    component: () => import('@/views/computed/index.vue'),
  },
  {
    path: '/withDefaults',
    component: () => import('@/views/withDefaults/index.vue'),
  },
  {
    path: '/breadcrumbs',
    meta: {
      title: '面包屑',
    },
    children: [
      {
        path: 'son',
        component: () => import('@/views/breadcrumbs/index.vue'),
        meta: {
          title: '面包屑儿子',
        },
      },
    ],
  },
  {
    path: '/proparray',
    component: () => import('@/views/proparray/f.vue'),
  },
  {
    path: '/flex',
    component: () => import('@/views/flex/index.vue'),
  },
  //
  {
    path: '/storeToRefs',
    component: () => import('@/views/storeToRefs/index.vue'),
  },
  {
    path: '/grid',
    component: () => import('@/views/grid/index.vue'),
  },
  {
    path: '/watch',
    component: () => import('@/views/watch/index.vue'),
  },
  {
    path: '/watchEffect',
    component: () => import('@/views/watchEffect/index.vue'),
  },
  // 新添加的路由
  {
    path: '/animator',
    component: () => import('@/views/animator/index.vue'),
  },
  {
    path: '/defineComponent',
    component: () => import('@/views/defineComponent/index.vue'),
  },
  {
    path: '/utils',
    component: () => import('@/views/utils/index.vue'),
  },
  {
    path: '/mock',
    component: () => import('@/views/mock/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

// createRouterGuard(router)

export { router }
