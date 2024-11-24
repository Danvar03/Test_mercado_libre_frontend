import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.MERCADO_LIBRE_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    console.error("Response error:", error.response || error.message);
    return Promise.reject(error);
  },
);

export default axiosInstance;
