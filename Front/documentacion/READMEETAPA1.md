# Etapa 1: Definición del stack tecnológico

## Objetivo

Definir el stack base de la plantilla frontend y configurar las dependencias necesarias para cubrir las categorías solicitadas en el proyecto.

## Trabajo realizado

Se configuró el proyecto con las tecnologías obligatorias:

- React
- TypeScript
- Vite

Además, se incorporaron librerías para cubrir las responsabilidades mínimas requeridas:

- TanStack Router para enrutamiento.
- React Hook Form para manejo de formularios.
- Zod para validación de esquemas.
- Zustand para estado global.
- TanStack Query para fetching y caché de datos.
- Axios para cliente HTTP.
- Material UI para componentes visuales.
- TanStack Table para tablas tipadas.

## Decisiones técnicas

El stack fue seleccionado para mantener una plantilla escalable, tipada y fácil de extender. Cada dependencia cumple una responsabilidad específica dentro de la arquitectura.

También se evitó incluir librerías visuales duplicadas para mantener un sistema de diseño consistente basado en Material UI.

## Resultado

El archivo `package.json` quedó configurado con las dependencias necesarias para iniciar una plantilla frontend profesional basada en React, TypeScript y Vite.
