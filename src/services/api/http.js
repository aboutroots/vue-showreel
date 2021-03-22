import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {},
  maxRedirects: 0,
});

export default apiClient;
