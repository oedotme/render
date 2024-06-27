/* eslint-disable */

import eslint from '@eslint/js'
import a11y from 'eslint-plugin-jsx-a11y'
import jsx from 'eslint-plugin-react/configs/jsx-runtime.js'
import react from 'eslint-plugin-react/configs/recommended.js'
import hooks from 'eslint-plugin-react-hooks'
import sort from 'eslint-plugin-simple-import-sort'
import tslint from 'typescript-eslint'

export default tslint.config(
  eslint.configs.recommended,
  a11y.flatConfigs.recommended,
  react,
  jsx,
  ...tslint.configs.recommendedTypeChecked,
  {
    settings: { react: { version: 'detect' } },
    languageOptions: { parserOptions: { project: true, tsconfigRootDir: import.meta.dirname } },
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
)
