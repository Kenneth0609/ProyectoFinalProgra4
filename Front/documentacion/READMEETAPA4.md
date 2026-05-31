# Etapa 4: Capa Shared

## Objetivo

Construir la capa `shared`, destinada a contener infraestructura reutilizable que no depende de reglas de negocio ni de módulos específicos.

## Trabajo realizado

Se añadieron elementos reutilizables para servir como base común del proyecto.

## Responsabilidades incluidas

### Componentes UI base

Se definieron componentes reutilizables basados en Material UI, pensados para mantener consistencia visual en toda la aplicación.

Ejemplos:

- Botones base.
- Campos de texto.
- Tarjetas.
- Tabla genérica.

### Cliente HTTP

Se configuró un cliente HTTP centralizado con Axios para servir como punto común de comunicación con APIs externas.

### Configuración global

Se incorporó una zona de configuración para valores reutilizables, como la URL base de la API u otras constantes de entorno.

### Utilidades

Se agregaron funciones auxiliares reutilizables, por ejemplo:

- Formateo de fechas.
- Generación de iniciales.
- Funciones genéricas de apoyo.

### Tipos compartidos

Se definieron tipos reutilizables para estructuras comunes, como respuestas genéricas de API.

## Resultado

La capa `shared` quedó preparada como una biblioteca interna reutilizable, independiente del dominio y disponible para el resto de capas.
