module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    '^@backend/(.*)$': '<rootDir>/backend/src/$1',
    '^@app/(.*)$': '<rootDir>/src/$1',
  },
};
