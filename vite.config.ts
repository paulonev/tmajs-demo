import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), basicSsl()],
  build: {
    outDir: 'dist',
    copyPublicDir: true,
  },
  base: './',
  envDir: 'root',
  publicDir: './public',
  appType: 'spa'
});

