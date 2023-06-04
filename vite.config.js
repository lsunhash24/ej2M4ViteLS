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
			//   customPage: resolve(__dirname, "src/components/proveedor.html"),
			//   customPage2: resolve(__dirname, "src/components/articulo.html"),
			},
		},	
	},
	pages: {
		'/proveedor': {
		  entry: 'src/components/proveedor.html'
		},
		'/articulo': {
		  entry: 'src/components/articulo.html'
		}
	  },

	base: '/ej2M4ViteLS/',
});
