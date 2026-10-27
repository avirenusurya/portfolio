import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    proxy: {
      "/api/analyze-email": {
        target: "https://safewaves-api.onrender.com",
        changeOrigin: true,
        rewrite: () => "/api/v1/analyze/email",
        timeout: 60000,
        proxyTimeout: 60000,
      },
    },
  },
});
