/* eslint-disable @typescript-eslint/ban-ts-comment */
import { getDefaultState as getDefaultStateAuth } from '@/store/modules/auth/types';
import { getDefaultState as getDefaultStateUi } from '@/store/modules/ui/types';
import { getDefaultState as getDefaultStateUsers } from '@/store/modules/users/types';
import { createLocalVue, shallowMount as originalShallowMount, VueClass } from '@vue/test-utils';

import AllIosIcon from 'vue-ionicons/dist/ionicons-ios';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

type Dict = { [key: string]: unknown };
interface Options {
  modules?: Dict;
  getters?: Dict;
  props?: Dict;
}

export const shallowMount = (
  component: VueClass<Vue>,
  options: Options = {
    modules: {},
    getters: {},
    props: {},
  }
) => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  localVue.use(VueRouter);
  localVue.use(AllIosIcon);

  const propsData = {
    ...(options.props ?? {}),
  };
  const getters = {
    ...(options.getters ?? {}),
  };
  const modules = {
    auth: {
      namespaced: true,
      state: getDefaultStateAuth(),
      getters: {
        isAuthenticated: () => false,
        isInitialAuthFinished: () => false,
        currentUser: () => null,
      },
      actions: {
        LOGIN_USER: jest.fn(),
        LOGOUT_USERS: jest.fn(),
        AUTHENTICATE_USER: jest.fn(),
      },
    },
    ui: {
      namespaced: true,
      state: getDefaultStateUi(),
      actions: {
        TOGGLE_SIDEBAR: jest.fn(),
      },
      getters: {
        sidebarOpen: () => true,
      },
    },
    users: {
      namespaced: true,
      state: getDefaultStateUsers(),
      actions: {
        FETCH_USERS: jest.fn(),
      },
      getters: {
        usersList: () => [],
      },
    },
    ...(options.modules ?? {}),
  };

  // @ts-ignore
  const store = new Vuex.Store({ modules, getters });

  const router = new VueRouter();
  // @ts-ignore
  return originalShallowMount(component, {
    localVue,
    store,
    router,
    propsData,
    mocks: {
      $toast: {
        open: jest.fn(),
        error: jest.fn(),
      },
    },
    ...options,
  });
};
