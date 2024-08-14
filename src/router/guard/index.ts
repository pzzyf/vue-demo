import type { Router } from 'vue-router'

function setupAccessGuard(router: Router) {
  console.log('初始化')
  router.beforeEach(async (to) => {
    console.log('路由守卫')
    const accessToken = localStorage.getItem('token')
    if (!accessToken && to.path !== '/login') {
      return { path: '/login' }
    }
  })
}

function createRouterGuard(router: Router) {
  console.log('import引入，顶层模块会执行')
  setupAccessGuard(router)
}

export { createRouterGuard }
