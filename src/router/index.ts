import { createRouter, createWebHistory } from 'vue-router';
import Home from '~/pages/index.vue';
import About from '~/pages/hi/index.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
