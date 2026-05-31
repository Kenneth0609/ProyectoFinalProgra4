# conventions.md — Enfoque 3: Feature-Sliced Design / arquitectura híbrida con React + TypeScript

## 1. Propósito

Este documento define las convenciones para una aplicación frontend construida con **React + TypeScript** usando **Feature-Sliced Design**, adaptado como arquitectura híbrida. El enfoque combina organización por capas de responsabilidad y separación por unidades funcionales llamadas slices.

Este enfoque se recomienda para aplicaciones medianas o grandes donde se necesita escalabilidad, autonomía por dominio y límites claros de dependencias.

## 2. Principios arquitectónicos

1. La estructura principal se organiza por capas de abstracción.
2. Dentro de cada capa se organizan slices por dominio o funcionalidad.
3. Cada slice expone una API pública mediante `index.ts`.
4. El acceso a archivos internos de otro slice está prohibido.
5. Las dependencias solo pueden ir desde capas superiores hacia capas inferiores.
6. Los componentes React deben ubicarse en segmentos `ui`.
7. Los contratos TypeScript deben vivir en `model`, `api` o `lib`, según su responsabilidad.

## 3. Stack asumido

```txt
React
TypeScript
Vite
TanStack Router
Material UI (MUI)
TanStack Query
TanStack Table
Zustand
React Hook Form + Zod
Axios
```

## 4. Estructura base

```txt
src/
  app/
    providers/
    router/
    config/
    styles/
    theme/
    App.tsx
    main.tsx
  pages/
    login/
      ui/
        LoginPage.tsx
      index.ts
    users/
      ui/
        UsersPage.tsx
      index.ts
  widgets/
    app-header/
      ui/
        AppHeader.tsx
      model/
      index.ts
  features/
    auth-by-email/
      ui/
        LoginForm.tsx
      model/
        useLoginForm.ts
        auth.schema.ts
      api/
        auth.api.ts
      index.ts
    user-search/
      ui/
        UserSearchBox.tsx
      model/
      index.ts
  entities/
    user/
      ui/
        UserCard.tsx
      model/
        user.types.ts
      api/
        user.api.ts
      lib/
        mapUserDto.ts
      index.ts
  shared/
    ui/
      Button.tsx
      Input.tsx
      DataTable.tsx
    api/
      httpClient.ts
    config/
      env.config.ts
      appRoutes.config.ts
    lib/
      formatDate.ts
      cn.ts
    hooks/
      useToggle.ts
    types/
      api.types.ts
    assets/
```

## 5. Capas

### `app/`

Inicialización global de la aplicación.

Contiene:

- Providers (QueryClient, ThemeProvider de MUI).
- Router (TanStack Router).
- Configuración global.
- Estilos globales.
- Definición del tema de Material UI.
- Punto de entrada React.

No debe contener lógica de negocio.

### `pages/`

Pantallas asociadas a rutas.

Contiene:

- Páginas compuestas con widgets, features y entities.
- Lectura de parámetros de ruta.
- Redirecciones de alto nivel.

No debe contener lógica compleja de negocio.

### `widgets/`

Bloques grandes de interfaz compuestos por varias entidades o features.

Ejemplos:

```txt
app-header
sidebar
user-table
dashboard-summary
```

### `features/`

Acciones o capacidades del usuario.

Ejemplos:

```txt
auth-by-email
user-search
change-password
create-order
```

Una feature debe representar una intención del usuario, no una entidad.

### `entities/`

Conceptos del dominio.

Ejemplos:

```txt
user
product
order
invoice
```

Aquí viven tipos, UI básica, mappers y acceso a datos directamente relacionado con la entidad.

### `shared/`

Código sin conocimiento del negocio.

Contiene:

- Componentes genéricos.
- Cliente HTTP.
- Helpers.
- Hooks reutilizables.
- Tipos globales técnicos.
- Configuración común.

## 6. Regla de dependencias entre capas

Dirección permitida:

```txt
app → pages → widgets → features → entities → shared
```

Una capa solo puede importar desde capas inferiores, nunca desde capas superiores.

Permitido:

```ts
// pages/users/ui/UsersPage.tsx
import { UserSearchBox } from "@/features/user-search";
import { UserCard } from "@/entities/user";
```

Prohibido:

```ts
// entities/user/model/user.types.ts
import { UsersPage } from "@/pages/users";
```

## 7. Slices y segments

Un slice es una unidad funcional dentro de una capa.

```txt
features/auth-by-email
entities/user
widgets/app-header
```

Un segment es una carpeta interna con responsabilidad técnica.

Segments permitidos:

```txt
ui/       Componentes React
model/    Estado, hooks, tipos de modelo, schemas
api/      Requests y contratos externos
lib/      Utilidades específicas del slice
config/   Configuración específica
```

## 8. API pública obligatoria

Todo slice debe tener `index.ts`. Los imports externos solo pueden entrar por ese archivo.

Correcto:

```ts
import { LoginForm } from "@/features/auth-by-email";
import type { User } from "@/entities/user";
```

Incorrecto:

```ts
import { LoginForm } from "@/features/auth-by-email/ui/LoginForm";
import type { User } from "@/entities/user/model/user.types";
```

Ejemplo:

```ts
// entities/user/index.ts
export { UserCard } from "./ui/UserCard";
export type { User } from "./model/user.types";
export { getUserById } from "./api/user.api";
```

## 9. Convenciones de nombres

### Capas y slices

- Capas: plural y en minúscula: `features`, `entities`, `widgets`.
- Slices: `kebab-case`: `auth-by-email`, `user-search`, `app-header`.
- Segments: minúscula: `ui`, `model`, `api`, `lib`.

### Archivos React

```txt
LoginForm.tsx
UsersPage.tsx
UserCard.tsx
AppHeader.tsx
```

### Hooks

```txt
useLoginForm.ts
useUserSearch.ts
useCurrentUser.ts
```

### Tipos y contratos

```txt
user.types.ts
auth.schema.ts
user.dto.ts
```

## 10. Convenciones para React + TypeScript

1. Los componentes React viven en `ui`. Se prioriza el uso de componentes de Material UI (MUI).
2. Los hooks propios de un slice viven en `model`.
3. Las props deben estar tipadas junto al componente si solo se usan ahí.
4. Los tipos compartidos del slice viven en `model`.
5. Los DTOs de API viven en `api` o `model`, pero no se exportan si son detalles internos.
6. Usar `import type` para tipos.
7. No usar `any` salvo excepción documentada.

Ejemplo con MUI:

```tsx
// entities/user/ui/UserCard.tsx
import { Card, CardContent, Typography } from "@mui/material";
import type { User } from "../model/user.types";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{user.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}
```

## 11. Convenciones para APIs

1. El cliente HTTP genérico vive en `shared/api`.
2. Los endpoints específicos viven en `api` dentro del slice correspondiente.
3. Las entidades pueden tener APIs base relacionadas con su recurso.
4. Las features pueden tener APIs asociadas a una acción del usuario.
5. Los datos externos deben mapearse antes de llegar a UI cuando el contrato del backend no coincide con el modelo frontend.

Ejemplo:

```ts
// entities/user/api/user.api.ts
import { httpClient } from "@/shared/api/httpClient";
import { mapUserDto } from "../lib/mapUserDto";
import type { UserDto } from "./user.dto";

export async function getUserById(id: string) {
  const dto = await httpClient.get<UserDto>(`/users/${id}`);
  return mapUserDto(dto);
}
```

## 12. Estado

Ubicación recomendada:

```txt
shared/       Estado técnico genérico, si existe
entities/     Estado/cache de entidades del dominio
features/     Estado de interacción o formularios
widgets/      Estado de composición de UI
pages/        Estado mínimo asociado a ruta
app/          Providers y configuración global
```

Reglas:

- El estado de formularios vive en la feature correspondiente.
- El estado remoto debe estar encapsulado en queries/mutations.
- El estado global se permite solo si cruza varios slices.
- No duplicar estado derivado si puede calcularse.

## 13. Testing

```txt
features/auth-by-email/model/useLoginForm.test.ts
features/auth-by-email/ui/LoginForm.test.tsx
entities/user/lib/mapUserDto.test.ts
widgets/app-header/ui/AppHeader.test.tsx
pages/users/ui/UsersPage.test.tsx
```

Convenciones:

- Probar slices por su API pública cuando sea posible.
- Probar componentes con Testing Library.
- Probar mappers y utilidades con tests unitarios.
- No depender de imports internos de otro slice en tests.

## 14. Cuándo elegir este enfoque

Elegir Feature-Sliced Design / híbrido cuando:

- La aplicación tendrá crecimiento sostenido.
- Hay varias áreas de dominio.
- El equipo necesita reglas estrictas de importación.
- Se busca equilibrio entre capas técnicas y features.
- El proyecto requiere mantenibilidad a largo plazo.

Evitarlo cuando:

- La aplicación es pequeña.
- El equipo no puede sostener disciplina de imports.
- La complejidad de carpetas supera el beneficio real.

## 15. Evidencia y referencias técnicas

Estas convenciones se apoyan en documentación oficial y referencias de arquitectura frontend:

- React documenta el desarrollo basado en componentes reutilizables y composición de UI: https://react.dev/
- React documenta el uso de TypeScript con componentes, props y hooks tipados: https://react.dev/learn/typescript
- Material UI (MUI) documenta el uso de su sistema de diseño y componentes tipados: https://mui.com/material-ui/getting-started/
- TypeScript documenta los módulos ES, imports/exports y `import type` / `export type`: https://www.typescriptlang.org/docs/handbook/modules/reference.html
- TanStack Router documenta el enrutamiento basado en tipos y la gestión de rutas: https://tanstack.com/router/latest
- Feature-Sliced Design documenta capas, slices, segments y APIs públicas: https://feature-sliced.design/docs
- Feature-Sliced Design documenta que una Public API actúa como contrato de importación entre módulos: https://feature-sliced.design/docs/reference/public-api
