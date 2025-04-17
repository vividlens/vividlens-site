// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/vividlens-site/', // 👈 Add this line with your repo name
  plugins: [react()],
});