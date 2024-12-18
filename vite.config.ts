import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make the dev server accessible on all network interfaces
    port: 3001,        // Default port for Vite (can be changed if needed)
    strictPort: true,  // Ensure the specified port is used

  },
});
