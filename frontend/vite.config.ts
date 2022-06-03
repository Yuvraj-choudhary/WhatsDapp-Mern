import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
const url = "http://127.0.0.1:8000"
export default defineConfig({
    server: {
        host: true,
        proxy: {
            '/api/user': {
                target: url, changeOrigin: true,
                secure: false,
            },
            '/api/chat': {
                target: url, changeOrigin: true,
                secure: false,
            },
            '/api/message': {
                target: url, changeOrigin: true,
                secure: false,
            }
        },
        cors: false,
        origin: 'http://localhost:8000'
    },
    plugins: [react()]
})