import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        proxy: {
            '/api/user': {
                target: "https://whatsdapp.herokuapp.com", changeOrigin: true,
                secure: false
            },
            '/api/chat': {
                target: "https://whatsdapp.herokuapp.com",
                changeOrigin: true,
                secure: false
            },
            '/api/message': {
                target: "https://whatsdapp.herokuapp.com",
                changeOrigin: true,
                secure: false
            },
        }
    },
    plugins: [react()]
})
