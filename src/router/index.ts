import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
})