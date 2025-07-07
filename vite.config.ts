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
  base: process.env.STATIC_BASE_URL || "/",
  build: {
    lib: {
      entry: "./src/main.tsx",
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
