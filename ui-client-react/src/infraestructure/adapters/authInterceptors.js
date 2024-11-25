import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error.message));
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    return Promise.reject(
      new Error(`Unexpected status code: ${response.status}`)
    );
  },
  (error) => {
    if (error.response) {
      return Promise.reject(
        new Error(
          `Error: ${error.response.status} - ${error.response.data.message || error.message}`
        )
      );
    }

    if (error.request) {
      return Promise.reject(new Error('No response received from server'));
    }

    return Promise.reject(new Error(`Error: ${error.message}`));
  }
);

export default axiosInstance;
