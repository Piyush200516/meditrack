import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tailwind ke liye PostCSS inline config
import tailwindcssPostcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcssPostcss(),
        autoprefixer(),
      ],
    },
  },
});
