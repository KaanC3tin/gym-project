import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // bind to localhost for local development
    host: 'localhost',
    // use Vite default dev port for convenience; avoids requiring admin privileges
    port: 5173,
    // open the browser when the server starts
    open: true,
    // allow Vite to pick a different port if 5173 is busy
    strictPort: false,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }
})