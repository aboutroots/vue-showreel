import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/users',
    name: 'Users List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "users-list" */ '../views/UsersView.vue'),
  },
  {
    path: '/users/:id',
    name: 'User Detail',
    component: () => import(/* webpackChunkName: "users-detail" */ '../views/UserDetailView.vue'),
  },
  {
    path: '/contact',
    name: 'Contact Form',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
