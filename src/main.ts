import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import AllIosIcon from 'vue-ionicons/dist/ionicons-ios';
import VueHead from 'vue-head';

import App from './App.vue';
import router from './router';
import store from './store';

// import global styles from external file.
import './assets/styles/styles.scss';

// register libraries:
Vue.use(VueToast, { position: 'top-right' });
Vue.use(VueHead, {
  separator: '|',
  complement: 'Vue Showreel',
});
Vue.use(AllIosIcon);

// initialize Vue
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
