import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://chatzp.com.br',
  integrations: [preact({ compat: true })],
});
