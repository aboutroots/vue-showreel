import apiClient from '@/services/api/http';
import api from '@/services/api';
import TokenManager from '@/services/api/token';
import { ActionContext } from 'vuex';
import { RootStore } from '@/models';
import { MutationType, State } from './types';

type Context = ActionContext<State, RootStore>;
type LoginPayload = {
  username: string;
  password: string;
};

export default {
  LOGOUT_USER({ commit }: Context) {
    // clear all things related to auth
    delete apiClient.defaults.headers.Authorization;
    TokenManager.delete();
    commit(MutationType.SET_CURRENT_USER, null);
  },

  async LOGIN_USER({ dispatch }: Context, loginPayload: LoginPayload) {
    // logout to clear all previous user info
    dispatch('LOGOUT_USER');
    // get new token and authenticate
    await dispatch('GET_USER_AUTH_TOKEN', loginPayload);
    await dispatch('AUTHENTICATE_USER');
  },

  async GET_USER_AUTH_TOKEN(_: Context, payload: LoginPayload) {
    // obtain token for user and save it in localStorage
    const tokenStr = await api.auth.getToken(payload);
    TokenManager.set(tokenStr);
  },

  async AUTHENTICATE_USER({ dispatch }: Context) {
    // use existing token to fetch current user data
    const tokenStr = TokenManager.get();
    if (!tokenStr) return Promise.reject(new Error('No token!'));
    // set token value as default value for authorization header
    apiClient.defaults.headers.Authorization = `Token ${tokenStr}`;
    // fetch logged user info
    await dispatch('FETCH_CURRENT_USER');
    return null;
  },

  async FETCH_CURRENT_USER({ commit }: Context) {
    const userData = await api.users.getCurrentUser();
    commit(MutationType.SET_CURRENT_USER, userData);
  },

  INITIAL_AUTH_FINISHED({ commit }: Context) {
    commit(MutationType.SET_INITIAL_AUTH_FINISHED);
  },
};
