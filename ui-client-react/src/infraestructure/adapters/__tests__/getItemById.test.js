import axiosInstance from '../authInterceptors';
import { getItemById } from '../getItemById';

jest.mock('../authInterceptors', () => ({
  get: jest.fn(),
}));
jest.mock('axios');

describe('getItemById', () => {
  it('should return data when the request is successful', async () => {
    const mockData = { id: 'MLA1455892105', name: 'PC Lenovo' };
    axiosInstance.get.mockResolvedValue({ data: mockData });

    const result = await getItemById('MLA1455892105');
    expect(result).toEqual(mockData);
    expect(axiosInstance.get).toHaveBeenCalledWith('/items/MLA1455892105');
  });

  it('should throw an error when the request fails', async () => {
    const mockError = new Error('Network Error');
    axiosInstance.get.mockRejectedValue(mockError);

    await expect(getItemById('123')).rejects.toThrow(
      'Unable to fetch the item. Please try again later.'
    );
    expect(axiosInstance.get).toHaveBeenCalledWith('/items/MLA1455892105');
  });
});
