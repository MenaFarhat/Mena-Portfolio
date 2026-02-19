import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Mena-Portfolio/', // مهم جدًا للنشر على GitHub Pages
  build: {
    outDir: 'dist',       // المجلد الافتراضي للنشر
    emptyOutDir: true,    // يمسح مجلد dist قبل كل build
  },
})