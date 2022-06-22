import apiClient from '../http';

const getToken = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<string> => {
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
