import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Raju-Travels-Madurai/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
