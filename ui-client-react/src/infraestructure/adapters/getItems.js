import axiosInstance from "./authInterceptors";

export const getItems = (query, page = 1, pageSize = 4) => {
    return axiosInstance
      .get(`items`, {
        params: { q: query, page, pageSize },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error('Error fetching items:', error.message);
        throw new Error('Unable to fetch items. Please try again.');
      });
  };
  