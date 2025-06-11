import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/mixer',
      name: 'Mixer',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/MixerView.vue'),
    },
    {
      path: '/tracks',
      name: 'Tracks',
      component: () => import('@/views/TracksView.vue'),
    },
  ],
})

export default router
