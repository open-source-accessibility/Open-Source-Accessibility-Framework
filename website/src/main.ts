import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Restore the path GitHub Pages' 404.html redirect preserved as a query
// param, since GitHub Pages has no server-side support for SPA routing.
const redirect = new URLSearchParams(location.search).get('redirect')
if (redirect !== null) {
  const target = router.resolve(`/${redirect}${location.hash}`)
  history.replaceState(null, '', router.options.history.base + target.fullPath)
}

const app = createApp(App)

app.use(router)

app.mount('#app')
