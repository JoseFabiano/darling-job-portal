import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.235.26.14:8080/',
});

export default api;
