# Waku + Nitro

The example of integrating [Nitro](https://nitro.build/) on [Waku](https://github.com/wakujs/waku) for multi platform deployment.

```js
// [waku.config.ts]
export default defineConfig({
  adapter: "waku/adapters/edge",
});
```

```js
// [nitro.config.ts]
export default defineNitroConfig({
  publicAssets: [
    {
      dir: "./dist/public",
      baseURL: "/",
    },
    {
      dir: "./dist/public/assets",
      baseURL: "/assets",
      maxAge: 31536000,
    },
  ],
  renderer: {
    handler: './nitro-renderer.js',
  },
}),
```

You can speficy [`preset`](https://nitro.build/config#preset) (deployment target) via nitro config or `NITRO_PRESET` environment, e.g.

```sh
NITRO_PRESET=vercel pnpm build
```
