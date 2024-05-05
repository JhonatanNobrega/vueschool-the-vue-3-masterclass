import { createRouter, createWebHistory } from 'vue-router';
import { ThreadExistsGuard } from '@/router/guards/ThreadExistsGuard';

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/PageHome.vue')
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: () => import('@/views/PageThreadShow.vue'),
      props: true,
      beforeEnter: ThreadExistsGuard,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/PageNotFound.vue')
    }
  ]
});
