module.exports = {
  preset: 'react-native',
  rootDir: '../',
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-navigation|@react-navigation)/)',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.js',
    '!./src/**/*-test.js',
    '!./src/assets/',
  ],
  coverageDirectory: '<rootDir>/reports/coverage',
  testMatch: ['<rootDir>/src/components/**/**/__tests__/*-test.js'],
  testPathIgnorePatterns: ['src/components/atoms/Chip/config/index.js'],
  moduleDirectories: ['node_modules'],
  modulePathIgnorePatterns: ['/styles/', '/assets/', '/types/', '/icons/'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
};
