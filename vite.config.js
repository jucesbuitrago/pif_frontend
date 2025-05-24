import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    allowedHosts: [
      'tamales-claudia.onrender.com',
      'localhost'  // Mantener localhost para desarrollo local
    ]
  }
});
