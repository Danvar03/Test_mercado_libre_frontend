import axiosInstance from './authInterceptors';

export const getItemById = async (id) => {
  try {
    const response = await axiosInstance.get(`/items/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching item by ID:', error.message);
    throw new Error('Unable to fetch the item. Please try again later.');
  }
};
