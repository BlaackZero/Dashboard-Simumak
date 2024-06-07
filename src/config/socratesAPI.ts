import axios from 'axios';

const socratesAPi = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

socratesAPi.interceptors.request.use(
  async (config) => {
    const auth = "42bc1e3ba7e7b6c2b4ad410b50b0d88019bd83eb1d5e5d4135d77f8455312284";
    
    if (auth) {
      config.data = {
        ...config.data,
        auth: auth,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { socratesAPi };
