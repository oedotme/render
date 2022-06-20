import { defineConfig, splitVendorChunkPlugin as vendor } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), vendor()],
  resolve: { alias: { '@': '/src' } },
})
