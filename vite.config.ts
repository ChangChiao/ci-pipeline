import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import alias from "@rollup/plugin-alias";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [alias(), vue()],
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },
});
