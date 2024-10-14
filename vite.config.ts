import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server:{
    open:'http://192.168.1.56:5173',
    port:5173,
    host:'0.0.0.0'
  }
})