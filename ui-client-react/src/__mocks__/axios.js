const mockAxios = jest.createMockFromModule('axios');

mockAxios.create = jest.fn(() => ({
  defaults: {
    baseURL: '',
    headers: {
      'Content-Type': '',
    },
  },
  interceptors: {
    request: {
      handlers: [],
      use: jest.fn((fulfilled, rejected) => {
        mockAxios.interceptors.request.handlers.push({ fulfilled, rejected });
      }),
    },
    response: {
      handlers: [],
      use: jest.fn((fulfilled, rejected) => {
        mockAxios.interceptors.response.handlers.push({ fulfilled, rejected });
      }),
    },
  },
}));

module.exports = mockAxios;
