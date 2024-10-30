import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Hoặc bạn có thể sử dụng '0.0.0.0'
  },
  resolve: {
    alias: [{ find: "~", replacement: "/src" }],
  },
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
});
