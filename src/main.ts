import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/123',
    },
    {
      path: '/123',
      component: () => import('./pages/routes.vue'),
      redirect: '/123/666',
      children: [
        {
          path: '666',
          component: () => import('./pages/index.vue'),
        },
      ],
    },
  ],
})
app.use(router)
app.mount('#app')
