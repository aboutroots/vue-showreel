import apiClient from '@/services/api/http';
import api from '@/services/api';
import TokenManager from '@/services/api/token';
import types from './types';

export default {
  LOGOUT_USER({ commit }) {
    // clear all things related to auth
    delete apiClient.defaults.headers.Authorization;
    TokenManager.delete();
    commit(types.SET_CURRENT_USER, null);
  },

  async LOGIN_USER({ dispatch }, loginPayload, isSocial) {
    // logout to clear all previous user info
    dispatch('LOGOUT_USER');
    // get new token and authenticate
    await dispatch('GET_USER_AUTH_TOKEN', loginPayload, isSocial);
    await dispatch('AUTHENTICATE_USER');
  },

  async GET_USER_AUTH_TOKEN(_, payload) {
    // obtain token for user and save it in localStorage
    const tokenStr = await api.auth.getToken(payload);
    TokenManager.set(tokenStr);
  },

  async AUTHENTICATE_USER({ dispatch }) {
    // use existing token to fetch current user data
    const tokenStr = TokenManager.get();
    if (!tokenStr) return Promise.reject(new Error('No token!'));
    // set token value as default value for authorization header
    apiClient.defaults.headers.Authorization = `Token ${tokenStr}`;
    // fetch logged user info
    await dispatch('FETCH_CURRENT_USER');
    return null;
  },

  async FETCH_CURRENT_USER({ commit }) {
    const userData = await api.users.getCurrentUser();
    commit(types.SET_CURRENT_USER, userData);
  },

  INITIAL_AUTH_FINISHED({ commit }) {
    commit(types.SET_INITIAL_AUTH_FINISHED);
  },
};
