import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // Корень проекта - папка src
  build: {
    outDir: "dist", // Папка для сборки будет в корне проекта
    emptyOutDir: true, // Очищать папку при каждой сборке,
  },
  server: {
    open: true, // Автоматически открывать браузер
  },
});
