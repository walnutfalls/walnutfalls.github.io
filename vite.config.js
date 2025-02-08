import { defineConfig } from "vite";


export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.png"],
  base: "https://walnutfalls.github.io/walnutfalls-site/",
});