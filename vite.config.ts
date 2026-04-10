import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@theme/v2/tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/myuma06/', // ← この行を必ず追加してください！最後はカンマです。
})