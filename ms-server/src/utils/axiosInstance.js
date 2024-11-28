import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://api.mercadolibre.com",
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Response error:", error.response || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
