import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      name: 'flow-transform',
      enforce: 'pre', // 在其他插件之前运行
      transform(code, id) {
        if (/\.js(x)?$/.test(id)) { // 匹配 .js 和 .jsx 文件
          const result = transform(code, {
            filename: id,
            plugins: [flowStripTypes],
            // ...其他插件和预设，如 @babel/preset-react
          });
          return result;
        }
      },
    },
  ],
});
