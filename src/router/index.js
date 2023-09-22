import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Image1 from '@/components/Image1.vue'
import Image2 from '@/components/Image2.vue'
import Image3 from '@/components/Image3.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Bebe',
      name: 'Bebe',
      component: () => import('../views/BebeView.vue')
    },
    {
      path: '/Adultos',
      name: 'Adultos',
      component: () => import('../views/AdultosView.vue')
    },
    {
      path: '/Ninos',
      name: 'Ninos',
      component: () => import('../views/NinosView.vue')
    },
    {
      path: '/image1',
      name: 'Image1',
      component: Image1
    },
  {
    path: '/image2',
    name: 'Image2',
    component: Image2
  },
  {
    path: '/image3',
    name: 'Image3',
    component: Image3
  }
  ]
})

export default router
