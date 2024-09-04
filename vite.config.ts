import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.gltf', '**/*.bin'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		fs: {
		  strict: false,
		  allow: ['..']
		}
	  }
});
