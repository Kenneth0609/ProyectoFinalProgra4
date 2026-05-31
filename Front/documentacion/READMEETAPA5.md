# Etapa 5: Capa Entities

## Objetivo

Implementar una entidad de ejemplo para representar cómo deben organizarse los conceptos del dominio dentro de la arquitectura.

## Trabajo realizado

Se creó la entidad `user` como ejemplo representativo de dominio.

## Elementos incluidos

### Modelo de dominio

Se definieron tipos e interfaces para representar el modelo interno de usuario.

Ejemplos:

- `User`
- `UserRole`
- `UserStatus`

### Contratos de API

Se definieron tipos para representar la forma en que los datos podrían recibirse desde una API externa.

Esto permite separar el modelo externo del modelo interno de la aplicación.

### Servicios de entidad

Se añadieron funciones de ejemplo para representar llamadas HTTP relacionadas con la entidad.

Estas funciones no contienen lógica de negocio real, sino firmas y estructuras representativas.

### Mappers

Se incorporó un mapper para ejemplificar cómo transformar datos externos hacia el modelo interno de la aplicación.

### Componentes de dominio

Se agregaron componentes visuales asociados a la entidad, como tarjetas o avatares de usuario.

### API pública

La entidad expone sus elementos mediante un archivo `index.ts`, siguiendo las reglas de Feature-Sliced Design.

## Resultado

La entidad `user` quedó estructurada como ejemplo de dominio aislado, tipado y preparado para ser utilizado por features, widgets y pages.
