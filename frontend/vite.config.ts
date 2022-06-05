import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
const url = "http://localhost:8000";
export default defineConfig({
  server: {
    proxy: {
      '/api/user':url,
      '/api/chat':url,
      '/api/message':url,
    },
  },
  plugins: [react()],
});
