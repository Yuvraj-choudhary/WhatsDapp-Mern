import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const url = "http://127.0.0.1:8000"
export default defineConfig({
    server: {
        host: true,
        port : 3000,
        proxy: {
            '/': {
                target: url,
                changeOrigin: true,
            }
        }
    },
    plugins: [react()]
})