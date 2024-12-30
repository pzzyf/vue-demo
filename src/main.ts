import { createApp } from 'vue'
import App from './App.vue'
import Test from './views/test.vue'
import { initStores } from './store'
import { router } from '@/router'

import '@unocss/reset/normalize.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)

app.component('Test', Test)

app.directive('color', {
  mounted(el, binding) {
    const color = binding.value || 'yellow'
    el.style.color = color
  },
})

app.provide('hello', 'world')

initStores(app)

app.use(router)
app.mount('#app')
