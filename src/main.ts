import { createApp } from 'vue'
import App from './App.vue'
import { initStores } from './store'
import { router } from '@/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import './a'

const app = createApp(App)

initStores(app)

app.use(router)
app.mount('#app')
