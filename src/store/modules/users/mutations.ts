import { UserDTO } from '@/models';
import { State, MutationType, getDefaultState } from './types';

const setUsers = (state: State, value: UserDTO[]) => {
  const newUsers: { [key: string]: UserDTO } = {};
  value.forEach((user: UserDTO) => {
    newUsers[user.id] = user;
  });
  state.users = newUsers;
};

const resetState = (state: State) => {
  Object.assign(state, getDefaultState());
};

export default {
  [MutationType.RESET]: resetState,
  [MutationType.SET_USERS]: setUsers,
};
