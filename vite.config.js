import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
base: "/imdb-web/",
 plugins: [react()],
 
})
