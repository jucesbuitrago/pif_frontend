import { defineConfig } from 'slidev/configure'

export default defineConfig({
  theme: {
    colors: {
      primary: '#3b82f6', // azul
      secondary: '#6b7280',  // gris
      success: '#10b981',    // verde
      warning: '#f59e0b',    // ámbar
      error: '#ef4444',     // rojo
    },
  },
  editor: {
    // Habilitar o deshabilitar la edición en vivo
    enabled: true,
  },
  
  // Configuración de dibujo
  drawings: {
    persist: false,
  },
  export: {
    // Formato de exportación por defecto
    format: 'pdf',
    withToc: true,
  },
  
  // Configuración del servidor
  server: {
    // Configuración para Render
    port: process.env.PORT ? parseInt(process.env.PORT) : 10000,
    open: false,
    host: '0.0.0.0',
    // Deshabilitar HMR en producción
    hmr: false,
    // Forzar el uso de HTTP
    https: false
  },

  // Configuración de Vite
  vite: {
    // Configuración del servidor para producción
    server: {
      host: '0.0.0.0',
      port: process.env.PORT ? parseInt(process.env.PORT) : 10000,
      strictPort: true,
      // Deshabilitar HMR en producción
      hmr: false,
      // Configuración de CORS
      cors: true,
      // Configuración de proxy si es necesario
      proxy: {}
    },
    // Configuración de compilación
    build: {
      // Generar sourcemaps para producción
      sourcemap: true
    }
  }
})