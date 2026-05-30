import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Deployed on Cloudflare Pages (project "aynu-org"); the page is fully
		// prerendered (see +layout.ts), so this emits static assets plus a
		// minimal worker into .svelte-kit/cloudflare.
		adapter: adapter(),
		alias: {
			$assets: './src/assets'
		}
	}
};

export default config;
