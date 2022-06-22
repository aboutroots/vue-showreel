import { UserDTO } from '@/models';
import { State, MutationType } from './types';

const setUsers = (state: State, value: UserDTO[]) => {
  state.users = value;
};

export default {
  [MutationType.SET_USERS]: setUsers,
};
