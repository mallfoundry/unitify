import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";

export default defineConfig({
  mode: "development",
  plugins: [vue()],
  resolve: {
		alias: {
			'@': '/src'
		}
	},
  css:{
		preprocessorOptions: {
			scss: {
				additionalData: '@import "../globalVariable.scss";'
			}
		}
  },
  build: {
    minify: "terser",
    outDir: resolve(__dirname, "../dist"),

    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
