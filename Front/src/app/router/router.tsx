import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree';

// Creación de la instancia del Router
export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

// Registro de tipos para seguridad en el enrutamiento
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
