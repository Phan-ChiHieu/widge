import copy from "rollup-plugin-copy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [{ src: "dist/chat-widget.iife.js", dest: "public" }],
      hook: "writeBundle",
    }),
  ],
  build: {
    lib: {
      entry: "./src/main.jsx",
      name: "ChatWidget",
      fileName: "chat-widget",
      formats: ["iife"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
