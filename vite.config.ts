import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.gif', '**/*.mp3', '**/*.svg'],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://urlofyourapiblockedbycors",
  //       changeOrigin: true
  //     }
  //   }
  // }
})
