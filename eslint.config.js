// eslint.config.js
// eslint.config.js
import react from 'eslint-plugin-react';
import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      '@typescript-eslint': ts,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...ts.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off', // Disable rule for React 17+ JSX Transform
      'react/prop-types': 'off', // Disable prop-types validation for TypeScript
    },
  },
];
