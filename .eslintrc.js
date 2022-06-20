module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true } },
  settings: { react: { version: 'detect' } },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react/prop-types': 'off',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000'],
          ['^(assert|constants|crypto|events|fs|path|querystring|stream|url)(/.*|$)'],
          ['^(react|solid)', '^@?\\w'],
          ['^(@)(/.*|$)'],
          ['^\\.'],
        ],
      },
    ],
  },
  ignorePatterns: ['*rc.js', '*.config.js', 'prerender.ts'],
}
