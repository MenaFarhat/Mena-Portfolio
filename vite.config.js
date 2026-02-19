import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // مهم جدًا للنشر على Netlify من GitHub
  build: {
    outDir: 'dist', // المجلد الافتراضي للنشر
    emptyOutDir: true, // يمسح مجلد dist قبل كل build
  },
})
