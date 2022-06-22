import { ActionContext } from 'vuex';
import { RootStore } from '@/models';
import api from '../../../services/api';

import { MutationType, State } from './types';

type Context = ActionContext<State, RootStore>;

export default {
  async FETCH_USERS({ commit }: Context) {
    try {
      const users = await api.users.getUsers();
      commit(MutationType.SET_USERS, users);
      return true;
    } catch {
      return false;
    }
  },
};
