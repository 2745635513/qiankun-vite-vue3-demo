import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
const resolve = (dir) => path.resolve(__dirname, dir)
console.log(__dirname)
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
  base: 'http://localhost:3089/',
  server: {
    port: 3089,
    cors: true,
    origin: 'http://localhost:3089'
  },
  plugins: [
    vue(),
    qiankun('flow-graph', {
      useDevMode: true//因为开发环境作为子应用时与热更新插件（可能与其他修改html的插件也会存在冲突）有冲突，所以需要额外的调试配置
    })
  ],
  resolve: {
    alias: {
      comps: resolve('src/components')
    }
  }
})
