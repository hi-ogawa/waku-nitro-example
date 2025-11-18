# Waku + Nitro

The example of integrating [Nitro](https://nitro.build/) on [Waku](https://github.com/wakujs/waku) for multi platform deployment via [`@hiogawa/vite-plugin-nitro`](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/nitro).

You can speficy [`preset`](https://nitro.build/config#preset) (deployment target) via plugin options or `NITRO_PRESET` environment, e.g.

```js
// in waku.config.ts
export default defineConfig({
  adapter: 'waku/adapters/edge',
  vite: {
    plugins: [
      nitro({
        server: {
          environmentName: "rsc",
        },
        config: {
          preset: "vercel",
        },
      }),
    ],
  },
});
```

```sh
NITRO_PRESET=vercel pnpm build
```
