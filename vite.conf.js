import { defineConfig } from 'vite';

export default defineConfig({
  // Base public path for the project
  base: 'https://walnutfalls.github.io/walnutfalls-site/',
  // Define build settings
  build: {
    outDir: 'dist', // Directory for the built files
  },
});
