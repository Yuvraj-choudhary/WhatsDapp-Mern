import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server:{
        proxy:{
            '/api/user':"https://whatsdapp.herokuapp.com",
            '/api/chat':"https://whatsdapp.herokuapp.com",
            '/api/message':"https://whatsdapp.herokuapp.com",
        }
    },
    plugins: [react()]
})
