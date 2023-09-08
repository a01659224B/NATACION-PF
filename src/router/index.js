import { createRouter, createWebHistory } from 'vue-router'
import Adultos from '../views/Adultos.vue'
import Bebe from '../views/Bebe.vue'
import Ninos from '../views/Ninos.vue'
// import { RouterLink, RouterView} from 'vue-router'
// import ImagenPrincipal from '../components/icons/ImagenPrincipal.vue'

const routes = [
  {
    path: '/',
    name: 'Adultos',
    component: Adultos
  },
  {
    path: '/',
    name: 'Bebe',
    component: Bebe
  },
  {
    path: '/',
    name: 'Ninos',
    component: Ninos
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
