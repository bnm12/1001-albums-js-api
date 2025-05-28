const tseslint = require('typescript-eslint');
const globals = require('globals');
const eslintJs = require('@eslint/js');

module.exports = tseslint.config(
  {
    ignores: ["dist/**", "*.cjs"], // Also ignore CJS config files from global TS rules
  },
  eslintJs.configs.recommended, // ESLint's built-in recommended rules for all JS files (including CJS after ignore)
  {
    // Configuration for TypeScript files
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    extends: [...tseslint.configs.recommended], // Apply TypeScript rules
    languageOptions: {
      globals: {
        ...globals.node, // Node globals are useful for TS files too, e.g. __dirname
        ...globals.jest, // For test files
      },
      parser: tseslint.parser, // Specify the TypeScript parser
      parserOptions: {
        project: './tsconfig.json', // Link to your tsconfig.json
      },
    },
    rules: {
      // Add any specific TS rule overrides here
      // e.g. '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    // Configuration for CJS files (e.g., ESLint, Prettier, Jest configs)
    files: ['*.cjs'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node, // `module`, `require`, `__dirname`, `__filename`, etc.
      },
    },
    rules: {
      // Disable TypeScript specific rules that are mistakenly applied
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off', // if you use var for require
      // Add other rules if needed, e.g., for CJS best practices
    },
  }
);
