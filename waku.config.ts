import { defineConfig } from "waku/config"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  adapter: 'waku/adapters/edge',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
