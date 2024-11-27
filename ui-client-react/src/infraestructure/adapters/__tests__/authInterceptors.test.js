import axiosInstance from '../authInterceptors';

jest.mock('axios');
describe('axiosInstance', () => {
  beforeEach(() => {
    axiosInstance.defaults.baseURL = 'http://localhost:4000';
    axiosInstance.defaults.headers['Content-Type'] = 'application/json';
  });

  it('should have the correct baseURL and headers', () => {
    expect(axiosInstance.defaults.baseURL).toBe('http://localhost:4000');
    expect(axiosInstance.defaults.headers['Content-Type']).toBe(
      'application/json'
    );
  });

  it('should handle request success', async () => {
    const config = { headers: { Authorization: 'Bearer token' } };
    const requestInterceptor = jest.fn((conf) => conf);
    axiosInstance.interceptors.request.use(requestInterceptor);
    const result = await requestInterceptor(config);
    expect(result).toEqual(config);
  });
});
