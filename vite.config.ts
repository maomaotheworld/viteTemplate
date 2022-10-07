import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve('../viteTest'), //index.html所在資料夾
  publicDir: 'public', //靜態資源

  resolve: {
    //别名
    alias: {
      // '@': path.resolve('', 'src')
      '@': path.resolve('../viteTest', 'src')
    }
  },
  plugins: [vue()],
  server: {
    port: 8081,
    hmr: {
      host: '127.0.0.1',
      port: 8081
    },
    proxy: {

      '/login': {
        target: `https://web.edgentauems.com.tw/uetrack.em/master`,
        ws: true,
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      },

    },

    // proxy: {
    //     '/api': {
    //         target: 'your https address',
    //         changeOrigin: true,
    //         rewrite: (path: string) => path.replace(/^\/api/, '')
    //     }
    // }

    // 使用 proxy 範例2
    // '/api': {
    //   target: 'http://jsonplaceholder.typicode.com',
    //   changeOrigin: true,
    //   configure: (proxy, options) => {
    //     // proxy 是 'http-proxy' 的实例
    //   }
    // }
  }



})
