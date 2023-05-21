import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3001,
    // proxy: {
    //   "/hello": "http://localhost:9001",
    //   "/api": "http://localhost:9001",
    // },
  },
  plugins: [react()],
});
