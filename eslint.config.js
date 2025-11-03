import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },
  {
    files: ['**/*.test.js', '**/tests/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
      },
    },
  },
  {
    files: ['**/*.cjs', '**/*.config.cjs', 'jest.config.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
      },
    },
  },
  {
    ignores: ['node_modules/**', 'coverage/**', '**/coverage/**'],
  },
];
