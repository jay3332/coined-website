import { defineConfig } from "vite";
import solid from "solid-start/vite";
import cloudflare from "solid-start-cloudflare-pages";
import rehypeSlug from "rehype-slug";
import mdx from "@mdx-js/rollup"

export default defineConfig({
  plugins: [
    {
      // @ts-ignore
      ...mdx({
        jsxImportSource: "solid-jsx",
        rehypePlugins: [rehypeSlug],
      }),
      enforce: "pre",
    },
    solid({
      adapter: cloudflare({}),
      extensions: [".mdx", ".md"],
    }),
  ],
  build: {
    rollupOptions: {
      external: ["solid-jsx", "solid-jsx/jsx-runtime"]
    }
  }
});
