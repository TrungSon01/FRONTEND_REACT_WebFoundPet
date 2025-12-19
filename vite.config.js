import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      "f0cf-14-177-214-179.ngrok-free.app",
      "localhost",
      "127.0.0.1",
    ],
    proxy: {
      "/api": {
        target: "https://backend-django-webfoundpet.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
