import { defineConfig } from 'vite';
import removeComments from 'vite-plugin-remove-comments';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [removeComments()],
});
