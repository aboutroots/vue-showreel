/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MutationType } from '@/store/modules/auth/types';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { storeConfig } from '@/store';
import api from '@/services/api';
import { defaultUser } from '../fixtures';

jest.mock('@/services/api');

const localVue = createLocalVue();
localVue.use(Vuex);
describe('Auth store tests suite', () => {
  const store = new Vuex.Store(storeConfig);

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    // @ts-ignore
    api.users.getCurrentUser.mockResolvedValue(defaultUser);
    // @ts-ignore
    api.auth.getToken.mockResolvedValue('testtoken');

    // reset store to default state
    store.commit(`auth/${MutationType.RESET}`);
  });

  test('test has module', () => {
    expect(store.hasModule('auth')).toBe(true);
  });

  describe('getters and mutations test suite', () => {
    test('test isInitialAuthFinished', () => {
      expect(store.getters['auth/isInitialAuthFinished']).toBe(false);

      store.commit(`auth/${MutationType.SET_INITIAL_AUTH_FINISHED}`);

      expect(store.getters['auth/isInitialAuthFinished']).toBe(true);
    });

    test('test isAuthenticated and currentUser', () => {
      expect(store.getters['auth/isAuthenticated']).toBe(false);

      store.commit(`auth/${MutationType.SET_CURRENT_USER}`, defaultUser);

      expect(store.getters['auth/isAuthenticated']).toBe(true);
      expect(store.getters['auth/currentUser']).toMatchObject(defaultUser);
    });
  });

  describe('actions test suite', () => {
    test('test LOGIN_USER and LOGOUT_USER', async () => {
      expect(store.getters['auth/currentUser']).toBe(null);

      await store.dispatch(`auth/LOGIN_USER`, {
        username: 'test',
        password: 'pass',
      });

      expect(store.getters['auth/currentUser']).toMatchObject(defaultUser);

      store.dispatch(`auth/LOGOUT_USER`);

      expect(store.getters['auth/currentUser']).toBe(null);
    });

    test('test INITIAL_AUTH_FINISHED', () => {
      expect(store.getters['auth/isInitialAuthFinished']).toBe(false);

      store.dispatch(`auth/INITIAL_AUTH_FINISHED`);

      expect(store.getters['auth/isInitialAuthFinished']).toBe(true);
    });
  });
});
