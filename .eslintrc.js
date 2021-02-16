module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'quote-props': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
  },
};
