import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: '/api'
};

Object.assign(axios.defaults, config);
