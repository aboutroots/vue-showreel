import apiClient from '../http';

const getToken = async ({ username, password }) => {
  const resp = await apiClient.post('login/', {
    username,
    password,
  });
  const result = resp.data;
  const { token } = result;
  return token;
};

export default {
  getToken,
};
