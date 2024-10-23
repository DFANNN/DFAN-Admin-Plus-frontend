import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      //自动import vue和vue-router
      imports: ['vue', 'vue-router'],
      // 声明文件生成位置和文件名称
      dts: './auto-imports.d.ts',
      // 这是为 Element Plus 组件库配置的解析器，自动按需导入 Element Plus 相关的 API
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    // 路径别名
    // import.meta.url 获取当前文件的路径，
    // new URL(要解析的路径，当前文件路径) 为创建一个新的URL对象
    // fileURLToPath(URL对象) 将URL对象转换为文件路径
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    open: 'http://192.168.1.56:5173',
    port: 5173,
    host: '0.0.0.0'
  }
})
