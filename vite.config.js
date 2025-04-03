import { defineConfig } from "vite";


export default defineConfig({
  plugins: [],
  base: "/",
  build: {
        rollupOptions: {
            input: {
                main: "index.html",
                styles: "src/style.css"
            }
        }
    }
});
