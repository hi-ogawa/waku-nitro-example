import { defineConfig } from "waku/config"
import nitro from "@hiogawa/vite-plugin-nitro";
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      nitro({
        server: {
          environmentName: "rsc",
        },
      }),
    ],
  }
})
