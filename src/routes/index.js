

import { createRouter, createWebHistory } from 'vue-router';

// Importa os componentes das suas views (páginas)
import HomeView from '../views/HomeView.vue';
// Importação dinâmica (melhor para performance)
const SobreMimView = () => import('../views/SobreMimView.vue');
const ProjetosView = () => import('../views/ProjetosView.vue');
const ContatoView = () => import('../views/ContatoView.vue');

const routes = [
  {
    path: '/',
    name: 'Home', // Nome usado no RouterLink do Header.vue
    component: HomeView,
    meta: { title: 'Ana Clara | Desenvolvedora & UX' }
  },
  {
    path: '/sobre',
    name: 'SobreMim', // Nome usado no RouterLink do Header.vue
    component: SobreMimView,
    meta: { title: 'Ana Clara | About Me' }
  },
  {
    path: '/projetos',
    name: 'Projetos', // Nome usado no RouterLink do Header.vue
    component: ProjetosView,
    meta: { title: 'Ana Clara | Projetos' }
  },
  {
    path: '/contato',
    name: 'Contato', // Nome usado no RouterLink do Header.vue
    component: ContatoView,
    meta: { title: 'Ana Clara | Contact' }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // Para que a página sempre comece no topo ao mudar de rota
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;