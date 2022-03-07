import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import jsx from "@vitejs/plugin-vue-jsx";
import InsertAfter from "./vite-plugin-Insert";
import dts from "./dts";
import { resolve } from "path";

export default defineConfig({
  mode:"production",
  
  plugins: [
    vue(),
    jsx(),
    dts(),
    InsertAfter({
      targetPath: resolve(__dirname, "../lib"),
      fileName: "package.json",
      originPath: resolve(__dirname, "../packages/core/package.json"),
    }),
  ],
  resolve: {
    alias:{
      '/@': resolve('../node_modules/vue'),
      '@': '/src'
    },
    preserveSymlinks: false
  },
  build: {
    minify: "terser",
    outDir: resolve(__dirname, "../lib"),
    lib: {
      entry: "./packages/core/index.ts",
      name: "unitify2",
      fileName: (format) =>`unitfiy.${format}.js`
    },

    rollupOptions: {
      external: ["vue"],
      output:{
        globals: {
          vue: "Vue",
        },
      }
      
    },
  },
});
