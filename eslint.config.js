import eslint from '@eslint/js'
import a11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import sort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  a11y.flatConfigs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...tseslint.configs.recommendedTypeChecked,
  {
    settings: { react: { version: 'detect' } },
    languageOptions: { parserOptions: { project: true, tsconfigRootDir: import.meta.dirname } },
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    plugins: { 'react-hooks': hooks, 'simple-import-sort': sort },
    rules: {
      ...hooks.configs.recommended.rules,
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        { groups: [['^\\u0000'], ['^node:'], ['^(react|solid|vite)', '^@?\\w'], ['^'], ['^\\.']] },
      ],
    },
  },
  { files: ['!src/**/*.{ts,tsx}'], extends: [tseslint.configs.disableTypeChecked] },
)
