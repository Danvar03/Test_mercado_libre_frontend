export default {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Archivo para configuración adicional
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Solo usa ts-jest como transformador
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock para estilos
    '^@components/(.*)$': '<rootDir>/src/presentation/components/$1',
    '\\.(svg)$': '<rootDir>/svgMock.ts', // Mock para SVGs
  },
  testEnvironment: 'jsdom', // Ambiente para pruebas de React
  coveragePathIgnorePatterns: [
    '<rootDir>/src/setupTests.ts',
    '<rootDir>/src/index.tsx',
    '<rootDir>/src/application/routes/index.tsx',
    '<rootDir>/src/domain/model/',
    '<rootDir>/src/domain/interface/',
  ],
};
