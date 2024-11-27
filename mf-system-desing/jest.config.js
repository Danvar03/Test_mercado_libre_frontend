const nextJest = require("next/jest");
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});
module.exports = createJestConfig({
  collectCoverageFrom: ["src/**/*.{js,jsx}"],
  collectCoverage: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testResultsProcessor: "jest-sonar-reporter",
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
    "@/(.*)$": "<rootDir>/src/$1",
    "^@/components/shared/alerts$": "<rootDir>/path/to/mock/alerts.js",
  },
  testPathIgnorePatterns: ["<rootDir>/src/app/*", "<rootDir>/build/*"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/app/*",
    "<rootDir>/build/*",
    "/src/infraestructure/.*/index.js",
    "src/pages/_app.js",
    "src/pages/_document.js",
  ],
});
