const path = require('path');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  globals: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: [path.resolve(__dirname)],
        alias: {
          common: path.resolve(__dirname, './containers/lib/common/src'),
          extra: path.resolve(__dirname, './containers/lib/extra/src'),
        },
        loglevel: 'verbose',
      },
    },
  },
};
