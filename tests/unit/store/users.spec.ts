/* eslint-disable @typescript-eslint/ban-ts-comment */
import { MutationType } from '@/store/modules/users/types';
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { storeConfig } from '@/store';
import api from '@/services/api';
import { defaultUser } from '../fixtures';

jest.mock('@/services/api');

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Users store tests suite', () => {
  const store = new Vuex.Store(storeConfig);
  const demoUsers = [{ ...defaultUser }, { ...defaultUser, id: 2 }];

  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    // @ts-ignore
    api.users.getUsers.mockResolvedValue(demoUsers);

    // reset store to default state
    store.commit(`users/${MutationType.RESET}`);
  });

  test('test has module', () => {
    expect(store.hasModule('users')).toBe(true);
  });

  describe('getters and mutations test suite', () => {
    test('test usersList', () => {
      expect(store.getters['users/usersList']).toMatchObject([]);

      store.commit(`users/${MutationType.SET_USERS}`, demoUsers);

      expect(store.getters['users/usersList']).toMatchObject(demoUsers);
    });
  });

  describe('actions test suite', () => {
    test('test FETCH_USERS', async () => {
      expect(store.getters['users/usersList']).toMatchObject([]);

      await store.dispatch(`users/FETCH_USERS`, demoUsers);

      expect(store.getters['users/usersList']).toMatchObject(demoUsers);
    });
  });
});
