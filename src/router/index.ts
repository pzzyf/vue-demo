import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// import { createRouterGuard } from './guard'

const routes: RouteRecordRaw[] = [
  {
    name: 'Root',
    path: '/',
    redirect: '/sm',
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
  {
    path: '/lifeCycle',
    component: () => import('@/views/lifeCycle/index.vue'),
  },
  {
    path: '/packagejson',
    component: () => import('@/views/package.json/index.vue'),
  },
  {
    path: '/useSlot',
    component: () => import('@/views/useSlot/f.vue'),
  },
  {
    path: '/vcomponent',
    component: () => import('@/views/Vcomponent/index.vue'),
  },
  {
    path: '/toPathTree',
    component: () => import('@/views/toPathTree/index.vue'),
  },
  {
    path: '/toRaw',
    component: () => import('@/views/toRaw/index.vue'),
  },
  {
    path: '/27',
    component: () => import('@/views/27/index.vue'),
  },
  {
    path: '/promise',
    component: () => import('@/views/promise/index.vue'),
  },
  {
    path: '/exportDynamic',
    component: () => import('@/views/exportDynamic/index.vue'),
  },
  {
    path: '/interval',
    component: () => import('@/views/interval/index.vue'),
  },
  {
    path: '/css',
    component: () => import('@/views/css/index.vue'),
  },
  {
    path: '/transparent',
    component: () => import('@/views/transparent/index.vue'),
  },
  {
    path: '/hover',
    component: () => import('@/views/hover/index.vue'),
  },
  {
    path: '/progress',
    component: () => import('@/views/progress/index.vue'),
  },
  {
    path: '/animation',
    component: () => import('@/views/animation/index.vue'),
  },
  {
    path: '/box',
    component: () => import('@/views/box/index.vue'),
  },
  {
    path: '/three',
    component: () => import('@/views/three/index.vue'),
  },
  {
    path: '/sm',
    component: () => import('@/views/sm/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory('/'),
  routes,
})

// createRouterGuard(router)

export { router }
