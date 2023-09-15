import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bebe',
      name: 'Bebe',
      component: () => import('../views/Bebe.vue')
    },
    {
      path: '/Adultos',
      name: 'Adultos',
      component: () => import('../views/Adultos.vue')
    },
    {
      path: '/Ninos',
      name: 'Ninos',
      component: () => import('../views/Ninos.vue')
    }
  ]
})

export default router