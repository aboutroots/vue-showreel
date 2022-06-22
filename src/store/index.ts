import Vue from 'vue';
import Vuex from 'vuex';

import authModule from './modules/auth';
import uiModule from './modules/ui';
import usersModule from './modules/users';

Vue.use(Vuex);

export const storeConfig = {
  modules: {
    auth: authModule,
    ui: uiModule,
    users: usersModule,
  },
};

export default new Vuex.Store(storeConfig);
