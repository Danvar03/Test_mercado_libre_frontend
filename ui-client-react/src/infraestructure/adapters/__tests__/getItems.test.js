import axiosInstance from '../authInterceptors';
import { getItems } from '../getItems';

jest.mock('../authInterceptors', () => ({
    get: jest.fn(),
  }));
describe('getItems', () => {
    it('should fetch items successfully', async () => {
        const mockData = { items: ['pc1', 'pc2'] };
        axiosInstance.get.mockResolvedValue({ data: mockData });

        const result = await getItems('pc', 1, 4);

        expect(result).toEqual(mockData);
        expect(axiosInstance.get).toHaveBeenCalledWith('items', {
            params: { q: 'pc', page: 1, pageSize: 4 },
        });
    });

    it('should throw an error when fetching items fails', async () => {
        axiosInstance.get.mockRejectedValue(new Error('Network Error'));

        await expect(getItems('testQuery', 1, 4)).rejects.toThrow('Unable to fetch items. Please try again.');
        expect(axiosInstance.get).toHaveBeenCalledWith('items', {
            params: { q: 'testQuery', page: 1, pageSize: 4 },
        });
    });
});