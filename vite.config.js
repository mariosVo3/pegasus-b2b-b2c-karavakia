import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Https } from '@mui/icons-material'
import https from 'https'


export default defineConfig({
  plugins: [react()], 
  server: {
    host: true,
    port:5174,
    
    proxy: {
      
      '/api': {
        target: 'https://infounit.ten06.eu/pegasus/api',
        changeOrigin: true,
        open: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure:false,
        

      },

    
      
      }
     
    
  }
})