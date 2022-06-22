import { UserDTO } from '@/models';
import apiClient from '../http';

const getUsers = async (): Promise<UserDTO[]> => {
  const resp = await apiClient.get('users?delay=2');
  const result = resp.data;
  const users = result.data;
  return users;
};

const getUser = async (id: string | number): Promise<UserDTO> => {
  const resp = await apiClient.get(`users/${id}`);
  const result = resp.data;
  const user = result.data;
  return user;
};

const getCurrentUser = async (): Promise<UserDTO> => {
  /**
   * Normally, you would use special endpoint like `/users/me` for accessing
   * currently logged user (data would be determined by the backend based on
   * the authentication token in the request header)
   *
   * Right now we are assuming that current user has ID = 1
   */
  const resp = await apiClient.get(`users/1`);
  const result = resp.data;
  const user = result.data;
  return user;
};

export default {
  getUsers,
  getUser,
  getCurrentUser,
};
