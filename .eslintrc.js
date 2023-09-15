module.exports = {
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
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      { groups: [['^\\u0000'], ['^node:'], ['^(react|vite)', '^@?\\w'], ['^'], ['^\\.']] },
    ],
  },
  overrides: [
    {
      extends: ['plugin:@typescript-eslint/recommended-type-checked'],
      parserOptions: { ecmaFeatures: { jsx: true }, project: true },
      files: ['./src/**/*.{ts,tsx}'],
    },
  ],
  ignorePatterns: ['*rc.js', '*.config.js'],
}
