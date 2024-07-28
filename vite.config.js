import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3106,
    proxy: {
      "/chrome": {
        target: "https://www.google.com",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/chrome/, ''),
      },
    },
  },
});
