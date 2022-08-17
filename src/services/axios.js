import axios from 'axios';

const BASE_URL = `https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/`;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
});

instance.interceptors.request.use(
  (config) => {
    const user = localStorage.getItem('token');
    if (user) {
      config.headers.Authorization = 'Bearer ' + user;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
