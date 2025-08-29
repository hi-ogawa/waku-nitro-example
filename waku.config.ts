import { defineConfig } from "waku/config"
import nitro from "@hiogawa/vite-plugin-nitro";

export default defineConfig({
  vite: {
    plugins: [
      nitro({
        server: {
          environmentName: "rsc",
        },
      }),
    ],
  }
})
