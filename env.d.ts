/// <reference types="@slidev/types" />

// Configuración de tipos para Vite
/// <reference types="vite/client" />

// Configuración de tipos para Slidev
declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}

declare module '*.md' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}

// Tipos para módulos CSS
interface CSSModuleClasses {
  [key: string]: string;
}

declare module '*.module.css' {
  const classes: CSSModuleClasses;
  export default classes;
}

declare module '*.module.scss' {
  const classes: CSSModuleClasses;
  export default classes;
}

// Tipos para importación de fuentes
declare module '*.ttf' {
  const src: string;
  export default src;
}

declare module '*.otf' {
  const src: string;
  export default src;
}

declare module '*.woff' {
  const src: string;
  export default src;
}

declare module '*.woff2' {
  const src: string;
  export default src;
}
