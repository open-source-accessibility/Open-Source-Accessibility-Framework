import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/foundational',
      name: 'foundational',
      // route level code-splitting
      // this generates a separate chunk (Foundational.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Foundational.vue'),
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: () => import('../views/Workflow.vue'),
    },
    {
      path: '/testing',
      name: 'testing',
      component: () => import('../views/Testing.vue'),
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/Community.vue'),
    },
  ],
})

export default router
