import { State } from './types';

const usersList = (state: State) => Object.values(state.users);

export default {
  usersList,
};
