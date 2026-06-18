import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 👇 Add this server block right here!
  // server: {
  //   host: "0.0.0.0", // Allows Vite to receive requests from your Docker Swarm proxy
  //   port: 5173,
  //   allowedHosts: [
  //     ".ngrok-free.dev", // Universally accepts any ngrok tunnel URL
  //     ".ngrok-free.app",
  //   ],
  // },
});
