import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server:{
        proxy:{
            '/api/user':"http://localhost:8000/",
            '/api/chat':"http://localhost:8000/",
            '/api/message':"http://localhost:8000/",
        }
    },
    plugins: [react()]
})
