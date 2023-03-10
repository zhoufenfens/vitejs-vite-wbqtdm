import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import { manualChunksPlugin } from 'vite-plugin-webpackchunkname';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
      include: [/\.vue$/, /\.vue\?/],
    }),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    manualChunksPlugin(),
  ],
})
