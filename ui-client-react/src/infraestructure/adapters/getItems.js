import axiosInstance from './authInterceptors';

export const getItems = async (query, page = 1, pageSize = 4) => {
  try {
    const response = await axiosInstance.get(`items`, {
      params: { q: query, page, pageSize },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching items:', error.message);
    throw new Error('Unable to fetch items. Please try again.');
  }
};
