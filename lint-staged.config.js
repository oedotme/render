export default {
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json',
  '*.{js,jsx,ts,tsx}': 'eslint --fix --cache --cache-location node_modules/.cache/eslint',
  '*.{css,html,json,md,mdx,js,jsx,ts,tsx}': 'prettier --write --cache',
}
