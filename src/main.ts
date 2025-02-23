import messages from '@intlify/unplugin-vue-i18n/messages'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { router } from '~/router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const i18n = createI18n({
  locale: 'en',
  messages,
})
const pinia = createPinia()

const app = createApp(App)
app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
