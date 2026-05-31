# Etapa 7: Capa Widgets

## Objetivo

Construir widgets de ejemplo para demostrar cómo componer features, entities y elementos compartidos en bloques de interfaz más grandes.

## Trabajo realizado

Se crearon widgets orientados a la composición visual y estructural de la aplicación.

## Widgets incluidos

### main-layout

Layout principal de la aplicación.

Incluye:

- Contenedor general.
- Área de navegación.
- Área de contenido.
- Composición de header y sidebar.

### app-header

Encabezado superior de la aplicación.

Incluye:

- Estructura visual con Material UI.
- Integración de acciones de interfaz.
- Espacio para título o información contextual.

### app-sidebar

Barra lateral de navegación.

Incluye:

- Lista tipada de elementos de navegación.
- Estructura visual reutilizable.
- Separación entre layout y rutas.

### user-table

Widget de tabla para usuarios.

Incluye:

- Columnas tipadas.
- Integración con la entidad `user`.
- Uso de la tabla genérica definida en `shared`.

## Decisiones técnicas

Los widgets no definen modelos de negocio propios. Su función principal es componer elementos ya existentes en bloques visuales reutilizables.

Las dependencias se mantienen en dirección descendente, respetando la jerarquía FSD.

## Resultado

La capa `widgets` quedó preparada para ensamblar elementos de dominio, acciones de usuario y componentes compartidos dentro de estructuras visuales reutilizables.
