import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [react()],
  build: {
    // Specify the output directory for the built files
    outDir: 'dist',
    // Copy the locales folder from the public directory to the build output directory
    assets: {
      // Ensure that the locales folder gets copied to the output directory
      include: ['locales/**'],
    },
  },
})
