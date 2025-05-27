module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  transform: {
    '^.+\\.tsx?$': '<rootDir>/node_modules/ts-jest', // Explicit path to ts-jest
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  // Automatically clear mock calls, instances and results before every test
  // collectCoverage: true, // Example: To enable coverage collection
  // coverageDirectory: "coverage", // Example: To specify coverage directory
  // coverageProvider: "v8", // Example: To specify coverage provider
};
