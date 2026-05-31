# Etapa 5: Integración de Clientes y Reservas

Esta etapa se centró en la conexión de las entidades de **Clientes** y **Reservas** con el backend real, permitiendo la visualización de datos dinámicos y preparando la lógica para la creación y gestión de estados.

## Funcionalidades Implementadas

### 1. Entidades y Tipos
- Se crearon los tipos TypeScript en `src/entities/cliente` y `src/entities/reserva` basados en los DTOs reales del backend (`ClienteResponseDTO`, `ReservaResponseDTO`).
- Se definieron interfaces para la creación de clientes y reservas, así como para la actualización de estados de reserva.

### 2. Servicios de API y Hooks
- **Servicios:** Se implementaron `clienteApi` y `reservaApi` utilizando el cliente Axios centralizado.
- **TanStack Query:** Se crearon hooks personalizados para ambas entidades:
    - `useClientes`: Obtención de listado de clientes.
    - `useCreateCliente`: Mutación para registrar nuevos clientes.
    - `useReservas`: Obtención de listado de reservas.
    - `useCreateReserva`: Mutación para crear nuevas reservas.
    - `useUpdateEstadoReserva`: Mutación para cambiar el estado de una reserva (Confirmada, Pendiente, Cancelada).

### 3. Interfaz de Usuario (UI)
- **Dashboard Actualizado:** Se añadieron métricas para "Reservas Hoy" y "Clientes Registrados", conectadas directamente con el API.
- **Nuevas Páginas:**
    - **Gestión de Clientes:** Tabla con ID, nombre, apellido, teléfono y cédula.
    - **Gestión de Reservas:** Tabla detallada con fecha, horario, pax, cliente, mesa y estado (usando etiquetas de colores).
- **Navegación:** Se registraron las rutas `/clientes` y `/reservas` en TanStack Router y se añadieron al menú lateral.

### 4. Componentes de Tabla
- Se crearon `ClienteTable` y `ReservaTable` utilizando el componente base `AppDataTable`.
- La tabla de reservas incluye lógica visual para representar los diferentes estados mediante Chips de Material UI.

## Resumen Técnico
- **Arquitectura:** Feature-Sliced Design (FSD).
- **Gestión de Datos:** TanStack Query para fetch y mutaciones.
- **UI:** Material UI para componentes, tablas y feedback visual.
- **Endpoints Principales:**
    - `GET /api/Clientes`
    - `POST /api/Clientes`
    - `GET /api/Reservas`
    - `POST /api/Reservas`
    - `PUT /api/Reservas/{id}/estado/{estadoId}`

---
*Documentación generada tras la validación exitosa del build del proyecto.*
