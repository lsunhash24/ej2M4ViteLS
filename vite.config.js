import legacy from '@vitejs/plugin-legacy';
import { defineConfig } from 'vite';
import { resolve } from "path";

export default defineConfig({
	plugins: [
		legacy({
      polyfills: ['es.promise.finally', 'es/map', 'es/set'],
      modernPolyfills: ['es.promise.finally']
		})
	],
	build: {
		manifest: true,
		rollupOptions: {
			input: {
			  main: resolve(__dirname, "index.html"),
			  customPage: resolve(__dirname, "src/components/proveedor.html"),
			  customPage: resolve(__dirname, "src/components/articulo.html"),
			  customPage: resolve(__dirname, "index.html"),
			},
		},	
	},
	base: '/ej2M4ViteLS/',
});
