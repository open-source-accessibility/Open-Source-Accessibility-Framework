import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Restore the path GitHub Pages' 404.html redirect preserved as a query
// param before Vue Router reads the initial location.
const redirect = new URLSearchParams(location.search).get('redirect')
if (redirect !== null) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  history.replaceState(null, '', baseUrl + redirect.replace(/^\/+/, ''))
}

const { default: router } = await import('./router')
const app = createApp(App)

app.use(router)

app.mount('#app')
