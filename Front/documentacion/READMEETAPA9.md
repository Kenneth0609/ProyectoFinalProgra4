# Etapa 9: Configuración del enrutamiento

## Objetivo

Configurar el sistema de navegación de la plantilla utilizando TanStack Router y conectar las páginas de ejemplo con rutas tipadas.

## Trabajo realizado

Se definió la estructura inicial de rutas de la aplicación.

## Rutas incluidas

- `/`
- `/login`
- `/dashboard`
- `/users`

## Elementos configurados

### Árbol de rutas

Se creó una definición centralizada de rutas para conectar las páginas principales.

### Instancia del router

Se configuró la instancia del router con TanStack Router.

### Integración con React

Se conectó el router con la aplicación mediante el provider correspondiente.

### Importaciones mediante API pública

Las páginas se importan desde sus archivos `index.ts`, evitando importaciones internas directas.

## Decisiones técnicas

Se eligió TanStack Router por su enfoque tipado y su compatibilidad con proyectos TypeScript.

La configuración se separó para mantener el router organizado y facilitar la incorporación de nuevas rutas en el futuro.

## Resultado

La plantilla quedó preparada con un sistema de navegación tipado, modular y compatible con la estructura FSD.
