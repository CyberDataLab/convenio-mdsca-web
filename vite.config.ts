import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages sirve los repositorios de proyecto bajo /<nombre-del-repo>/.
  base: '/convenio-mdsca-web/',
  plugins: [react()],
})
