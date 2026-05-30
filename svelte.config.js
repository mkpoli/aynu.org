import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// The site is fully static (prerendered) — adapter-static emits a
		// portable build/ directory deployable on any static host.
		adapter: adapter({
			fallback: '404.html'
		}),
		alias: {
			$assets: './src/assets'
		}
	}
};

export default config;
