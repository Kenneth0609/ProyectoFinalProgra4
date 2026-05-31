# Plantilla Arquitectónica Frontend con React y TypeScript

## Descripción

Este repositorio contiene una plantilla arquitectónica frontend de grado profesional construida con **React 19**, **TypeScript** y **Vite 8**. El proyecto está estrictamente organizado bajo la metodología **Feature-Sliced Design (FSD)** y se presenta como una base sólida, escalable y 100% tipada, preparada para integrarse con APIs REST externas.

**Nota importante:** Este proyecto es una infraestructura base y académica; no contiene lógica de negocio real. Todos los módulos, servicios y componentes implementados sirven como cáscaras tipadas y ejemplos de organización arquitectónica.

## Objetivo del proyecto

Definir una base mantenible, consistente y predecible que minimice la deuda técnica inicial en proyectos de mediana y gran escala. Provee patrones claros para la gestión de estado, navegación, validación de formularios y visualización de datos en un entorno estandarizado.

## Stack tecnológico

| Tecnología            | Uso dentro del proyecto                                     |
| :-------------------- | :---------------------------------------------------------- |
| **React**             | Biblioteca principal para la interfaz de usuario.           |
| **TypeScript**        | Lenguaje para tipado estricto y seguridad en el desarrollo. |
| **Vite**              | Herramienta de construcción y servidor de desarrollo.       |
| **TanStack Router**   | Sistema de enrutamiento basado en tipos (Type-safe).        |
| **TanStack Query**    | Gestión de estado asíncrono y caché de datos.               |
| **TanStack Table**    | Lógica para tablas de datos complejas y tipadas.            |
| **Zustand**           | Gestión de estado global ligero.                            |
| **React Hook Form**     | Manejo eficiente de formularios y validaciones.             |
| **@hookform/resolvers** | Conecta React Hook Form con Zod para validaciones tipadas.  |
| **Emotion**             | Motor de estilos (CSS-in-JS) para los componentes de MUI.   |
| **Zod**               | Validación de esquemas y contratos de datos.                |
| **Axios**             | Cliente HTTP para servicios externos.                       |
| **Material UI (MUI)** | Sistema de diseño y componentes visuales base (v6).         |
| **Material Icons**    | Biblioteca de iconos oficiales de Material Design.          |

## Arquitectura: Feature-Sliced Design (FSD)

El código se divide en capas con responsabilidades unidireccionales:

1.  **app**: Inicialización global (Providers, Router, Estilos).
2.  **pages**: Composición de pantallas asociadas a rutas.
3.  **widgets**: Bloques funcionales grandes (ej. Header, Sidebar, UserTable).
4.  **features**: Acciones del usuario con lógica funcional (ej. Login, Búsqueda).
5.  **entities**: Conceptos del dominio y modelos de datos (ej. User).
6.  **shared**: Infraestructura base agnóstica al negocio (ej. UI atómica, Utils).

## Estructura de carpetas

```text
src/
  ├── app/        # Corazón técnico e inicialización
  ├── pages/      # Ensamblado de pantallas
  ├── widgets/    # Bloques funcionales grandes
  ├── features/   # Capacidades interactivas
  ├── entities/   # Lógica y modelos de dominio
  └── shared/     # Infraestructura base reutilizable
```

## Reglas de Oro

- **Public API:** Cada slice debe exponer su contenido exclusivamente a través de `index.ts`.
- **Dependencias:** Se debe respetar la jerarquía `app → pages → widgets → features → entities → shared`.
- **Cero `any`:** Todo el proyecto utiliza tipado estricto y genéricos.
- **Sin Tailwind/shadcn:** El sistema visual es puramente Material UI.

## Documentación por etapas

Para entender la evolución y los detalles técnicos de la construcción de esta plantilla, consulte los siguientes documentos:

- [Etapa 1: Definición del stack tecnológico](./documentacion/READMEETAPA1.md)
- [Etapa 2: Estructura base FSD y configuración de alias](./documentacion/READMEETAPA2.md)
- [Etapa 3: Configuración de la capa App](./documentacion/READMEETAPA3.md)
- [Etapa 4: Capa Shared](./documentacion/READMEETAPA4.md)
- [Etapa 5: Capa Entities](./documentacion/READMEETAPA5.md)
- [Etapa 6: Capa Features](./documentacion/READMEETAPA6.md)
- [Etapa 7: Capa Widgets](./documentacion/READMEETAPA7.md)
- [Etapa 8: Capa Pages](./documentacion/READMEETAPA8.md)
- [Etapa 9: Configuración del enrutamiento](./documentacion/READMEETAPA9.md)
- [Etapa 10: Validación arquitectónica final](./documentacion/READMEETAPA10.md)

## Guía de Comandos

```bash
npm install     # Instalar dependencias
npm run dev     # Servidor de desarrollo
npm run build   # Compilación y verificación de tipos
npm run preview # Previsualizar build de producción
npm run lint    # Auditoría de calidad de código
```

