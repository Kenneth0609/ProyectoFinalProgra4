# Etapa 7: Lista de Espera y Turnos

## 🎯 Objetivo
Implementar un sistema integral para gestionar clientes en espera cuando no hay disponibilidad inmediata de mesas, además de administrar los turnos operativos del restaurante.

---

## 🛠️ Cambios en Backend

### 1. Entidades y Base de Datos
- **ListaEspera**: Se extendió la entidad para incluir:
    - `EstadoId`: Relación con el catálogo de estados.
    - `Observaciones`: Campo de texto libre para notas del recepcionista.
    - `FechaCreacion`: Auditoría automática.
- **Estados**: Se añadió el estado **"Atendido"** (ID: 4) para permitir la trazabilidad completa del ciclo de vida del cliente.
- **SQLite**: Se actualizó el esquema mediante regeneración controlada de la base de datos (`EnsureCreated`).

### 2. Lógica de Negocio (Servicios)
- **ListaEsperaService**: 
    - Implementación de `ActualizarEstado`.
    - Refactorización de `PromoverAReserva`: Ahora marca el registro como "Atendido" en lugar de eliminarlo, manteniendo el historial operativo.
- **TurnoService**: Validaciones para asegurar que las solicitudes de reserva y lista de espera coincidan con los horarios operativos.

### 3. API (Controladores)
- **ListaEsperaController**: 
    - Nuevo endpoint: `PUT /api/ListaEspera/{id}/estado`.
    - Endpoints existentes optimizados para los nuevos DTOs.

---

## 💻 Cambios en Frontend (FSD Architecture)

### 1. Entities Layer
- **Entidad Turno**: Definición de tipos, servicios de API y hooks de TanStack Query.
- **Entidad ListaEspera**: Implementación de mutaciones para creación, actualización de estado y promoción a reserva.

### 2. Widgets Layer
- **TurnoTable**: Visualización de turnos activos e inactivos.
- **ListaEsperaTable**: Tabla dinámica con **Chips de estado** de Material UI y botones de acción contextuales (Atendido, Cancelar, Mesa).

### 3. Pages Layer
- **TurnosPage (`/turnos`)**: Vista de administración de horarios.
- **ListaEsperaPage (`/lista-espera`)**: Gestión centralizada de la cola de clientes.

### 4. Features Layer (Integración)
- **CreateReservaForm**: 
    - Se integró una lógica de "Contingencia".
    - Si la búsqueda de mesas no arroja resultados, se habilita el botón **"Añadir a Lista de Espera"**.
    - Captura automática de datos: Cliente, Fecha, Horas y Capacidad.

---

## 🚦 Flujo de Usuario
1. El recepcionista busca disponibilidad para una reserva.
2. Si el sistema indica "No hay mesas disponibles", se ofrece añadir al cliente a la lista de espera.
3. El registro aparece en la página de **Lista de Espera** como "Pendiente".
4. Cuando se libera una mesa o hay disponibilidad, el recepcionista puede:
    - **Promover**: Convierte la espera en reserva (pide ID de mesa).
    - **Listo**: Marca como atendido manualmente.
    - **X**: Cancela la entrada.

---

## 📈 Resultados Técnicos
- **Build Backend**: ✅ Exitoso (`dotnet build`).
- **Build Frontend**: ✅ Exitoso (`npm run build`).
- **Navegación**: Rutas registradas y protegidas en el sidebar.
- **Tipado**: 100% TypeScript con cumplimiento estricto de `verbatimModuleSyntax`.

---

## 📝 Recomendación para Etapa 8
**Gestión de Bloqueos de Mesas**: Desarrollar la interfaz para bloquear mesas manualmente por mantenimiento o eventos especiales, utilizando el controlador de bloqueos existente.
