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
  setupAccessGuard(router)
}

export { createRouterGuard }
