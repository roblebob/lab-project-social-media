import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();

const PORT_SERVER = dotenv.PORT_SERVER || 5000;
const PORT_CLIENT = dotenv.PORT_CLIENT || 3000;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT_CLIENT,
    // get rid of cors errors
    proxy: {
      "/api": {
        target: `http://localhost:${PORT_SERVER}`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
