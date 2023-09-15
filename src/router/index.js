import { createRouter, createWebHistory } from 'vue-router'
import Adultos from '../views/Adultos.vue'
import Bebe from '../views/Bebe.vue'
import Ninos from '../views/Ninos.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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