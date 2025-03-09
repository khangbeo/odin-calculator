import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [tailwindcss()],
    base: "/odin-calculator",
    build: {
        outDir: "docs",
    },
});
