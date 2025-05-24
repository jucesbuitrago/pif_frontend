import { defineConfig } from 'slidev/configure'

export default defineConfig({
  // Configuración del tema
  theme: {
    // Puedes personalizar los colores aquí
    colors: {
      primary: '#3b82f6', // azul
      secondary: '#6b7280',  // gris
      success: '#10b981',    // verde
      warning: '#f59e0b',    // ámbar
      error: '#ef4444',     // rojo
    },
  },
  
  // Configuración del editor
  editor: {
    // Habilitar o deshabilitar la edición en vivo
    enabled: true,
  },
  
  // Configuración de dibujo
  drawings: {
    // Persistir dibujos entre recargas
    persist: false,
  },
  
  // Configuración de exportación
  export: {
    // Formato de exportación por defecto
    format: 'pdf',
    // Incluir el código fuente en la exportación
    withToc: true,
  },
  
  // Configuración del servidor de desarrollo
  server: {
    // Puerto del servidor de desarrollo
    port: 3030,
    // Abrir automáticamente en el navegador
    open: true,
  },
})