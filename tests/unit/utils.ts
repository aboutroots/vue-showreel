/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defaultState as defaultStateAuth } from '@/store/modules/auth';
import { defaultState as defaultStateUi } from '@/store/modules/ui';
import { defaultState as defaultStateUsers } from '@/store/modules/users';
import { createLocalVue, shallowMount as originalShallowMount, VueClass } from '@vue/test-utils';

import AllIosIcon from 'vue-ionicons/dist/ionicons-ios';
import Vuex from 'vuex';

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
      state: defaultStateAuth,
      getters: {
        isAuthenticated: () => false,
        isInitialAuthFinished: () => false,
      },
      actions: {
        LOGIN_USER: jest.fn(),
        LOGOUT_USERS: jest.fn(),
        AUTHENTICATE_USER: jest.fn(),
      },
    },
    ui: {
      namespaced: true,
      state: defaultStateUi,
      actions: {
        TOGGLE_SIDEBAR: jest.fn(),
      },
    },
    users: {
      namespaced: true,
      state: defaultStateUsers,
      actions: {
        FETCH_USERS: jest.fn(),
      },
    },
    ...(options.modules ?? {}),
  };

  // @ts-ignore
  const store = new Vuex.Store({ modules, getters });
  // @ts-ignore
  return originalShallowMount(component, {
    localVue,
    store,
    propsData,
    mocks: {
      $toast: {
        open: jest.fn(),
        error: jest.fn(),
      },
      $route: {
        query: {},
        params: {},
        meta: {},
        matched: [],
      },
      $router: {
        replace: () => ({}),
        resolve: () => ({}),
        push: () => ({}),
      },
    },
    ...options,
  });
};
