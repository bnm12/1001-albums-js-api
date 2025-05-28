module.exports = {
  testEnvironment: 'node',
  clearMocks: true,
  roots: ['<rootDir>/tests'], // Look for tests only in the 'tests' directory
  testMatch: [ // Explicitly match .ts test files
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // Automatically clear mock calls, instances and results before every test
  // collectCoverage: true, // Example: To enable coverage collection
  // coverageDirectory: "coverage", // Example: To specify coverage directory
  // coverageProvider: "v8", // Example: To specify coverage provider
};
