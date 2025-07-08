import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:'/pokedex/',
  build: {
    outDir: 'build', // This should specify the output directory
  },
})
