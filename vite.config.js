import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: { alias: { '@': '/src' } },
  esbuild: { jsxInject: `import React from 'react'` },
})
