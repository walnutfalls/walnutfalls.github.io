import { defineConfig } from "vite";


export default defineConfig({
  plugins: [],
  base: "/walnutfalls-site/",
  build: {
        rollupOptions: {
            input: {
                main: "index.html",
                styles: "src/style.css"
            }
        }
    }
});