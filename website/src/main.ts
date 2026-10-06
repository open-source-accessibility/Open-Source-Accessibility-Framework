import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Restore the path GitHub Pages' 404.html redirect preserved as a query
// param before Vue Router reads the initial location. The router module is
// imported only after the URL is rewritten because createWebHistory captures
// the current location at creation time; importing it statically up top would
// make deep links resolve to the index route with "?redirect=" still attached.
const redirect = new URLSearchParams(location.search).get('redirect')
if (redirect !== null) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/?$/, '/')
  history.replaceState(null, '', baseUrl + redirect.replace(/^\/+/, ''))
}

const { default: router } = await import('./router')
const app = createApp(App)

app.use(router)

app.mount('#app')
