import Vue from 'vue';
import Vuex from 'vuex';

import authModule from './modules/auth';
import uiModule from './modules/ui';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    ui: uiModule,
    users: usersModule,
  },
});
