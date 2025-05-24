import { defineConfig } from 'slidev/configure'

export default defineConfig({
  // Configuración del tema
  theme: {
    // Configuración de fuentes
    fontFamily: {
      sans: 'Glacial Indifference, sans-serif',
      mono: 'monospace',
    },
    // Colores personalizados
    colors: {
      primary: 'var(--slidev-theme-primary, #3b82f6)',
      secondary: 'var(--slidev-theme-secondary, #6b7280)',
      success: 'var(--slidev-theme-success, #10b981)',
      warning: 'var(--slidev-theme-warning, #f59e0b)',
      error: 'var(--slidev-theme-error, #ef4444)',
    },
  },
  
  // Configuración del editor
  editor: {
    enabled: true,
  },
  
  // Configuración de dibujo
  drawings: {
    persist: false,
  },
  
  // Configuración de exportación
  export: {
    format: 'pdf',
    withToc: true,
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3030,
    open: true,
  },
  
  // Configuración de estilos globales
  css: {
    preflight: true,
    base: true,
    utilities: true,
    components: true,
  },
  
  // Configuración de Tailwind
  tailwind: {
    config: './tailwind.config.js',
  },
  
  // Configuración de Vite
  vite: {
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  },
});