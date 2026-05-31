# Etapa 3: Integración de Login y Autenticación Base

Esta etapa se centró en conectar la interfaz visual de inicio de sesión con el backend de C#/.NET, asegurando un flujo de autenticación seguro y persistente.

## Funcionalidades Implementadas

### 1. Configuración de Entorno
- Se estandarizó el uso de la variable `VITE_API_BASE_URL` en el archivo `.env`.
- Se configuró `src/shared/config/env.config.ts` para centralizar el acceso a las variables de entorno, facilitando el cambio entre desarrollo y producción.

### 2. Cliente de API Centralizado (Axios)
- Se verificó y ajustó `src/shared/api/httpClient.ts`.
- **Interceptor de Peticiones:** Añade automáticamente el token JWT en el encabezado `Authorization: Bearer <token>` para todas las llamadas al API si el usuario está autenticado.
- **BaseURL:** Configurada dinámicamente para apuntar al backend local (`http://localhost:5052/api`).

### 3. Gestión de Estado con Zustand
- Se implementó `useAuthStore` en `src/features/auth-by-email/model/auth.store.ts`.
- **Persistencia:** La sesión se mantiene en `localStorage` (`auth-storage`), permitiendo que el usuario siga logueado tras recargar el navegador.
- **Acciones:** Manejo de login (guardar token/rol) y logout (limpieza de almacenamiento).

### 4. Conexión del Formulario de Login
- El componente `LoginForm.tsx` ahora consume el servicio `authApi.login`.
- **Validación:** Uso de `react-hook-form` y `Zod` para validar correos y contraseñas.
- **Feedback:** Gestión de estados de carga (loading) y visualización de errores reales devueltos por el backend (ej: "Credenciales inválidas").

### 5. Protección de Rutas (Guards)
- Se configuró el `routeTree.tsx` de TanStack Router para:
    - Redirigir a `/login` si un usuario no autenticado intenta entrar al Dashboard o Usuarios.
    - Redirigir al Dashboard si un usuario ya autenticado intenta acceder a la página de login.

## Resumen Técnico
- **Tecnologías:** React 19, TypeScript, Vite, Zustand, Axios, TanStack Router, Material UI.
- **Arquitectura:** Feature-Sliced Design (FSD).
- **Endpoint Principal:** `POST /api/Auth/login`.

---
*Documentación generada tras la validación exitosa del build del proyecto.*
