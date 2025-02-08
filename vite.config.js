import { defineConfig } from "vite";


export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG"],
  base: "https://walnutfalls.github.io/walnutfalls-site/",
});