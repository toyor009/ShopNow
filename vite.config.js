import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
  optimizeDeps: {
    include: ['@react-three/drei', '@react-three/fiber', 'three'],
    timeout: 50000,
  // },
  // build: {
  //   minify: false,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: undefined
  //     }
  //   }
  // },
  // logLevel: 'info',
  // customLogger: {
  //   info: (msg) => console.log(`VITE INFO: ${msg}`),
  //   warn: (msg) => console.warn(`VITE WARN: ${msg}`),
  //   error: (msg) => console.error(`VITE ERROR: ${msg}`)
  }
})