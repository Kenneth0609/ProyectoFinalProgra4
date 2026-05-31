# Etapa 3: Configuración de la capa App

## Objetivo

Configurar la capa `app`, encargada de la inicialización global de la aplicación, los providers, el tema visual y el sistema de enrutamiento.

## Trabajo realizado

Se definieron los elementos principales de inicialización:

- Punto de entrada de la aplicación.
- Composición de providers globales.
- Configuración del tema visual.
- Integración del sistema de rutas.

## Elementos configurados

### Tema visual

Se configuró un tema base de Material UI para centralizar decisiones visuales como colores, tipografía y estilos generales.

### Providers globales

Se creó una composición de providers para envolver la aplicación con las configuraciones globales necesarias, como:

- ThemeProvider.
- CssBaseline.
- QueryProvider.

### Enrutamiento

Se configuró el sistema de rutas con TanStack Router, conectando las páginas principales de ejemplo.

### Punto de entrada

El archivo `src/main.tsx` funciona como punto de entrada de Vite y delega el montaje real hacia la capa `app`.

## Resultado

La capa `app` quedó preparada como centro de inicialización global de la plantilla, manteniendo separadas las responsabilidades de configuración, providers y rutas.
