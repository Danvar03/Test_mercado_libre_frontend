module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
    "@/(.*)$": "<rootDir>/src/$1",
    '\\.(css|scss)$': 'identity-obj-proxy', 
    '\\.(png|jpg|svg)$': '<rootDir>/__mocks__/fileMock.js', 
  },
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest', 
  },
  transformIgnorePatterns: [
    'node_modules/(?!(axios|otra-dependencia-a-transformar)/)', 
  ],
  testPathIgnorePatterns: ["<rootDir>/src/app/*", "<rootDir>/build/*"],
  coveragePathIgnorePatterns: [
    "<rootDir>/build/*",
    "/src/infraestructure/.*/index.js",
    "src/pages/_app.js",
    "src/pages/_document.js",
  ],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
