import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
      
// https://vitejs.dev/config/
export default defineConfig(({}) => {
  return {
    base: '/Intermediate-React-Practice/',
    plugins: [react()],
    server: {
      port: 8080,
      hot: true
    },
  }
})
