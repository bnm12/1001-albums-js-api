import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintJs from '@eslint/js';

export default tseslint.config(
  eslintJs.configs.recommended, // ESLint's built-in recommended rules
  ...tseslint.configs.recommended, // TypeScript ESLint's recommended rules
  {
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    // If further customization of rules is needed, it can be done here:
    // rules: {
    //   'no-unused-vars': 'warn', // Example override
    // },
  }
);
