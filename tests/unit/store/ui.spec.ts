/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MutationType } from '@/store/modules/ui/types';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { storeConfig } from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Ui store tests suite', () => {
  const store = new Vuex.Store(storeConfig);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    // reset store to default state
    store.commit(`ui/${MutationType.RESET}`);
  });

  test('test has module', () => {
    expect(store.hasModule('ui')).toBe(true);
  });

  describe('getters and mutations test suite', () => {
    test('test sidebarOpen', () => {
      expect(store.getters['ui/sidebarOpen']).toBe(true);

      store.commit(`ui/${MutationType.SET_SIDEBAR_OPEN}`, false);

      expect(store.getters['ui/sidebarOpen']).toBe(false);
    });
  });

  describe('actions test suite', () => {
    test('test TOGGLE_SIDEBAR', () => {
      expect(store.getters['ui/sidebarOpen']).toBe(true);

      store.dispatch(`ui/TOGGLE_SIDEBAR`);
      expect(store.getters['ui/sidebarOpen']).toBe(false);

      store.dispatch(`ui/TOGGLE_SIDEBAR`);
      expect(store.getters['ui/sidebarOpen']).toBe(true);
    });

    test('test CLOSE_SIDEBAR', () => {
      expect(store.getters['ui/sidebarOpen']).toBe(true);

      store.dispatch(`ui/CLOSE_SIDEBAR`);
      expect(store.getters['ui/sidebarOpen']).toBe(false);

      store.dispatch(`ui/CLOSE_SIDEBAR`);
      expect(store.getters['ui/sidebarOpen']).toBe(false);
    });
  });
});
