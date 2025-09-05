/**
 * THIS FILE WAS AUTO-GENERATED.
 * PLEASE DO NOT EDIT IT MANUALLY.
 * ===============================
 * IF YOU'RE COPYING THIS INTO AN ESLINT CONFIG, REMOVE THIS COMMENT BLOCK.
 */

import path from 'node:path';

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import { configs } from 'eslint-config-airbnb-extended/legacy';
import { rules as prettierConfigRules } from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const gitignorePath = path.resolve('.', '.gitignore');

const compat = new FlatCompat({
  baseDirectory: path.resolve('.'),
});

const jsConfig = [
  // ESLint Recommended Rules
  {
    name: 'js/config',
    ...js.configs.recommended,
  },
];

const reactConfig = [
  // Airbnb React Recommended Config
  ...configs.react.recommended,
];

const typescriptConfig = [
  // Airbnb React TypeScript Config
  ...configs.react.typescript,
];

const prettierConfig = [
  // Prettier Plugin
  {
    name: 'prettier/plugin/config',
    plugins: {
      prettier: prettierPlugin,
    },
  },
  // Prettier Config
  {
    name: 'prettier/config',
    rules: {
      ...prettierConfigRules,
      'prettier/prettier': 'error',
    },
  },
];

const nextEslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    name: 'next/typescript',
    rules: {
      'class-methods-use-this': 'off',
      'no-plusplus': 'off',
      'no-await-in-loop': 'off',
      'import/prefer-default-export': 'off',
      'import/no-anonymous-default-export': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/prefer-namespace-keyword': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      'react/function-component-definition': [
        2,
        { namedComponents: 'arrow-function' },
      ],
    },
  },
];

const ignoreEslintConfig = [
  {
    name: 'next/ignore',
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'eslint.config.mjs',
    ],
  },
];

export default [
  // Ignore .gitignore files/folder in eslint
  includeIgnoreFile(gitignorePath),
  // Ignore files
  ...ignoreEslintConfig,
  // Javascript Config
  ...jsConfig,
  // React Config
  ...reactConfig,
  // TypeScript Config
  ...typescriptConfig,
  // Prettier Config
  ...prettierConfig,
  ...nextEslintConfig,
];
