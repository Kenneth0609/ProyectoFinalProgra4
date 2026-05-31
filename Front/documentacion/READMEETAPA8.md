# Etapa 8: Capa Pages

## Objetivo

Crear páginas de ejemplo que actúen como puntos de composición final para las rutas principales de la aplicación.

## Trabajo realizado

Se definieron páginas representativas para demostrar cómo se ensamblan widgets, features y entities dentro de vistas completas.

## Páginas incluidas

### login

Página de ejemplo para acceso de usuario.

Integra la feature `auth-by-email` mediante su API pública.

### dashboard

Página principal de ejemplo.

Utiliza el layout principal y presenta contenido representativo para demostrar la composición de una vista.

### users

Página de ejemplo para gestión de usuarios.

Integra:

- Widget de tabla de usuarios.
- Feature de búsqueda.
- Datos de ejemplo tipados.
- Modelo de la entidad `user`.

## Decisiones técnicas

Las páginas funcionan como orquestadores de composición. No contienen lógica de negocio real ni reglas complejas.

Su responsabilidad es ensamblar elementos provenientes de capas inferiores y asociarlos a rutas de la aplicación.

## Resultado

La capa `pages` quedó estructurada con vistas de ejemplo que muestran cómo escalar la plantilla hacia nuevas secciones del sistema.
