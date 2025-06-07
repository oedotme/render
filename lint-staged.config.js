export default {
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json',
  '*.{js,jsx,ts,tsx}': 'biome check --write',
  '*.{css,html,json,md,mdx}': 'biome format --write',
}
