import { defineConfig, splitVendorChunkPlugin as vendor } from 'vite'
import generouted from '@generouted/react-router/plugin'
import tailwind from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tailwind(), react(), vendor(), generouted()],
  resolve: { alias: { '@': '/src' } },
})
