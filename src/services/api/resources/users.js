import { sleep } from '../../../utils';
import apiClient from '../http';

const getUsers = async () => {
  // NOTE: the next line is added only to make the "loading" effect visible.
  await sleep(1000);

  const resp = await apiClient.get('users/');
  const result = resp.data;
  const users = result.data;
  return users;
};

const getUser = async (id) => {
  const resp = await apiClient.get(`users/${id}`);
  const result = resp.data;
  const user = result.data;
  return user;
};

export default {
  getUsers,
  getUser,
};
