# Etapa 4: Integración de Mesas y Zonas

Esta etapa se centró en la conexión de las entidades de **Mesas** y **Zonas** con el backend real, reemplazando los datos estáticos por información dinámica y añadiendo nuevas páginas de gestión.

## Funcionalidades Implementadas

### 1. Entidades y Tipos
- Se crearon los tipos TypeScript en `src/entities/mesa` y `src/entities/zona` basados en los DTOs reales del backend (`MesaResponseDTO`, `ZonaResponseDTO`).
- Implementación de interfaces para creación y respuesta de datos.

### 2. Servicios de API y Hooks
- **Servicios:** Se implementaron `mesaApi` y `zonaApi` utilizando el cliente Axios centralizado.
- **TanStack Query:** Se crearon hooks personalizados (`useMesas`, `useZonas`, `useCreateMesa`) para gestionar la caché, los estados de carga y los errores de forma eficiente.
- **Sincronización:** Uso de `invalidateQueries` para asegurar que la interfaz se actualice automáticamente tras crear una nueva mesa.

### 3. Interfaz de Usuario (UI)
- **Dashboard Dinámico:** Las métricas principales ahora muestran el conteo real de mesas y zonas registradas en el sistema.
- **Nuevas Páginas:**
    - **Gestión de Mesas:** Tabla con ID, número, capacidad y zona.
    - **Gestión de Zonas:** Tabla con nombre y estado de disponibilidad visualizado mediante Chips de Material UI.
- **Navegación:** Se actualizaron las rutas en TanStack Router y se añadieron los accesos en la barra lateral (Sidebar).

### 4. Componentes Compartidos (Widgets)
- Se crearon widgets de tablas específicos (`MesaTable`, `ZonaTable`) que utilizan un componente de tabla genérico (`AppDataTable`) para mantener la consistencia visual.

## Resumen Técnico
- **Arquitectura:** Feature-Sliced Design (FSD).
- **Gestión de Datos:** TanStack Query para fetch y mutaciones.
- **UI:** Material UI para componentes y tablas.
- **Endpoints:**
    - `GET /api/Mesas`
    - `POST /api/Mesas`
    - `GET /api/Zonas`
    - `GET /api/Mesas/disponibles/...`

---
*Documentación generada tras la validación exitosa del build del proyecto.*
