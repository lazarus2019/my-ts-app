import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Document way but it not work
  // server: {
  //   origin: "http://127.0.0.1:8080",
  // },
  
  // server: {
  //   port: 3030, // custom port for Vite
  // },
  // preview: {
  //   port: 8080,
  // },
});
