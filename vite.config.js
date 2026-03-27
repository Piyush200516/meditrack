import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind ke liye PostCSS inline config
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.mjs',
  },
});
