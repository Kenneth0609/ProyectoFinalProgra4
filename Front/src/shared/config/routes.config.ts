export const routesConfig = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  users: '/users',
} as const;

export type AppRoutes = typeof routesConfig;
