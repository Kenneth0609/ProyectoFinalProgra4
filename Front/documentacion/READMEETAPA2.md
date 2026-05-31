# Etapa 2: Estructura base FSD y configuración de alias

## Objetivo

Implementar la estructura principal de carpetas utilizando Feature-Sliced Design y configurar alias de importación para mantener rutas limpias y escalables.

## Trabajo realizado

Se creó la estructura base del proyecto dentro de `src/`:

```text
src/
├── app/
├── pages/
├── widgets/
├── features/
├── entities/
└── shared/
```

También se configuró el alias `@/` para permitir importaciones desde la raíz de `src`.

## Configuración aplicada

El alias fue registrado en:

- `vite.config.ts`
- `tsconfig.app.json`

Esto permite evitar rutas relativas extensas como:

```ts
../../../shared/ui
```

Y utilizar importaciones más claras:

```ts
@/shared/ui
```

## APIs públicas

Se estableció la regla de que cada slice debe exponer su contenido mediante un archivo `index.ts`.

Esto permite controlar qué elementos pueden ser utilizados por otras capas y reduce el acoplamiento entre módulos.

## Resultado

La plantilla quedó organizada bajo una estructura FSD inicial, con alias configurados y una base preparada para crecer mediante slices independientes.
