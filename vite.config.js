import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    visualizer({
      filename: 'dist/bundle-stats.html',
      open: true
    }),
     viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }) 
  ],
  server: {
    open: true
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    treeshake: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['swiper', 'bootstrap']
        }
      }
    }
  }
});
