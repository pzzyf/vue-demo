import type { Router } from 'vue-router'

function setupAccessGuard(router: Router) {
  router.beforeEach(async (to) => {
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
