import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     proxy: {
//       // Redirect API requests to the backend server
//       '/api': {
//         target: 'http://localhost:4000', // Replace with your backend URL and port
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });

