import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact'
export default defineConfig({
  integrations: [
    preact({compat : true}),
    mdx()
  ],
})