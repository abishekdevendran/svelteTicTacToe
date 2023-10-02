import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
	return defineConfig({
		plugins: [sveltekit(), purgeCss()],
		server: {
			port: 3000,
			proxy: {
				'/api': {
					target: process.env.API_URL ?? 'http://localhost:5000',
					rewrite: (path) => path.replace(/^\/api/, ''),
					changeOrigin: true
				}
			}
		}
	});
};
