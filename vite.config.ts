import { defineConfig, splitVendorChunkPlugin as vendor } from 'vite'
import generouted from '@generouted/react-router'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), vendor(), generouted()],
  resolve: { alias: { '@': '/src' } },
})
