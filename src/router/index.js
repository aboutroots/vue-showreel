import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      public: true,
    },
  },
  {
    path: '/users',
    name: 'Users List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "users-list" */ '../views/UsersView.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/users/:id',
    name: 'User Detail',
    component: () => import(/* webpackChunkName: "users-detail" */ '../views/UserDetailView.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/contact',
    name: 'Contact Form',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
    meta: {
      public: true,
    },
  },
  {
    path: '/login',
    name: 'Login Page',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    props(route) {
      return { route };
    },
    meta: {
      public: true,
    },
  },
  {
    path: '/private-page',
    name: 'Private Page',
    component: () => import(/* webpackChunkName: "private-demo" */ '../views/PrivateDemoView.vue'),
    meta: {
      public: false,
    },
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFoundView.vue'),
    meta: {
      public: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  store.dispatch('ui/CLOSE_SIDEBAR');
  if (to.meta.public || store.getters['auth/isAuthenticated']) {
    next();
  } else {
    store
      .dispatch('auth/AUTHENTICATE_USER')
      .catch(() => {})
      .then(() => {
        if (store.getters['auth/isAuthenticated']) {
          next();
        } else {
          console.log(to.path);
          next({
            name: 'Login Page',
            query: { nextRoute: to.fullPath },
          });
        }
      });
  }
});
export default router;
