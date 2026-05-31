# Documentación Final del Proyecto - Restaurante Pro

Este directorio contiene la documentación técnica detallada de cada etapa de desarrollo del sistema de gestión de restaurante.

## Índice de Etapas

### [Etapa 3: Integración de Login y Autenticación Base](./README_ETAPA3.md)
- Conexión con el backend de C#/.NET.
- Configuración de Axios con interceptores JWT.
- Gestión de estado global con Zustand.
- Protección de rutas privadas.

### [Etapa 4: Integración de Mesas y Zonas](./README_ETAPA4.md)
- Tipado dinámico para entidades de infraestructura.
- Sincronización de datos mediante TanStack Query.
- Dashboard dinámico con métricas reales.
- Listados interactivos de mesas y zonas.

### [Etapa 5: Integración de Clientes y Reservas](./README_ETAPA5.md)
- Implementación de modelos de negocio core.
- Gestión de estados de reserva (Confirmada, Pendiente, Cancelada).
- Métricas de flujo de clientes en tiempo real.
- Estructura base para el ciclo de vida de la reserva.

### [Etapa 6: Flujo Completo de Reservas](./README_ETAPA6.md)
- **Hito Principal:** Implementación del flujo de reserva punta a punta.
- Registro rápido de clientes (Modales).
- Consulta inteligente de disponibilidad de mesas por horario.
- Acciones operativas directas desde tablas.
- Actualización masiva de Seed Data en el backend.

---

## Tecnologías Utilizadas
- **Frontend:** React 19, TypeScript, Vite, TanStack Router, TanStack Query, Material UI v6.
- **Backend:** .NET Web API, Entity Framework Core, SQLite, JWT Auth.
- **Validación:** Zod + React Hook Form.

## Cómo ejecutar el proyecto
1.  Asegurar que el backend (.NET) esté corriendo en el puerto `5052`.
2.  Configurar el archivo `.env` en el frontend con `VITE_API_BASE_URL=http://localhost:5052/api`.
3.  Ejecutar `npm install` y `npm run dev` en la carpeta `Front`.
