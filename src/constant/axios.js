import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4/'
});

export default axiosInstance;