import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios';

import App from './App.vue';
import router from './router';
import store from './store';

// import global styles from external file.
import './assets/styles/styles.scss';

// register library for notifications

Vue.use(VueToast, { position: 'top-right' });

Vue.use(AllIosIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
