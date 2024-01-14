import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

const SRC = path.join("src");

export default defineConfig({
  css: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  resolve: {
    alias: {
      Components: path.join(SRC, "Components"),
      Models: path.join(SRC, "Models"),
      Pages: path.join(SRC, "Pages"),
      Root: path.join(SRC, "Root"),
      State: path.join(SRC, "State"),
    },
  },
  server: {
    host: "localhost",
    port: 3000,
    open: true,
  },
  build: {
    minify: "terser",
  },
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      entry: "../src/Root/index.tsx",
      template: "public/index.html",
      viteNext: true,
    }),
  ],
});
