import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '/api'
};

Object.assign(axios.defaults, config);

axios.interceptors.response.use(res => res.data);