import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

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
  server: {
    open: 'http://192.168.1.56:5173',
    port: 5173,
    host: '0.0.0.0'
  }
})
