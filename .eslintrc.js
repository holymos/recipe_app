module.exports = {
  root: true,
  extends: ['@react-native', '@holymos/eslint-config/react'],
  rules: {
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['module', '/^@[a-z].*-/'],
          '/^@[a-z][^\\-]*$/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
