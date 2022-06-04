import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const url =
  process.env.NODE_ENV === "production"
    ? "http://whatsdapp.herokuapp.com"
    : "http://127.0.0.1:8000";
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: url,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
