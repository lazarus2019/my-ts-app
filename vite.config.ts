import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://www.npmjs.com/package/vite-tsconfig-paths
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
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
