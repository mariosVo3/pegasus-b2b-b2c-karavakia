import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Https } from '@mui/icons-material'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 

  server: {
    host: true,
    Https:true,
    port:5174
  }
})
