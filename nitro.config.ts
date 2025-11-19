import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  publicAssets: [
    {
      dir: "./dist/public",
      baseURL: "/",
    },
    {
      dir: "./dist/public/assets",
      baseURL: "/assets",
      maxAge: 31536000, // cache immutable
    },
  ],
  renderer: {
    handler: './nitro-renderer.js',
  },
  scanDirs: [],
  imports: false,
  preset: 'vercel',
})
