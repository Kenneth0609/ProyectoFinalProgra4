import { createRootRoute, createRoute, Outlet, redirect } from '@tanstack/react-router';
import { LoginPage } from '@/pages/login';
import { DashboardPage } from '@/pages/dashboard';
import { UsersPage } from '@/pages/users';
import { MesasPage } from '@/pages/mesas';
import { ZonasPage } from '@/pages/zonas';
import { ClientesPage } from '@/pages/clientes';
import { ReservasPage } from '@/pages/reservas';
import { useAuthStore } from '@/features/auth-by-email';

// Root Route: Renderiza un Outlet para las rutas hijas
export const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Route Definitions
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: DashboardPage,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (isAuthenticated) {
      throw redirect({ to: '/dashboard' });
    }
  },
  component: LoginPage,
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: DashboardPage,
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/users',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: UsersPage,
});

const mesasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mesas',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: MesasPage,
});

const zonasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/zonas',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: ZonasPage,
});

const clientesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/clientes',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: ClientesPage,
});

const reservasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/reservas',
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({ to: '/login' });
    }
  },
  component: ReservasPage,
});

// Exportación del Árbol de Rutas
export const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  dashboardRoute,
  usersRoute,
  mesasRoute,
  zonasRoute,
  clientesRoute,
  reservasRoute,
]);
