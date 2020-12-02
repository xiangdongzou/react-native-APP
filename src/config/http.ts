import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.1.105:3000';

axios.interceptors.request.use(
  function (config) {
    config.headers = {icode: '0F9EE489C5A831B7'};
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  function (res) {
    return res.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);
