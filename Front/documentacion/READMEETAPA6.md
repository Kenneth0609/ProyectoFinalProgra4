# Etapa 6: Capa Features

## Objetivo

Implementar features de ejemplo que representen acciones o capacidades del usuario dentro de la aplicación.

## Trabajo realizado

Se añadieron features independientes para demostrar cómo organizar formularios, validaciones, estado local/global y comunicación con servicios.

## Features implementadas

### auth-by-email

Feature de ejemplo para representar un flujo de autenticación por correo.

Incluye:

- Formulario tipado.
- Validación con Zod.
- Integración con React Hook Form.
- Servicio de ejemplo para llamada HTTP.

El objetivo no es implementar autenticación real, sino mostrar la estructura esperada para una feature con formulario y validación.

### user-search

Feature de ejemplo para búsqueda de usuarios.

Incluye:

- Hook para manejar el término de búsqueda.
- Componente de entrada reutilizable.
- Tipado de parámetros y eventos.

### theme-mode

Feature de ejemplo para manejar una preferencia global de interfaz.

Incluye:

- Store con Zustand.
- Estado inicial tipado.
- Acción para alternar el modo visual.
- Componente de interacción.

## Decisiones técnicas

Las features se mantuvieron independientes entre sí y exponen únicamente lo necesario mediante su archivo `index.ts`.

Cada feature contiene los segmentos necesarios según su responsabilidad, como:

- `ui`
- `model`
- `api`

## Resultado

La capa `features` quedó estructurada con ejemplos representativos de acciones del usuario, manteniendo separación de responsabilidades y tipado estricto.
