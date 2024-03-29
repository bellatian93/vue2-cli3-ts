import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/dashboard',
    name: 'Aashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
    meta: {hidden: true}
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
