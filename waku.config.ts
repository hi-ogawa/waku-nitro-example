import { defineConfig } from "waku/config"
import nitro from "@hiogawa/vite-plugin-nitro";
import tailwindcss from "@tailwindcss/vite"
import { fontless } from "fontless"
import inspect from "vite-plugin-inspect"

export default defineConfig({
  vite: {
    plugins: [
      inspect(),
      tailwindcss(),
      nitro({
        server: {
          environmentName: "rsc",
        },
      }),
      fontless({
        provider: 'google',
        defaults: {
          preload: true,
        }
      }),
    ],
  },
})
